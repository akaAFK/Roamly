# Roamly — Tourism Platform

Roamly is a responsive, React-based tourism discovery frontend. The project uses a minimal black, white, and red visual system, with photography-led cards and clear navigation.

> **Project status:** frontend prototype for educational use. Destination data and budget estimates are mock data. The application does not process bookings, payments, accounts, or live travel prices.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home page, destination search, featured places, travel moods, tips |
| `/destinations` | Destination catalogue with search, travel-style filter, region filter, and saved places |
| `/experiences` | Experiences catalogue with category filters |
| `/planner` | Interactive trip-planning form with a rough budget estimate |
| `/about` | Project overview, competitor comparison, risks, and product principles |

## Features

- React + Vite single-page application.
- Client-side routing with React Router (HashRouter is used for static-hosting compatibility).
- Shared header, footer, and page layout.
- Reusable destination and experience cards.
- Search and filters backed by local mock data.
- Save/unsave destinations; saved IDs persist in browser `localStorage`.
- Trip planner with destination, number of days, traveller count, travel style, and interests.
- Responsive layouts for desktop, tablet, and mobile screens.
- Accessible labels, button states, image descriptions, and reduced-motion support.
- Custom not-found route.

## Requirements

- Node.js 20 or later (Node.js 22 recommended).
- npm.

## Run locally

1. Download or clone this repository.
2. Open a terminal in the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

Create a production build with:

```bash
npm run build
npm run preview
```

## Suggested folder structure

```text
roamly/
├── docs/
│   ├── PROJECT_REPORT.md
│   └── Roamly_Project_Report.docx
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Mock-data note

All destinations, ratings, durations, and dollar estimates are demonstration values included for the prototype. They should not be treated as verified travel offers. Before a production release, replace the mock data with a reliable backend or API and clearly show data freshness, currency, and included costs.

## External assets

The current prototype uses remote Unsplash image URLs and Google Fonts. An internet connection is required to load those external assets. For a production version, download appropriately licensed images or use an asset provider with clear usage terms, and provide local fallbacks.
