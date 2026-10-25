---
id: exploration-stealth-awareness
title: "分级警觉与潜行绕路"
system: stealth
source: https://gameplayatlas.loopyhop.com/mechanic/exploration-stealth-awareness/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 分级警觉与潜行绕路 · Escalating awareness and stealth routing

> 被看见并非立刻失败，警觉阶段为玩家留下处理窗口。

- **系统**：潜行与警戒（stealth）
- **标签**：information, timing, spatial
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/exploration-stealth-awareness/)

## 基础规则

在敌人的视线、听觉和巡逻路线间移动。可疑行为先累积警觉，再触发搜索或战斗；玩家可停下、遮挡视线、制造诱饵或换路，警觉反馈帮助理解哪里出了问题。

## 核心循环

1. 观察巡逻与视线
2. 选择遮挡与时机
3. 通过或制造诱饵
4. 处理警觉后继续

## 关键取舍

- 等待巡逻离开最稳，制造声音更快，却会改变后续巡逻状态。
- 发现尸体或违法动作会带来连锁后果，路线必须考虑离开时的状态。

## 可调参数

- **警觉累积速度**：缓慢累积允许补救，快速累积强调提前侦察。
- **搜索持续时间**：长时间搜索让失误改变整段关卡，短时间搜索更便于试错。

## 最小原型

- **第一步**：做一条巡逻路线、视野范围，以及平静、怀疑、追踪三个明确状态。
- **验证**：被怀疑后，玩家能否看懂警觉进度并成功采取一次补救行动。
- **避免**：不要一开始叠加听觉、伪装和群体警报；先保证每次状态变化有原因。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
分级警觉与潜行绕路（Escalating awareness and stealth routing）

## 设计目标
被看见并非立刻失败，警觉阶段为玩家留下处理窗口。

## 基础规则
在敌人的视线、听觉和巡逻路线间移动。可疑行为先累积警觉，再触发搜索或战斗；玩家可停下、遮挡视线、制造诱饵或换路，警觉反馈帮助理解哪里出了问题。

## 核心循环
1. 观察巡逻与视线
2. 选择遮挡与时机
3. 通过或制造诱饵
4. 处理警觉后继续

## 关键取舍
- 等待巡逻离开最稳，制造声音更快，却会改变后续巡逻状态。
- 发现尸体或违法动作会带来连锁后果，路线必须考虑离开时的状态。

## 可调参数
- 警觉累积速度：缓慢累积允许补救，快速累积强调提前侦察。
- 搜索持续时间：长时间搜索让失误改变整段关卡，短时间搜索更便于试错。

## 最小实现建议
做一条巡逻路线、视野范围，以及平静、怀疑、追踪三个明确状态。

## 验证方式
被怀疑后，玩家能否看懂警觉进度并成功采取一次补救行动。

## 需要避免
不要一开始叠加听觉、伪装和群体警报；先保证每次状态变化有原因。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 耻辱（Dishonored）

- 机制来源：[Official manual](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/manuals/dishonored-gfw-manual-v15.pdf?t=1750785977)
- 画面来源页：https://store.steampowered.com/app/205100/
- 权利人：Arkane Studios / Bethesda Softworks
- 核验日期：2026-10-21

### 杀手：暗杀世界（HITMAN World of Assassination）

- 机制来源：[Official manual](https://www.feralinteractive.com/en/manuals/hitman/latest/linux/)
- 画面来源页：https://store.steampowered.com/app/1659040/
- 权利人：IO Interactive
- 核验日期：2026-10-21

## 对比观察

《耻辱》突出物理遮挡与垂直路线；《杀手》还加入身份权限，站在人群中也可能是安全选择。

## 组合灵感

设计提案：博物馆修复师可以合法进入展厅，但携带错误工具会引起注意；玩家通过借还工具改变可走路线。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
