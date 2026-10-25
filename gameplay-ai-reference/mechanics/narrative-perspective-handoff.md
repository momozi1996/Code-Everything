---
id: narrative-perspective-handoff
title: "换一个角色承接前面的后果"
system: narrative
source: https://gameplayatlas.loopyhop.com/mechanic/narrative-perspective-handoff/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 换一个角色承接前面的后果 · Continue earlier consequences through another character

> 换了视角，也要接住上一个角色留下的局面。

- **系统**：叙事与选择（narrative）
- **标签**：narrative, information, planning
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/narrative-perspective-handoff/)

## 基础规则

一条故事由多个可操控角色共同推进，角色拥有不同目标和信息。玩家先以某个角色作出选择，再在另一视角中遇到它造成的局面；切换可以由章节安排，也可以让玩家在允许的节点主动跳转。

## 核心循环

1. 以当前角色处理眼前目标
2. 留下会影响别人的结果
3. 切到另一角色面对结果
4. 重新选择并影响后续视角

## 关键取舍

- 为了当前角色方便，是否愿意给另一角色制造麻烦？
- 玩家知道的事实，是否该让尚不知情的角色据此行动？

## 可调参数

- **切换控制权**：固定切换便于安排节奏；自由跳转增加查找因果的空间，也需要清晰的时间标记。
- **跨视角影响的数量**：先让一个行动改变另一场景，比让所有人物互相牵连更容易理解和制作。

## 最小原型

- **第一步**：做两位角色、同一地点的两个视角和一个共享门锁状态。
- **验证**：切换后玩家能否指出当前障碍来自自己先前的哪个行动？
- **避免**：要区分角色知道什么与玩家知道什么，并让时间顺序可以追踪。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
换一个角色承接前面的后果（Continue earlier consequences through another character）

## 设计目标
换了视角，也要接住上一个角色留下的局面。

## 基础规则
一条故事由多个可操控角色共同推进，角色拥有不同目标和信息。玩家先以某个角色作出选择，再在另一视角中遇到它造成的局面；切换可以由章节安排，也可以让玩家在允许的节点主动跳转。

## 核心循环
1. 以当前角色处理眼前目标
2. 留下会影响别人的结果
3. 切到另一角色面对结果
4. 重新选择并影响后续视角

## 关键取舍
- 为了当前角色方便，是否愿意给另一角色制造麻烦？
- 玩家知道的事实，是否该让尚不知情的角色据此行动？

## 可调参数
- 切换控制权：固定切换便于安排节奏；自由跳转增加查找因果的空间，也需要清晰的时间标记。
- 跨视角影响的数量：先让一个行动改变另一场景，比让所有人物互相牵连更容易理解和制作。

## 最小实现建议
做两位角色、同一地点的两个视角和一个共享门锁状态。

## 验证方式
切换后玩家能否指出当前障碍来自自己先前的哪个行动？

## 需要避免
要区分角色知道什么与玩家知道什么，并让时间顺序可以追踪。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 428：被封锁的涩谷（428: Shibuya Scramble）

- 机制来源：[Official publisher — Spike Chunsoft](https://www.spike-chunsoft.com/games/428-shibuya-scramble/)
- 画面来源页：https://store.steampowered.com/app/648580/
- 权利人：Spike Chunsoft
- 核验日期：2026-10-21

### 底特律：化身为人（Detroit: Become Human）

- 机制来源：[Official developer — Quantic Dream](https://www.quanticdream.com/en/detroit-become-human)
- 画面来源页：https://www.games.ch/detroit-become-human/test/review-huai/seite-4.html
- 权利人：Quantic Dream / Sony Interactive Entertainment / screenshot via Games.ch
- 核验日期：2026-10-21

## 对比观察

428 允许围绕相互影响的路线反复调整；底特律更多用章节切换让玩家承接不同人物的处境。

## 组合灵感

组合提案：两位玩家各控制一个视角，只能看到自己的场景；通过描述对方留下的痕迹，协商下一次行动。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
