---
id: case-093
title: "ASCII 海浪动画"
model: "Claude Opus 5.5"
author: "@DavidSilgado_"
source: "https://x.com/DavidSilgado_/status/2102605163257381124"
contentLicense: CC-BY-NC-4.0
prompt_status: full
---

# ASCII 海浪动画

```
Create "ASCII TIDES", an animated ocean scene made entirely of monospace characters rendered into a <pre> or a canvas character grid. Characters map to wave height and foam (e.g. " .,:;~=≈*#@"). Layers: a sky with slowly drifting ASCII clouds and a sun or moon made of characters, a horizon, rolling swells (sum of sines plus noise), foam crests, and a small character-built boat bobbing on the surface. Palette: amber phosphor #ffb000 on #140c00 by default, switchable to "Seafoam" (#7fffd4 on #001414) and "Paper" (ink #222 on #f2ecdc). Pointer/touch disturbances create ripples that propagate across the water (2D wave equation on the grid). A time-of-day slider changes the sky (stars at night). Typography: a monospace stack with tight line-height; the grid adapts to the viewport to keep characters crisp. A tiny caption in the corner inside an ASCII box-drawing frame. Smooth at 30–60fps with efficient string building.
```
