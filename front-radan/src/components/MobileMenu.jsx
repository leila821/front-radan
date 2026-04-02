import menuItems from '../data/menuItems';
import '../styles/mobile-menu.css';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobile-overlay${isOpen ? ' mobile-overlay--visible' : ''}`}
        onClick={onClose}
      />
      <aside className={`mobile-menu${isOpen ? ' mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
          <a href="/" className="mobile-menu__logo">Logotype</a>
          <button
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1l16 16M17 1L1 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <nav className="mobile-menu__nav">
          <ul className="mobile-menu__list">
            {menuItems.map((item) => (
              <li key={item.label} className="mobile-menu__item">
                <a href="#" className="mobile-menu__link">
                  {item.label}
                  {item.submenu && (
                    <svg className="mobile-menu__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
