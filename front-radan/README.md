# Front-End Test Assignment

A responsive blog page built with React, implemented pixel-for-pixel from a Figma design mockup.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx            — Logo, search icon, hamburger toggle
│   ├── Navigation.jsx        — Sticky desktop menu with CSS-only submenus
│   ├── MobileMenu.jsx        — Slide-in drawer for tablet/mobile
│   ├── SearchBar.jsx          — Live post filtering by title or description
│   ├── PostGrid.jsx           — Responsive flexbox 3/2/1 column grid
│   ├── PostCard.jsx           — Post card: image, tag, title, meta, excerpt
│   ├── PostModal.jsx          — Full post popup on card click
│   └── Footer.jsx
├── hooks/
│   ├── usePosts.js            — Fetches data from the JSON endpoint
│   └── useScrollDirection.js  — Controls sticky nav hide/show on scroll
├── data/
│   └── menuItems.js           — Shared menu items for desktop and mobile
├── styles/                    — One CSS file per component
├── App.jsx
└── main.jsx
```

## Implementation Details

### Layout (from Figma)

- **Header** — Two-part structure: logo section on top, navigation bar below, separated by border lines. Search icon positioned top-right.
- **Sticky navigation** — Uses `position: sticky`. Hides smoothly after 200px of scrolling past the header; reappears on scroll up. Adapts to dynamic header height via `useRef`.
- **CSS-only submenus** — Dropdown menus on hover using `opacity`/`visibility` transitions. Submenu items include chevron-right indicators and separator lines, matching the Figma mockup.
- **Mobile menu** — 320px-wide slide-in drawer with logo, close button, and vertically stacked menu items with chevron icons. Closes on overlay click or X button. Hidden on desktop.
- **Responsive grid** — Flexbox with `gap: 48px 40px` (px as required). 3 columns on desktop (≥1024px), 2 on tablet (768–1023px), 1 on mobile (<768px).
- **Retina images** — Every `<img>` uses `srcSet` with `1x` and `2x` paths from the JSON data.

### React

- **Data fetching** — `usePosts` hook fetches from `https://cloud.codesupply.co/endpoint/react/data.json` with loading/error states.
- **Search** — Filters posts in real time by title and description using `useMemo`.
- **Post modal** — Opens on card click. Displays full title, tag, meta, and description. Closes via X button, background overlay click, or Escape key. Locks body scroll while open.

### Design Fidelity

- Colors matched from Figma: accent `#eb0028`, meta text `#9b9b9b`, description `#929292`, white background
- Typography: Roboto (400/500/700) for body, Playfair Display (700 italic) for logo
- All font sizes in `rem`; post column spacing in `px`
- Post cards have no background/shadow — content sits directly on the white page, matching the mockup
- Tags displayed as colored text below the image, not as overlays

## Technical Stack

- React 18 — functional components, hooks (`useState`, `useEffect`, `useMemo`, `useRef`, `forwardRef`)
- Vite — build tooling
- Google Fonts — Roboto, Playfair Display
- Plain CSS — no frameworks, one file per component

## Author

Radan
