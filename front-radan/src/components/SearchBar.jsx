import '../styles/search-bar.css';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <div className="container">
        <div className="search-bar__field">
          <svg
            className="search-bar__icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 10.5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search posts..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
          {value && (
            <button
              className="search-bar__clear"
              onClick={() => onChange('')}
              aria-label="Clear search"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
