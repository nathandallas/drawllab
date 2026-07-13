---
name: verify
description: Build, launch, and drive drawllab to verify canvas changes end-to-end
---

# Verifying drawllab

Vite React SPA, no tests. Surface = browser GUI at the canvas page.

## Launch
- `npm run dev` → http://localhost:3000/drawllab/canvas (base is `/drawllab`, port 3000 from vite.config.js)
- `npm run build` outputs to `build/` (sanity check only; not verification)

## Drive (no Playwright installed)
- Install `puppeteer-core` in the scratchpad and launch Edge headless:
  `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`, viewport 1280x800.
- Tools are picked via `label[for="<toolId>"]` clicks (radio inputs are hidden). Tool ids: colorpicker, pen, eraser, line, rectangle, circle, marquee, move, hand.
- Draw/drag with page.mouse (the canvas listens to pointer events; CDP mouse events work).
- Assert state via `JSON.parse(localStorage.getItem("drawllab-elements"))` — element coords are WORLD coords; initial pan is `(winW/2 - 3000, winH/2 - 3000)`, so world = screen + (2360, 2600) at 1280x800, zoom 1.
- Selection marquee = selection bbox ± 8; rotate handle sits 24px above marquee top-center.
- File upload: `elementHandle.uploadFile()` on the hidden `input[type=file]`; downloads via CDP `Browser.setDownloadBehavior` to a scratch dir (clear the dir first — stale PNGs poison polling).
- Synthetic paste (`ClipboardEvent` with `DataTransfer`) and drop (`DragEvent`) both work in-page for image insert probes.

## Gotchas
- `localStorage.clear()` + reload between scenarios; elements persist across reloads by design.
- Mobile breakpoint is 750px; corner clusters move to `bottom: 5.5rem` to clear the toolbar.
