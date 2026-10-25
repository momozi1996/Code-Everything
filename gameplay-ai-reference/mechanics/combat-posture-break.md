---
id: combat-posture-break
title: "失衡积累与处决窗口"
system: combat
source: https://gameplayatlas.loopyhop.com/mechanic/combat-posture-break/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 失衡积累与处决窗口 · Stagger buildup and punish windows

> 先持续施压制造破绽，再把破绽兑换成高价值攻击。

- **系统**：战斗与战术（combat）
- **标签**：timing, risk, progression
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/combat-posture-break/)

## 基础规则

除了生命值，再设一条可被攻击或防守互动累积的失衡状态。达到阈值后敌人暴露弱点；玩家需要在其恢复前赶到并执行奖励动作。

## 核心循环

1. 选择高失衡手段
2. 连续维持压力
3. 识别破防反馈
4. 兑现处决或重击

## 关键取舍

- 保持压力可以阻止恢复，但继续贴身也扩大受伤风险。
- 低伤害高失衡招式，让最优输出不再只看单次伤害。

## 可调参数

- **自然恢复速度**：恢复越快，系统越鼓励贴身连续互动。
- **破防收益**：高收益让铺垫更有价值，低收益更像短暂控场。

## 最小原型

- **第一步**：做生命与失衡两条数值、轻重两种攻击，以及固定长度的破绽窗口。
- **验证**：比较敌人残血与失衡将满两种局面，玩家是否选择不同攻击。
- **避免**：如果失衡只是第二条血条，玩家不会改变打法；需要恢复或时机约束。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
失衡积累与处决窗口（Stagger buildup and punish windows）

## 设计目标
先持续施压制造破绽，再把破绽兑换成高价值攻击。

## 基础规则
除了生命值，再设一条可被攻击或防守互动累积的失衡状态。达到阈值后敌人暴露弱点；玩家需要在其恢复前赶到并执行奖励动作。

## 核心循环
1. 选择高失衡手段
2. 连续维持压力
3. 识别破防反馈
4. 兑现处决或重击

## 关键取舍
- 保持压力可以阻止恢复，但继续贴身也扩大受伤风险。
- 低伤害高失衡招式，让最优输出不再只看单次伤害。

## 可调参数
- 自然恢复速度：恢复越快，系统越鼓励贴身连续互动。
- 破防收益：高收益让铺垫更有价值，低收益更像短暂控场。

## 最小实现建议
做生命与失衡两条数值、轻重两种攻击，以及固定长度的破绽窗口。

## 验证方式
比较敌人残血与失衡将满两种局面，玩家是否选择不同攻击。

## 需要避免
如果失衡只是第二条血条，玩家不会改变打法；需要恢复或时机约束。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 只狼：影逝二度（Sekiro: Shadows Die Twice）

- 机制来源：[Official manual](https://www.fromsoftware.jp/manual/sekiroshadowsdietwice/stadia/mechanics.html)
- 画面来源页：https://store.steampowered.com/app/814380/
- 权利人：FromSoftware / Activision
- 核验日期：2026-10-21

### 艾尔登法环（Elden Ring）

- 机制来源：[Official developer guide](https://en.bandainamcoent.eu/elden-ring/news/elden-ring-starter-guide-tips-know-playing-the-game)
- 画面来源页：https://store.steampowered.com/app/1245620/
- 权利人：FromSoftware / Bandai Namco
- 核验日期：2026-10-21

## 对比观察

《只狼》架势条是持续可读的核心目标；《艾尔登法环》将破势嵌入不同武器与攻击选择中。

## 组合灵感

设计提案：双人合作中，一人制造失衡、另一人收网捕获；击杀与活捉的收益不同。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
