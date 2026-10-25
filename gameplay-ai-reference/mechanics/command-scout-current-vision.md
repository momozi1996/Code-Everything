---
id: command-scout-current-vision
title: "派人侦察，换取眼前信息"
system: command
source: https://gameplayatlas.loopyhop.com/mechanic/command-scout-current-vision/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 派人侦察，换取眼前信息 · Send scouts to reveal current information

> 地图上去过，不等于现在知道敌人在哪。

- **系统**：指挥与单位（command）
- **标签**：information, risk
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/command-scout-current-vision/)

## 基础规则

未探索区域或视野外敌人被隐藏，玩家派单位前进获得信息，再决定主力是否跟上。侦察占用人员和时间，也可能暴露侦察者；静态地形记忆与当前敌情要分开显示。

## 核心循环

1. 识别信息盲区
2. 派出侦察单位
3. 读取新出现的威胁
4. 据此推进或撤回

## 关键取舍

- 让快单位独自深入，还是让主力靠近保护它？
- 为了提前知道侧路情况，是否放弃正面一部分力量？

## 可调参数

- **视野范围**：范围小更紧张，但也更容易出现无法预判的遭遇。
- **信息保持方式**：保留地形但隐藏移动敌人，可区分探索记忆与当前侦察。

## 最小原型

- **第一步**：用格子地图、一个侦察点和一个隐藏移动目标验证视野刷新。
- **验证**：玩家会不会先探路，再让高价值单位进入未知区域？
- **避免**：过期敌情不能仍像实时信息一样可靠。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
派人侦察，换取眼前信息（Send scouts to reveal current information）

## 设计目标
地图上去过，不等于现在知道敌人在哪。

## 基础规则
未探索区域或视野外敌人被隐藏，玩家派单位前进获得信息，再决定主力是否跟上。侦察占用人员和时间，也可能暴露侦察者；静态地形记忆与当前敌情要分开显示。

## 核心循环
1. 识别信息盲区
2. 派出侦察单位
3. 读取新出现的威胁
4. 据此推进或撤回

## 关键取舍
- 让快单位独自深入，还是让主力靠近保护它？
- 为了提前知道侧路情况，是否放弃正面一部分力量？

## 可调参数
- 视野范围：范围小更紧张，但也更容易出现无法预判的遭遇。
- 信息保持方式：保留地形但隐藏移动敌人，可区分探索记忆与当前侦察。

## 最小实现建议
用格子地图、一个侦察点和一个隐藏移动目标验证视野刷新。

## 验证方式
玩家会不会先探路，再让高价值单位进入未知区域？

## 需要避免
过期敌情不能仍像实时信息一样可靠。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 北境之地（Northgard）

- 机制来源：[Official community wiki — Northgard](https://northgard.fandom.com/wiki/Scout_Camp)
- 画面来源页：https://www.gamestar.de/galerien/northgard,100868.html
- 权利人：Shiro Games
- 核验日期：2026-10-21

### 幽浮2（XCOM 2）

- 机制来源：[Official manual — Feral Interactive](https://www.feralinteractive.com/en/manuals/xcom2/latest/steam/)
- 画面来源页：https://store.steampowered.com/app/268500/
- 权利人：Firaxis Games / 2K
- 核验日期：2026-10-21

## 对比观察

北境之地把侦察做成经济人口的专职工作；幽浮2让小队推进直接承担揭露敌人的风险。

## 组合灵感

组合提案：资源探测器只报告矿物，侦察单位负责确认附近敌情，两种信息结合后才安排采集队。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
