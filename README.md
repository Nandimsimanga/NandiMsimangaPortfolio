# Nandi Msimanga — Portfolio

Personal portfolio site built with React and Vite. Content (projects, skills, contact links, and more) lives in `src/data/content.js`.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later (recommended)
- npm (included with Node.js)

## Getting started

Clone the repository, then install dependencies:

```bash
npm install
```

## Run locally (development)

Start the dev server with hot reload:

```bash
npm run dev
```

Vite prints a local URL in the terminal (usually `http://localhost:5173`). Open that address in your browser.

## Build for production

Create an optimized production build in the `dist/` folder:

```bash
npm run build
```

## Preview the production build

After building, serve the `dist/` output locally to test the production bundle:

```bash
npm run preview
```

## Lint

Check the codebase with ESLint:

```bash
npm run lint
```

## Project structure

```
src/
  App.jsx          # Page layout and sections
  App.css          # Styles
  data/content.js  # Portfolio content (edit this to update copy & links)
  hooks/           # Reusable React hooks
```

## Deployment

Pushes to the `main` branch deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`. The workflow builds with:

```bash
VITE_BASE_PATH=/NandiMsimangaPortfolio/ npm run build
```

For local development, no base path is needed. For a custom deploy path, set `VITE_BASE_PATH` when building.
