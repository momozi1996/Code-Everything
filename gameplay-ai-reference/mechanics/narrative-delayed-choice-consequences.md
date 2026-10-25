---
id: narrative-delayed-choice-consequences
title: "把早先的选择留到后来结算"
system: narrative
source: https://gameplayatlas.loopyhop.com/mechanic/narrative-delayed-choice-consequences/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 把早先的选择留到后来结算 · Let an earlier choice change a later event

> 眼前没有立即奖惩，后面的场景却记得你做过什么。

- **系统**：叙事与选择（narrative）
- **标签**：narrative, planning, time
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/narrative-delayed-choice-consequences/)

## 基础规则

玩家在当前事件中做决定，系统保存具体事实，例如答应过谁或让谁留下。经过其他事件后，后续场景读取这些事实，改变可用帮助、角色处境或回应。重点是跨事件的因果回响，而非只加减好感数值。

## 核心循环

1. 作出当前选择
2. 带着记录继续经历事件
3. 在后来的场景遇到回响
4. 依据新局面再次决策

## 关键取舍

- 接受眼前的便利，还是保护暂时看不到回报的承诺？
- 发现过去选择的代价后，要坚持还是尝试补救？

## 可调参数

- **回响间隔**：间隔越长越需要角色、物件或台词提醒因果，避免玩家忘记。
- **保存的事实数量**：少量能互相影响的事实更容易验证；大量分支组合会迅速增加写作和测试负担。

## 最小原型

- **第一步**：只保存一个承诺，让两个后续场景读它；准备完整的两条结果。
- **验证**：回响发生时，玩家能否想起原选择，并理解中间的因果？
- **避免**：只显示“某人会记住”却没有后续变化，会削弱玩家对选择的信任。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
把早先的选择留到后来结算（Let an earlier choice change a later event）

## 设计目标
眼前没有立即奖惩，后面的场景却记得你做过什么。

## 基础规则
玩家在当前事件中做决定，系统保存具体事实，例如答应过谁或让谁留下。经过其他事件后，后续场景读取这些事实，改变可用帮助、角色处境或回应。重点是跨事件的因果回响，而非只加减好感数值。

## 核心循环
1. 作出当前选择
2. 带着记录继续经历事件
3. 在后来的场景遇到回响
4. 依据新局面再次决策

## 关键取舍
- 接受眼前的便利，还是保护暂时看不到回报的承诺？
- 发现过去选择的代价后，要坚持还是尝试补救？

## 可调参数
- 回响间隔：间隔越长越需要角色、物件或台词提醒因果，避免玩家忘记。
- 保存的事实数量：少量能互相影响的事实更容易验证；大量分支组合会迅速增加写作和测试负担。

## 最小实现建议
只保存一个承诺，让两个后续场景读它；准备完整的两条结果。

## 验证方式
回响发生时，玩家能否想起原选择，并理解中间的因果？

## 需要避免
只显示“某人会记住”却没有后续变化，会削弱玩家对选择的信任。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 行尸走肉：第二季（The Walking Dead: Season Two）

- 机制来源：[Official store — Telltale / Skybound](https://store.steampowered.com/app/261030/)
- 画面来源页：https://store.steampowered.com/app/261030/
- 权利人：Telltale Games / Skybound Games
- 核验日期：2026-10-21

### 隐迹渐现（Pentiment）

- 机制来源：[Official developer site — Obsidian](https://pentiment.obsidian.net/)
- 画面来源页：https://limitedrungames.com/products/switch-limited-run-229-pentiment
- 权利人：Obsidian Entertainment / Xbox Game Studios / image via Limited Run Games
- 核验日期：2026-10-21

## 对比观察

行尸走肉强调章节和作品之间的选择继承；Pentiment 用多年后的社区变化拉长回响距离。

## 组合灵感

组合提案：村民请求占用一块地种果树；多年后它可能提供食物，也会让原本想建广场的人记起这次让地决定。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
