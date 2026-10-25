---
id: projectiles-spread-recovery
title: "短暂停火，让弹着重新收拢"
system: projectiles
source: https://gameplayatlas.loopyhop.com/mechanic/projectiles-spread-recovery/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 短暂停火，让弹着重新收拢 · Pause fire to tighten the spread

> 连射换来更多子弹，也可能让后续射击偏得更远。

- **系统**：射击与弹道（projectiles）
- **标签**：precision, timing, risk
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/projectiles-spread-recovery/)

## 基础规则

连续射击会累积散布或后坐偏移，停火后逐步恢复。玩家观察准星扩张和弹着，决定一直压住扳机，还是分成短点射；远近距离会改变哪种节奏更划算。

## 核心循环

1. 估计目标距离和大小
2. 打一小段观察弹着
3. 继续连射或松开恢复
4. 准度恢复后重新瞄准

## 关键取舍

- 近处大目标可以承受较大散布；远处小目标是否值得少打几发换准度？
- 等准星收拢时，敌人是否会先走进掩体？

## 可调参数

- **每发累积与恢复速度**：累积快、恢复慢会鼓励短点射；恢复太快会让停火几乎没有代价。
- **准星反馈**：让准星大小对应可能落点，玩家才能把偏差归因于规则而非运气。

## 最小原型

- **第一步**：做一个固定靶、可视准星和随射击增加、随时间下降的散布值。
- **验证**：把靶子移远后，玩家是否自发缩短连射长度？
- **避免**：随机散布过强会掩盖玩家输入；先保留明确的近距离命中范围。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
短暂停火，让弹着重新收拢（Pause fire to tighten the spread）

## 设计目标
连射换来更多子弹，也可能让后续射击偏得更远。

## 基础规则
连续射击会累积散布或后坐偏移，停火后逐步恢复。玩家观察准星扩张和弹着，决定一直压住扳机，还是分成短点射；远近距离会改变哪种节奏更划算。

## 核心循环
1. 估计目标距离和大小
2. 打一小段观察弹着
3. 继续连射或松开恢复
4. 准度恢复后重新瞄准

## 关键取舍
- 近处大目标可以承受较大散布；远处小目标是否值得少打几发换准度？
- 等准星收拢时，敌人是否会先走进掩体？

## 可调参数
- 每发累积与恢复速度：累积快、恢复慢会鼓励短点射；恢复太快会让停火几乎没有代价。
- 准星反馈：让准星大小对应可能落点，玩家才能把偏差归因于规则而非运气。

## 最小实现建议
做一个固定靶、可视准星和随射击增加、随时间下降的散布值。

## 验证方式
把靶子移远后，玩家是否自发缩短连射长度？

## 需要避免
随机散布过强会掩盖玩家输入；先保留明确的近距离命中范围。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 深岩银河（Deep Rock Galactic）

- 机制来源：[Community wiki — game rules](https://deeprockgalactic.wiki.gg/wiki/Accuracy)
- 画面来源页：https://store.steampowered.com/app/548430/
- 权利人：Ghost Ship Games / Coffee Stain Publishing
- 核验日期：2026-10-21

### 合成人：军团崛起（SYNTHETIK: Legion Rising）

- 机制来源：[Developer article — Flow Fire Games](https://www.moddb.com/news/the-weapon-systems-in-synthetik)
- 画面来源页：https://store.steampowered.com/app/528230/
- 权利人：Flow Fire Games
- 核验日期：2026-10-21

## 对比观察

深岩银河的例子突出散布累积与恢复；SYNTHETIK 还把移动状态纳入准确度取舍。

## 组合灵感

组合提案：敌人抬枪前显示短暂射击提示，玩家利用对方准备阶段停火恢复，在敌人开枪前完成一轮精准点射。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
