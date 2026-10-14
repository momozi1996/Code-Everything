---
id: case-023
title: "高地夜间列车"
model: "Claude Opus 5.5"
author: "PEP PEPICH @Artless101"
source: "https://x.com/Artless101/status/2102598487170822281"
published_at: "2026-09-23T03:18:38+00:00"
contentLicense: CC-BY-NC-4.0
---

# 高地夜间列车

> 原帖标题：Nocturne：高地夜间列车与石拱桥

- **模型**：Claude Opus 5.5
- **作者**：PEP PEPICH @Artless101
- **原帖**：https://x.com/Artless101/status/2102598487170822281
- **分类**：3D、生成艺术
- **code2 标签**：code23d, code2world, code2html, code2frontend, code2audio
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

## Prompt

```
Create a polished, fully interactive 3D artwork called "Nocturne - The Highland Night Train" using Three.js and WebGL. Deliver the entire experience as one standalone HTML file that opens directly in Chrome. Generate the models, materials and textures procedurally, and embed dependencies so the final file can also work offline. Start from scratch and give the scene its own visual identity.

ART DIRECTION
An elegant burgundy night express crosses a monumental curved stone viaduct above a deep alpine valley. Dense conifer forests, a winding river, distant cottages and rugged snow-covered mountains surround the railway. Use a cinematic, carefully detailed miniature style, with cool moonlight, deep blue shadows and warm golden carriage windows. The result should feel like a finished interactive artwork, with thoughtful composition and readable details.

THE TRAIN
Build a convincing diesel locomotive and four passenger carriages. Use deep burgundy paint, cream stripes, brass handrails and charcoal roofs. Model rounded body panels, cab windows, front lamps, radiator grilles, roof fans, exhaust, walkways, steps, buffers, couplings, bogies, wheel flanges and suspension details. Include window frames, curtains and subtle passenger silhouettes. Keep windows and decorative parts visibly outside the body surfaces, without intersections or flickering.

RAILWAY AND MOVEMENT
Create a continuous elliptical railway loop supported by a tall masonry viaduct. Construct actual open arches, piers, individual arch stones, parapets, rails and sleepers. Add procedural stone variation and subtle surface relief. Supports must meet the terrain and the track must have no gaps.

Move the train at a believable, steady speed using an arc-length-parameterized route. Position and orient every carriage independently. Keep the wheels aligned with the rails and make bogies follow the track correctly through turns. Couplings must remain connected without overlapping carriages. Add restrained suspension movement, rotating wheels and exhaust that drifts away into world space.

ENVIRONMENT AND LIGHTING
Use thousands of efficiently instanced conifers with varied heights, shapes and colors. Sculpt irregular mountain ridges with snow on the upper slopes. Add atmospheric depth, a starry sky, a moon halo and a softly feathered headlight beam through the mist. Use warm windows, controlled bloom, soft shadows and subtle color grading. Preserve detail in the train and bridge instead of crushing them into black silhouettes.

INTERACTION
Provide four smoothly transitioning cameras: Cinematic, Train, Window Seat and Free Orbit. Let users rotate and zoom freely. Keep useful framing on both desktop and mobile.

Add distinctly different Moonlight, Blue Hour and First Light presets. Include play/pause, speed controls, a horn button, sound on/off, volume and an option to hide the interface. Use a restrained English-only interface with elegant typography and unobtrusive controls.

AUDIO AND QUALITY
Synthesize quiet railway ambience with Web Audio: a low engine rumble, gentle wheel rhythm, wind and a distant-sounding horn. Start audio only after a user interaction and respect the volume control.

Balance visual richness with smooth performance using instancing, geometry batching and sensible rendering limits. Test the finished HTML in desktop Chrome, capture screenshots, inspect the console and fix visible or technical issues. Verify every control, camera transitions, a complete train circuit, mobile resizing and direct offline opening. Return the final HTML file.
```

## 相关链接

- https://x.com/Artless101/status/2102598487170822281/video/1
- https://x.com/Artless101/status/2102598632595701827
- https://pbs.twimg.com/amplify_video_thumb/2102598400742924288/img/pwUVM1tgSfP1dueM.jpg

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://pbs.twimg.com/amplify_video_thumb/2102598400742924288/img/pwUVM1tgSfP1dueM.jpg

## 备注

作者同帖回复提供完整 Three.js Prompt；Opus 5.5 与 GPT-6 Astra 同题对比。
