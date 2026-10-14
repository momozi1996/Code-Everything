---
id: new-c86b1871cdcc
title: "Unreal Engine 里用 Opus 5.5 建可玩关卡的 8 步流程"
model: "Claude Opus 5.5"
author: "rewind @rewind02"
source: "https://x.com/rewind02/status/2107488247739732250"
published_at: "2026-10-06T15:08:48+00:00"
contentLicense: CC-BY-NC-4.0
---

# Unreal Engine 里用 Opus 5.5 建可玩关卡的 8 步流程

- **模型**：Claude Opus 5.5
- **作者**：rewind @rewind02
- **原帖**：https://x.com/rewind02/status/2107488247739732250
- **分类**：游戏
- **code2 标签**：code2game, code2world
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

## Prompt

```
here's how to build a game in Unreal Engine with Claude Opus 5.5...

the trick is letting Opus work inside the live editor, but there's a smart way to set it up:

- step 1: Unreal Engine 5 + the Third Person template, so you can walk and jump from minute one
- step 2: enable Unreal MCP and AllToolsets in the editor, start the server
- step 3: install Epic's plugin in Claude Code and have Opus read the project before it changes anything
- step 4: one prompt builds a playable base level: a valley, a dirt path, a town at the end, 3 glowing collectibles
- step 5: test the whole route with the default mannequin before any custom art
- step 6: bring in a rigged character on the UE5 Mannequin skeleton, Opus swaps it in and wires walk, run and jump
- step 7: import your forest and town assets, Opus places them along the route
- step 8: refine in small batches: vegetation, lighting, a minimap, the town entrance

and the rule that saves the project...

a successful tool call doesn't mean the level is right

check the editor after every batch, and never change terrain, lighting and character in one prompt
```

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://pbs.twimg.com/amplify_video_thumb/2107487897708339201/img/d-l_fnj26_PRgnJL.jpg

## 备注

作者给出可复现的 8 步设置（UE5 第三人称模板 → 开启 Unreal MCP/AllToolsets → Claude Code 装 Epic 插件并先读项目 → 一条提示词生成基础可玩关卡 → 先用默认人偶跑通 → 换成骨架角色 → 导入森林与城镇资产 → 小批量迭代），并强调一条关键规则："工具调用成功不等于关卡正确"。同一串回复区有读者质疑资产来源与"魔法提示词"，该质疑一并保留。
