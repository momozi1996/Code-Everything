---
id: new-ba7ccec043d7
title: "同题对照：10 个模型跑同一条黏土动画提示词"
model: "Claude Opus 5.5"
author: "Wayne Lowry @wikiwayne"
source: "https://x.com/wikiwayne/status/2107951058584486055"
published_at: "2026-10-07T21:47:50+00:00"
contentLicense: CC-BY-NC-4.0
---

# 同题对照：10 个模型跑同一条黏土动画提示词

- **模型**：Claude Opus 5.5
- **作者**：Wayne Lowry @wikiwayne
- **原帖**：https://x.com/wikiwayne/status/2107951058584486055
- **分类**：3D、动画
- **code2 标签**：code23d, code2blender, code2video
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

## Prompt

```
I gave 10 models the same prompt: one Python script that builds a looping claymation desk scene in Blender. A clay mug with steam, a plant with five leaves, and a paper airplane circling the mug. 96 frames, animated on twos.

The rules: no edits. I ran every script exactly as written, in Blender 4.5 and 5.1, on my GX10.

Passed in 4.5:
Opus 5.5
Grok 4.7
Sonnet 5.5
Muse Spark 1.3
Haiku 5.5
GPT-5.6 Sol

Failed:
GLM 5.3 Flash
Composer 2.5
Grok 4.6
Qwen 3.8 Flash Next (local, even after 23 rounds of fixing its own errors)
```

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://pbs.twimg.com/amplify_video_thumb/2107951038732873728/img/KWNWf7ewbXm9b7vd.jpg

## 备注

作者在回复区给出完整提示词与规则：一条 Python 脚本在 Blender 里搭循环黏土桌面场景（杯子+蒸汽、五叶植物、绕杯纸飞机，96 帧、二拍一），不做任何人工修改。Blender 4.5 通过：Opus 5.5、Grok 4.7、Sonnet 5.5、Muse Spark 1.3、Haiku 5.5、GPT-5.6 Sol；未通过：GLM 5.3 Flash、Composer 2.5、Grok 4.6、Qwen 3.8 Flash Next。对照结论属作者单机实测。
