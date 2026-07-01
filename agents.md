# Agent Guide for webdevjosh

## Project Overview

A lightweight React portfolio web app built with Vite. The app currently provides:

- a **Home** page
- a **Resume** page
- simple client-side routing via `react-router-dom`
- global CSS variables and CSS Modules for component styling
- a small reveal-on-scroll hook for animated sections
- Font Awesome icon support

This project is intentionally simple and optimized for a personal portfolio.

## Key Technologies

- React 18
- Vite
- React Router DOM
- ESLint
- CSS Modules
- `public/` for static assets and downloadable files

## Directory Structure

```
/ (project root)
  package.json
  vite.config.js
  index.html
  agents.md
  public/               # static assets served as-is
  src/
    main.jsx            # app entrypoint
    App.jsx             # router + global reveal hook
    index.css           # global site styles, fonts, resets, CSS variables
    App.module.css      # app-level layout styles
    styles/
      global.module.css # shared reusable scoped classes (reveal, utilities)
    data/               # JSON content for pages
    hooks/              # shared React hooks
    icons/              # Font Awesome initializer
    assets/             # imported image assets
    pages/              # page-level React components
    components/         # reusable UI components
```

## App Architecture

### Routing

- `App.jsx` contains the router and the main layout wrapper.
- Routes are defined for `/` (Home) and `/resume`.
- Navigation uses `NavLink` for active styling.

### Styling

- `src/index.css` contains global styles, CSS variables, font imports, and base typography.
- `App.module.css` holds top-level layout styles for the main app shell.
- `src/styles/global.module.css` contains reusable shared classes used across components, such as reveal animation helpers.
- Component-specific styling is done with CSS Modules in each component folder.

### Data

- App content is stored as JSON in `src/data/`.
- Pages import these JSON files directly and render their content dynamically.
- This keeps markup and content separate and makes updates easier.

### Hooks

- `src/hooks/useReveal.js` is a custom hook that watches `scroll` and `resize` events.
- It toggles `.revealed` and `.reveal-once` classes on elements that have the reveal class.
- The hook is initialized once in `App.jsx`.

### Icons

- `src/icons/fontAwesome.js` registers Font Awesome icons into the library.
- `main.jsx` imports this file so icons are available app-wide.
- Components use `FontAwesomeIcon` directly.

## Asset Strategy

- Use `public/` for files that should be served directly and downloaded by users.
  - Example: `public/resume.pdf`, `public/favicon.ico`
- Use `src/assets/` for images and files imported by React components.
  - Example: `import logo from '../assets/logo.png';`

## Common Patterns

- Prefer small, focused components in `src/components/`.
- Use a shared `global.module.css` for CSS module class names that are reused by multiple components.
- Avoid mixing raw class strings with CSS Modules unless you explicitly want a global selector.

## Development Notes

- Run the app locally with `npm run dev`.
- Build for production with `npm run build`.
- Lint with `npm run lint`.
- Deploy to GitHub Pages with `npm run deploy` once `package.json` has the correct `homepage`.

## Best Practices for Future Changes

- Keep page data in JSON rather than hard-coded markup when possible.
- Avoid global CSS class name collisions by favoring CSS Modules and clear naming.
- Keep animation logic in hooks and reusable CSS classes rather than inline styles.
- Put downloadable user-facing static assets in `public/`, not `src/`.

## Notes for Agents

- This is a small, content-driven portfolio project. The priority is clarity and maintainability over complex architecture.
- Use the existing patterns unless there is a strong reason to introduce a new dependency.
- If you need to add new shared styling, consider placing it in `src/styles/global.module.css` and importing it as a CSS module.
- If you need a new static download or favicon, add it under `public/` and reference it with an absolute path.
