import { forwardRef } from 'react';
import '../styles/header.css';

const Header = forwardRef(function Header({ onMenuToggle, menuOpen }, ref) {
  return (
    <header className="header" ref={ref}>
      <div className="container header__inner">
        <button
          className="header__burger"
          onClick={onMenuToggle}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <a href="/" className="header__logo">Logotype</a>
        <svg
          className="header__search-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="6.5" cy="6.5" r="5.75" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </header>
  );
});

export default Header;
