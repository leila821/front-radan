import { useState, useEffect, useRef } from 'react';

export default function useScrollDirection(threshold = 200) {
  const [isHidden, setIsHidden] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const lastScrollY = useRef(0);
  const headerRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const headerBottom = headerRef.current
          ? headerRef.current.getBoundingClientRect().height
          : 0;

        setIsStuck(currentY > headerBottom);

        if (currentY <= headerBottom) {
          setIsHidden(false);
        } else if (currentY > lastScrollY.current && currentY > headerBottom + threshold) {
          setIsHidden(true);
        } else if (currentY < lastScrollY.current) {
          setIsHidden(false);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return { isHidden, isStuck, headerRef };
}
