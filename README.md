# Tech Guide

A plain-language field guide for new maintenance technicians in commercial buildings.
It is a website that works like an app: open it in a phone browser, tap **Add to Home Screen**, and it works offline after the first visit.

## Edit the content
All the writing lives in the system files below (hvac.js, plumbing.js and so on). You do not need to touch the code.
- `hvac.js`, `plumbing.js`, `electrical.js`, `fire-life-safety.js` – overview, equipment, troubleshooting guides, safety, glossary for each system
- `daily-rounds.js` – daily rounds checklist items
- `escalation.js` – when to stop and call for help
- `drawings.js` – labeled drawings for every equipment type
- `manuals.js` – official manufacturer manual links (each one checked before adding)
- `codeguides.js` – alarm flowcharts for equipment with alarm displays
- `brands.js` – brand directory: websites and tech support numbers (with the date they were checked)
- `building.js` – your building's own photos and exact manuals (photos go in the `photos` folder)

This repository is public: never add addresses, phone numbers, staff names or photos that show where a building is.

Wrap words in `**double stars**` to make them bold. Glossary words become tappable automatically.
After changing any file, bump `VERSION` in `service-worker.js` so phones pick up the update.

## Try it on your computer
From this folder, run `python3 -m http.server 8000` and open http://localhost:8000.

## Host it
Any static web host works (for example GitHub Pages or Netlify). Offline mode needs HTTPS.

## Status
- Done: all four systems (HVAC, plumbing, electrical, fire & life safety), search, daily rounds, stop & call page

Content is general guidance. Have a senior tech or safety lead review it before new hires rely on it.
