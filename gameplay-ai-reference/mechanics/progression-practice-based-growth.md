---
id: progression-practice-based-growth
title: "做什么，就练强什么"
system: progression
source: https://gameplayatlas.loopyhop.com/mechanic/progression-practice-based-growth/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 做什么，就练强什么 · Practice-based skill growth

> 成长跟随实际行为，常做的事情自然变成特长。

- **系统**：成长与解锁（progression）
- **标签**：progression, planning, time
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/progression-practice-based-growth/)

## 基础规则

行动成功时，相关技能获得经验，达到门槛后提高效率或开放新做法。经验不能任意分给别的技能，玩家需要在完成当前目标和练习薄弱能力之间分配时间。

## 核心循环

1. 选择要做的事情
2. 完成行动获得对应经验
3. 跨过技能门槛
4. 利用新效率或改练别项

## 关键取舍

- 用最熟练的办法快速完成任务，还是换不熟悉的办法顺便练习？
- 专练一项提高产出，还是分散练习以应对更多任务？

## 可调参数

- **经验触发条件**：只奖励有效行动可减少原地刷按钮，但条件必须容易看懂。
- **成长带来的变化**：只涨小数字容易无感；更省资源或新增做法更容易察觉。

## 最小原型

- **第一步**：做两类工作、各自经验条和一个可见的成本下降门槛。
- **验证**：玩家能否指出哪次行动带来了成长，并为练习主动换一次工作？
- **避免**：别先加几十项技能；先确认每项都有值得重复的行动。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
做什么，就练强什么（Practice-based skill growth）

## 设计目标
成长跟随实际行为，常做的事情自然变成特长。

## 基础规则
行动成功时，相关技能获得经验，达到门槛后提高效率或开放新做法。经验不能任意分给别的技能，玩家需要在完成当前目标和练习薄弱能力之间分配时间。

## 核心循环
1. 选择要做的事情
2. 完成行动获得对应经验
3. 跨过技能门槛
4. 利用新效率或改练别项

## 关键取舍
- 用最熟练的办法快速完成任务，还是换不熟悉的办法顺便练习？
- 专练一项提高产出，还是分散练习以应对更多任务？

## 可调参数
- 经验触发条件：只奖励有效行动可减少原地刷按钮，但条件必须容易看懂。
- 成长带来的变化：只涨小数字容易无感；更省资源或新增做法更容易察觉。

## 最小实现建议
做两类工作、各自经验条和一个可见的成本下降门槛。

## 验证方式
玩家能否指出哪次行动带来了成长，并为练习主动换一次工作？

## 需要避免
别先加几十项技能；先确认每项都有值得重复的行动。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 星露谷物语（Stardew Valley）

- 机制来源：[Official wiki](https://stardewvalleywiki.com/Skills)
- 画面来源页：https://store.steampowered.com/app/413150/
- 权利人：ConcernedApe
- 核验日期：2026-10-21

### 上古卷轴5：天际 特别版（The Elder Scrolls V: Skyrim Special Edition）

- 机制来源：[Official game manual](https://assets.ctfassets.net/rporu91m20dc/1IuJHrbXY8GqSQQM0GuuUM/2a3c85e2d7772c2eb45f996443f320f4/manual_skyrim-le_ps3_en-us.pdf)
- 画面来源页：https://store.steampowered.com/app/489830/
- 权利人：Bethesda Game Studios / Bethesda Softworks
- 核验日期：2026-10-21

## 对比观察

《星露谷物语》让日常工作逐渐变熟练；《天际》还把各项技能增长汇入人物等级，练习会影响更广的成长节奏。

## 组合灵感

设计提案：工坊订单同时给报酬和对应工艺经验，玩家可以接熟悉订单赚钱，也能接低利润订单练新手艺。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
