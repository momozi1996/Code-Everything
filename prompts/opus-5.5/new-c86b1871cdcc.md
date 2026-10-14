---
id: new-c86b1871cdcc
title: "Unreal Engine 里用 Opus 5.5 建可玩关卡的 8 步流程"
model: "Claude Opus 5.5"
author: "rewind @rewind02"
source: "https://x.com/rewind02/status/2107488247739732250"
contentLicense: CC-BY-NC-4.0
prompt_status: full
---

# Unreal Engine 里用 Opus 5.5 建可玩关卡的 8 步流程

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
