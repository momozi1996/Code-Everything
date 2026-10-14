---
id: case-015
title: "像素巫师施法动画"
model: "Claude Opus 5.5"
author: "Majid Manzarpour @majidmanzarpour"
source: "https://x.com/majidmanzarpour/status/2102476258948927543"
published_at: "2026-09-22T19:12:56+00:00"
contentLicense: CC-BY-NC-4.0
---

# 像素巫师施法动画

> 原帖标题：像素巫师：蓄力、施法与恢复动画

- **模型**：Claude Opus 5.5
- **作者**：Majid Manzarpour @majidmanzarpour
- **原帖**：https://x.com/majidmanzarpour/status/2102476258948927543
- **分类**：动画、生成艺术
- **code2 标签**：code2game, code2html, code2css, code2canvas, code2video
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

## Prompt

```
Create a single self-contained HTML file that renders an animated pixel art wizard casting a spell, using vanilla JavaScript and Canvas 2D. No external assets, libraries, or network requests.

RENDERING
- Draw everything to an offscreen canvas at a fixed logical resolution of 128x96, then blit to a fullscreen display canvas scaled by the largest integer factor that fits the window, centered, with imageSmoothingEnabled = false and CSS image-rendering: pixelated.
- All drawing snaps to integer coordinates on the logical canvas. No sub-pixel positions, anti-aliasing, gradients, or shadowBlur.
- Fixed palette of ~24 hex colors: deep blues/purples for night sky, warm robe tones, 3-4 bright magic colors. Every pixel comes from this palette.

CHARACTER
- Build the wizard procedurally from filled rects and pixel runs, ~24x32 logical pixels: pointed hat with a bend, long beard, two-shade robe with darker outline, staff with a gem at the tip.
- Parameterize the pose (staff angle, arm raise, head tilt, robe sway). Animate parameters smoothly, then quantize to the pixel grid each frame so motion reads at an 8-12 fps pixel animation feel even though the loop runs at 60fps.

ANIMATION
- Looping state machine: IDLE (2-frame bob, beard sway) -> CHARGE (staff raises, gem flickers, sparks spiral inward) -> CAST (bright burst, projectile fires across the scene, 1-2 pixel screen shake) -> RECOVER (settle back). Ease pose parameters between keyframes.
- Pooled allocation-free particle system: preallocate and reuse. Sparks orbit the gem during CHARGE, explode outward on CAST, each particle stepping its palette index from white to magic color to dark before despawn. Snap particle positions to the grid when drawing.
- Fixed 60hz timestep update with rAF rendering. Zero object allocation inside the loop.

SCENE
- Minimal background: dark sky, a few twinkling 1px stars, moon, stone floor line. Character silhouette must read clearly.
- Subtle 1px rim light on the wizard from the gem, brightening during CHARGE and CAST.

QUALITY BAR
- Crisp pixels at any window size, seamless loop, stable 60fps, readable silhouette. Should look like a polished 16-bit sprite animation, not vector shapes scaled down.
```

## 相关链接

- https://x.com/majidmanzarpour/status/2102476258948927543/video/1
- https://x.com/majidmanzarpour/status/2102476499387383834
- https://pbs.twimg.com/amplify_video_thumb/2102476231740399616/img/c0rCI7sJtWi1Gq5Q.jpg

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://pbs.twimg.com/amplify_video_thumb/2102476231740399616/img/c0rCI7sJtWi1Gq5Q.jpg

## 备注

作者同帖回复公开完整 Canvas 2D Prompt。
