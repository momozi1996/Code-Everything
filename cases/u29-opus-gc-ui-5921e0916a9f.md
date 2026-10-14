---
id: u29-opus-gc-ui-5921e0916a9f
title: "UI 形态变换动效设计模板"
model: "Claude Opus 5.5"
author: "zero @twoclipping"
source: "https://x.com/twoclipping/status/2103273003555402193"
published_at: "2026-09-24T23:58:55+00:00"
contentLicense: CC-BY-NC-4.0
---

# UI 形态变换动效设计模板

- **模型**：Claude Opus 5.5
- **作者**：zero @twoclipping
- **原帖**：https://x.com/twoclipping/status/2103273003555402193
- **分类**：动画
- **code2 标签**：code2game, code2video, code2html, code2css, code2canvas, code2frontend, code2viz, code2audio
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

**在线 Demo**：https://goodcase.ai/cases/ui-5921e0916a9f

## Prompt

```
<inputs>
Ask me for: 8 to 12 UI states I want the shape to become (e.g. button, loader, player, slider, toggle, tabs, chart, command palette, toast), pure black and white or one accent color, and a royalty-free song around 120 BPM (e.g. Mixkit, free for commercial use).
</inputs>

<direction>
Dribbble-level UI motion. One shape, never cut: every state is the same element morphing its size, radius and color while its content swaps with a short blur. A cursor drives every change with real clicks and drags. Light warm-gray canvas, black and white components, one clean UI font (Geist). Springs everywhere, a tiny overshoot at most. The camera zooms so each state fills the frame. The last frame is the first frame, so it loops.
Banned: bouncy easing, particle bursts, glows, gradients on UI chrome, mismatched icon strokes, dead time, anything that looks like a template.
</direction>

<structure>
120 BPM, 7 bars, something happens on every beat.
Button → loader → check → dynamic island → music player with a play/pause morph → scrub the progress bar → it becomes a volume slider that stretches when dragged past max → a toggle flips on the beat → the knob becomes a liquid tab indicator → the tabs open into a chart that draws itself, with a tooltip on hover → it collapses into ⌘K → type to filter → enter → toast → back to the button.
</structure>

<build>
1. One HTML file, square 1440x1440. Every style is computed from time inside seek(t): no CSS transitions, no timers, no state carried between frames.
2. Springs are closed-form step responses. A value that changes target many times is the sum of one spring per change, so it stays a pure function of time.
3. The tab indicator's two edges ride different springs, so the leading edge stretches ahead of the trailing one. Same trick for the toggle knob.
4. Drags are direct manipulation: while the cursor is held, the value is computed from its position. On release it springs back from wherever it was.
5. Analyze the song with numpy for the beat grid and start on a downbeat. Place every UI sound by its measured peak.
6. Render with Playwright: 4 subframes per frame, blended with ffmpeg tmix for motion blur at 60fps.
7. Render one frame per beat before the full render. Fix anything off the grid, cramped or hard to read.
</build>

<gotchas>
Never put will-change on anything the camera scales or the text renders blurry. Text that swaps inside a morphing container needs its own enter and exit timing or it overlaps. Make the last frame identical to the first, cursor position and speed included, or the loop stutters.
</gotchas>

<start>
Ask me for the inputs, then show me the state list on the beat grid before you write any code.
</start>
```

## 相关链接

- https://goodcase.ai/cases/ui-5921e0916a9f
- https://media.goodcase.ai/cases/2c89162a3d05.jpg

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://media.goodcase.ai/cases/2c89162a3d05.jpg

## 备注

来自 goodcase.ai 收录的 X 原帖，完整 Prompt 原文照抄；未逐帖回读验证作者与媒体。
