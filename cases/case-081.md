---
id: case-081
title: "落沙物理沙盒"
model: "Claude Opus 5.5"
author: "@DavidSilgado_"
source: "https://x.com/DavidSilgado_/status/2102605163257381124"
published_at: "2026-09-23T03:45:10+00:00"
contentLicense: CC-BY-NC-4.0
---

# 落沙物理沙盒

> 原帖标题：055 · Dune Engine — Falling Sand Sandbox

- **模型**：Claude Opus 5.5
- **作者**：@DavidSilgado_
- **原帖**：https://x.com/DavidSilgado_/status/2102605163257381124
- **分类**：游戏、3D、可视化
- **code2 标签**：code2game, code23d, code2canvas, code2viz
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

**在线 Demo**：https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/055-falling-sand.html

## Prompt

```
Create "Dune Engine — Falling Sand Sandbox", a cellular-automaton physics toy. A pixel-art canvas (each cell 3–4px) with elements: Sand (warm variations #e6c07b, #d8a95b), Water (#3d7ee0 with shimmer, flows sideways), Stone (static greys), Fire (flickers, rises, burns wood, turns water to steam), Wood (#8b5a2b), Steam (rises and condenses back into water), Oil (floats on water, highly flammable), Lava (turns sand into glass), and Plant (grows into water). Correct density-based interactions (sand sinks in water, oil floats). Desert-dusk UI palette: sand #f3e3c3, terracotta #c1440e, deep dusk blue #1f2a44. An element picker as a row of textured swatches with icons, brush-size slider, pause, clear, and "Scenes" (hourglass, volcano, oasis). Pointer/touch painting interpolated along the stroke. A tiny monospace readout of particle count and fps. Efficient: typed arrays, bottom-up updates with alternating direction, ImageData rendering.
```

## 相关链接

- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/055-falling-sand.html
- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/thumbs/055-falling-sand.jpg
- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/055-falling-sand.txt

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://miaai-lab.github.io/Claude-Opus-5.5-100-HTML-Files/thumbs/055-falling-sand.jpg

## 备注

合辑公开的原始 Prompt，已逐字对照对应 .txt 文件；未独立复跑。
