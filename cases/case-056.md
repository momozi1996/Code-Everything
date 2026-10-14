---
id: case-056
title: "N 体引力沙盒"
model: "Claude Opus 5.5"
author: "@DavidSilgado_"
source: "https://x.com/DavidSilgado_/status/2102605163257381124"
published_at: "2026-09-23T03:45:10+00:00"
contentLicense: CC-BY-NC-4.0
---

# N 体引力沙盒

> 原帖标题：030 · Orbital — N-Body Gravity Playground

- **模型**：Claude Opus 5.5
- **作者**：@DavidSilgado_
- **原帖**：https://x.com/DavidSilgado_/status/2102605163257381124
- **分类**：可视化、前端
- **code2 标签**：code2canvas, code2frontend, code2viz
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

**在线 Demo**：https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/030-gravity-sandbox.html

## Prompt

```
Create "Orbital — N-Body Gravity Playground". A full-screen canvas of deep space (#03040a) with a subtle nebula (layered noise gradients in #1b1464 and #5f0f40) and parallax stars. Click and drag to fling a new body: the drag vector sets its velocity, shown as a dotted aiming line with a predicted trajectory that accounts for existing masses. Bodies attract with softened Newtonian gravity, leave glowing fading trails, and merge on collision (conserving momentum and mass, mixing colours) with a flash. Colour and glow reflect mass (small icy blue → large hot orange/white). Presets: "Binary star", "Solar system", "Figure-eight three-body", "Galaxy collision" (hundreds of light particles around two cores). A minimal monospace HUD shows body count, total energy and simulation speed. Controls: mass selector for new bodies, pause, slow motion, trail length, clear, and "follow" (camera tracks the heaviest body). Scroll/pinch to zoom, right-drag or two-finger drag to pan. Use a fixed-timestep velocity-Verlet integrator.
```

## 相关链接

- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/030-gravity-sandbox.html
- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/thumbs/030-gravity-sandbox.jpg
- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/030-gravity-sandbox.txt

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/thumbs/030-gravity-sandbox.jpg

## 备注

合辑公开的原始 Prompt，已逐字对照对应 .txt 文件；未独立复跑。
