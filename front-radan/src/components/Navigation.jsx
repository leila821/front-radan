import menuItems from '../data/menuItems';
import '../styles/navigation.css';

const submenuLabels = {
  Demos: ['Demo 1', 'Demo 2', 'Demo 3'],
  Post: ['Post Header', 'Post Layout', 'Share Buttons', 'Gallery Post', 'Video Post'],
  Features: ['Feature 1', 'Feature 2', 'Feature 3'],
  Categories: ['Lifestyle', 'Travel', 'Style', 'Music', 'Events'],
  Shop: ['Shop Page', 'Cart', 'Checkout'],
};

export default function Navigation({ isHidden, isStuck }) {
  const navClass = [
    'nav',
    isStuck ? 'nav--stuck' : '',
    isHidden ? 'nav--hidden' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navClass}>
      <div className="container">
        <ul className="nav__list">
          {menuItems.map((item) => (
            <li
              key={item.label}
              className={`nav__item${item.submenu ? ' nav__item--has-sub' : ''}`}
            >
              <a href="#" className="nav__link">
                {item.label}
              </a>
              {item.submenu && (
                <ul className="nav__submenu">
                  {(submenuLabels[item.label] || item.submenu).map((sub) => (
                    <li key={sub} className="nav__submenu-item">
                      <a href="#" className="nav__submenu-link">
                        {sub}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
