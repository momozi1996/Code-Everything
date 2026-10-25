---
id: stealth-body-concealment
title: "搬运与藏匿身体"
system: stealth
source: https://gameplayatlas.loopyhop.com/mechanic/stealth-body-concealment/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 搬运与藏匿身体 · Moving and hiding bodies

> 放倒守卫只是前半步，还得决定把留下的证据放哪儿。

- **系统**：潜行与警戒（stealth）
- **标签**：planning, spatial, risk
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/stealth-body-concealment/)

## 基础规则

倒地人物留在场景里，其他人发现后会改变警戒。玩家可花时间拖走或放入藏匿点，但搬运时更难迅速脱身；先选处置位置，往往比先动手更重要。

## 核心循环

1. 观察其他人的巡逻
2. 选好放倒位置
3. 把身体移到遮蔽处
4. 重新检查通路

## 关键取舍

- 就地绕过身体节省时间，还是搬走以免稍后的巡逻发现？
- 近处藏点方便但会绕远出口，远处藏点是否值得更长搬运？

## 可调参数

- **搬运速度**：速度差越大，放倒地点越重要，也越需要规划第二个人的视线。
- **藏匿容量**：有限容量迫使玩家分散行动地点，而非反复堆在同一处。

## 最小原型

- **第一步**：做两名守卫、一条巡逻线、一个可拖动身体与一个藏匿区。
- **验证**：玩家第二次尝试时，会不会先看藏点再决定在哪里放倒守卫？
- **避免**：避免身体碰撞与动画先耗尽工期；原型用一个可拖动标记验证路线成本即可。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
搬运与藏匿身体（Moving and hiding bodies）

## 设计目标
放倒守卫只是前半步，还得决定把留下的证据放哪儿。

## 基础规则
倒地人物留在场景里，其他人发现后会改变警戒。玩家可花时间拖走或放入藏匿点，但搬运时更难迅速脱身；先选处置位置，往往比先动手更重要。

## 核心循环
1. 观察其他人的巡逻
2. 选好放倒位置
3. 把身体移到遮蔽处
4. 重新检查通路

## 关键取舍
- 就地绕过身体节省时间，还是搬走以免稍后的巡逻发现？
- 近处藏点方便但会绕远出口，远处藏点是否值得更长搬运？

## 可调参数
- 搬运速度：速度差越大，放倒地点越重要，也越需要规划第二个人的视线。
- 藏匿容量：有限容量迫使玩家分散行动地点，而非反复堆在同一处。

## 最小实现建议
做两名守卫、一条巡逻线、一个可拖动身体与一个藏匿区。

## 验证方式
玩家第二次尝试时，会不会先看藏点再决定在哪里放倒守卫？

## 需要避免
避免身体碰撞与动画先耗尽工期；原型用一个可拖动标记验证路线成本即可。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 杀手：暗杀世界（HITMAN World of Assassination）

- 机制来源：[Official HITMAN (2016) manual; shared trilogy mechanics](https://www.feralinteractive.com/en/manuals/hitman/latest/linux/)
- 画面来源页：https://store.steampowered.com/app/1659040/
- 权利人：IO Interactive A/S
- 核验日期：2026-10-21

### 赏金奇兵3（Desperados III）

- 机制来源：[Community walkthrough — mission rules](https://gamefaqs.gamespot.com/pc/246140-desperados-iii/faqs/78420/until-death-do-us-part)
- 画面来源页：https://store.steampowered.com/app/610370/
- 权利人：Mimimi Games / THQ Nordic
- 核验日期：2026-10-21

## 对比观察

《杀手》的容器形成明确收纳点；《赏金奇兵3》把搬运放进俯视视野与多角色调度中。

## 组合灵感

设计提案：救援任务中，背着伤员会占满负重；必须先丢弃战利品，才能把同伴安全带走。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
