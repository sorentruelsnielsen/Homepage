# Homepage

My personal browser start page, hosted on GitHub Pages.

## What's on it

- Big clock, date, ISO week number and a greeting
- Weather from [Open-Meteo](https://open-meteo.com) (no API key, 5 days ahead)
- Countdowns to whatever dates are coming up
- A links grid and a search box (Google, or type a URL directly)

## Editing it

Everything is in **one file: [`config.js`](config.js)**.
Change your name, weather location, countdowns and links there, then push.
Expired countdown dates hide automatically.

Note: GitHub Pages pages are **publicly viewable** by anyone with the URL -
only put non-sensitive content here.

## Running it locally

It is plain static files, so any of these work:

- Double-click `index.html`, or
- `python -m http.server` in this folder and open http://localhost:8000

## Make it your browser start page

1. Enable GitHub Pages: repo **Settings - Pages - Branch: `main` / (root) - Save**.
2. Set your browser homepage / "on startup" pages to
   `https://sorentruelsnielsen.github.io/Homepage/`
