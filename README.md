# Tech Guide

A plain-language field guide for new maintenance technicians in commercial buildings.
It is a website that works like an app: open it in a phone browser, tap **Add to Home Screen**, and it works offline after the first visit.

## Edit the content
All the writing lives in the system files below (hvac.js, plumbing.js and so on). You do not need to touch the code.
- `hvac.js`, `plumbing.js`, `electrical.js`, `fire-life-safety.js` – overview, equipment, troubleshooting guides, safety, glossary for each system
- `daily-rounds.js` – daily rounds checklist items
- `escalation.js` – when to stop and call for help

Wrap words in `**double stars**` to make them bold. Glossary words become tappable automatically.
After changing any file, bump `VERSION` in `service-worker.js` so phones pick up the update.

## Try it on your computer
From this folder, run `python3 -m http.server 8000` and open http://localhost:8000.

## Host it
Any static web host works (for example GitHub Pages or Netlify). Offline mode needs HTTPS.

## Status
- Done: all four systems (HVAC, plumbing, electrical, fire & life safety), search, daily rounds, stop & call page

Content is general guidance. Have a senior tech or safety lead review it before new hires rely on it.
