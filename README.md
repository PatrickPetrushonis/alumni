# Alumni Website

Website for the Bridgeport Hospital School of Nursing Alumnae Association.

## Requirements

- Node.js (current LTS)
- npm

## Setup

```
npm install
```

## Commands

Start the local dev server with hot reload:
```
npm run dev
```

Type-check and build for production:
```
npm run build
```

Preview a production build locally:
```
npm run preview
```

Lint the codebase:
```
npm run lint
```

## Deployment

Deployed to GitHub Pages under a custom domain (`www.bhsnaa1.org`, configured
via `public/CNAME`). To publish:
```
npm run deploy
```
This builds the project and pushes `dist/` to the `gh-pages` branch. The
build process also generates a static `index.html` copy for every route and
a `404.html` fallback, since GitHub Pages has no server-side rewrite and a
plain client-side-routed SPA would otherwise 404 on a hard refresh or direct
link to a page other than the homepage.


## Project Structure

```
public/          Static assets served as-is (PDFs, images)
src/
  components/    Shared layout, UI components, and the RichText renderer
  data/          data.json — single source for all page content
  pages/         Route-level content components (data-driven, no layout)
  styles/        Sass source, compiled at build time
  utils/         data.ts (typed parser for data.json), useNavToggle.ts
  App.tsx        Routes, Layout composition, and data wiring
  main.tsx       Application entry point
```

## Styling

Styles are written in Sass under `src/styles` and compiled automatically as
part of the build. `postcss.config.js` applies vendor prefixing based on the
`browserslist` targets in `package.json`.

## Data

All page content — prose, officer/board rosters, and the newsletter archive
— lives in `src/data/data.json`. `src/utils/data.ts` reads and types it,
exporting one data object per page. Page components under `src/pages` are
pure content: they take a `data` prop and render it, with no knowledge of
routing or layout.

## Routing

`App.tsx` owns routing, `Layout` composition, and data wiring in one place:
each `<Route>` pairs a page component with its data and wraps it in
`Layout`.