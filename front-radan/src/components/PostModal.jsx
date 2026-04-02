import { useEffect } from 'react';
import '../styles/post-modal.css';

export default function PostModal({ post, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!post) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1l12 12M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="modal__image-wrap">
          <img
            className="modal__image"
            src={post.img}
            srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
            alt={post.title}
          />
        </div>

        <div className="modal__content">
          <span className="modal__tag">{post.tags}</span>
          <h2 className="modal__title">{post.title}</h2>
          <div className="modal__meta">
            <span className="modal__author">{post.autor}</span>
            <span className="modal__sep">&middot;</span>
            <time className="modal__date">{post.date}</time>
            <span className="modal__sep">&middot;</span>
            <span className="modal__views">{post.views} Views</span>
          </div>
          <p className="modal__text">{post.text}</p>
        </div>
      </div>
    </div>
  );
}
