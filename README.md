# WebDevJosh Portfolio

A personal portfolio site built with React and Vite.

## Overview

This project is a lightweight, content-driven portfolio focused on clarity and maintainability. It currently includes:

- a home page with an intro banner, project showcase, and about section
- a resume page with downloadable resume access and structured experience sections
- shared header and footer components
- simple client-side routing with `react-router-dom`
- CSS Modules for component styling
- shared global utility classes
- Font Awesome icons
- reveal-on-scroll animations
- a curtain-style page transition system for navigation

Most page copy and CTA content is stored in JSON files under `src/data/`, which keeps content updates separate from component markup.

## Current Site Behavior

- The site uses a fixed header with persistent navigation and social links.
- The home page introduces Josh, highlights selected projects, and includes a closing call-to-action in the footer.
- The resume page presents structured experience content and provides a downloadable resume file.
- Navigation between routes is enhanced with curtain-style transitions instead of abrupt page swaps.
- Scroll-based reveal animations are used throughout the site to bring sections into view progressively.
- Key calls to action and social links direct visitors to external profiles and resources.
- The layout is responsive, with a dedicated mobile navigation experience for smaller screens.

## Tech Stack

- React 18
- Vite
- React Router DOM
- CSS Modules
- ESLint
- Font Awesome

## Project Structure

```text
/
  public/            static assets served as-is
  src/
    assets/          imported images
    components/      reusable UI pieces
    data/            JSON-driven page content
    hooks/           shared React hooks
    icons/           Font Awesome library setup
    pages/           route-level page components
    styles/          shared CSS Module utilities
    App.jsx          app shell and routes
    main.jsx         app entrypoint
    index.css        global styles and variables
```

## Main Features

### Routing

Routes are defined in `src/App.jsx`:

- `/` renders the home page
- `/resume` renders the resume page

The app is wrapped in `BrowserRouter`, and navigation is coordinated with a curtain transition hook.

### Content Model

The portfolio is largely driven by JSON content files in `src/data/`, including:

- `intro.json`
- `about.json`
- `projects.json`
- `resume.json`
- `footer.json`

This makes it easy to update text, button labels, and link destinations without editing component logic.

### Styling

The project uses:

- `src/index.css` for global styles, resets, fonts, and CSS variables
- CSS Modules for component-specific styling
- `src/styles/global.module.css` for shared utilities such as layout helpers, reveal classes, background highlight styles, and visually hidden text

### Animation and Interaction

The project includes a few shared interaction patterns:

- reveal-on-scroll behavior through `useReveal`
- curtain-based route transitions through `useCurtainTransition`
- a reusable animated `BubbleButton`

### Accessibility

The social icon links include screen-reader-only text so links have discernible accessible labels while remaining visually icon-only.

## Components

Some key reusable components include:

- `Header`: fixed header, social links, and mobile menu
- `Footer`: closing CTA and footer copy
- `Banner`: homepage intro section
- `Projects` and `ProjectCard`: featured work section
- `ImageContentBlock`: supporting content block with imagery
- `ResumeSection` and `ResumeItem`: resume page structure
- `BubbleButton`: reusable animated CTA button
- `IconLink`: icon-only external links with accessible text support
- `Curtains`: route transition visuals

There is also a reusable `Form` component in `src/components/Form/` that is currently not rendered, but has been kept in the repo for possible future use.

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Deployment

This site is deployed with Netlify.

Netlify can build the site with:

```bash
npm run build
```

and publish the generated `dist/` directory.
