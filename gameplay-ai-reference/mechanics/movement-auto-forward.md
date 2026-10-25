---
id: movement-auto-forward
title: "自动前进中选择动作时机"
system: movement
source: https://gameplayatlas.loopyhop.com/mechanic/movement-auto-forward/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 自动前进中选择动作时机 · Choose action timing while moving automatically

> 方向已经确定，你只负责在对的时间跳、滑或出手。

- **系统**：移动与操控（movement）
- **标签**：timing, dexterity, precision
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/movement-auto-forward/)

## 基础规则

角色持续向前移动，玩家不能靠停在原地消除压力。前方障碍以可辨认的顺序出现，玩家根据距离和速度选择动作时机；成功通过后马上读取下一组障碍，失误则结束或退回一段。

## 核心循环

1. 读取即将接近的障碍
2. 选择动作和触发时机
3. 通过或碰撞
4. 继续读取下一组

## 关键取舍

- 提前跳更稳，但会不会太早落进后面的空隙？
- 为奖励使用更冒险的动作时机，还是只保证通过主路线？

## 可调参数

- **前方可见时间**：可见时间越长越能计划动作序列；太短则容易变成记忆障碍位置。
- **动作种类**：单一跳跃强调时机，多种动作加入识别与切换，但也增加输入负担。

## 最小原型

- **第一步**：制作 20 秒固定速度路线，只放三种容易辨认的障碍；先用两个按键完成跳与滑。
- **验证**：观察连续失败是否集中在看不清下一障碍的位置；玩家应能说出自己按早了、按晚了还是选错动作。
- **避免**：不要一开始同时随机速度、间距与障碍类型，否则失败原因难以读懂。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
自动前进中选择动作时机（Choose action timing while moving automatically）

## 设计目标
方向已经确定，你只负责在对的时间跳、滑或出手。

## 基础规则
角色持续向前移动，玩家不能靠停在原地消除压力。前方障碍以可辨认的顺序出现，玩家根据距离和速度选择动作时机；成功通过后马上读取下一组障碍，失误则结束或退回一段。

## 核心循环
1. 读取即将接近的障碍
2. 选择动作和触发时机
3. 通过或碰撞
4. 继续读取下一组

## 关键取舍
- 提前跳更稳，但会不会太早落进后面的空隙？
- 为奖励使用更冒险的动作时机，还是只保证通过主路线？

## 可调参数
- 前方可见时间：可见时间越长越能计划动作序列；太短则容易变成记忆障碍位置。
- 动作种类：单一跳跃强调时机，多种动作加入识别与切换，但也增加输入负担。

## 最小实现建议
制作 20 秒固定速度路线，只放三种容易辨认的障碍；先用两个按键完成跳与滑。

## 验证方式
观察连续失败是否集中在看不清下一障碍的位置；玩家应能说出自己按早了、按晚了还是选错动作。

## 需要避免
不要一开始同时随机速度、间距与障碍类型，否则失败原因难以读懂。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### Canabalt（Canabalt）

- 机制来源：[Developer postmortem — Adam Saltsman](https://www.gamedeveloper.com/design/tuning-canabalt)
- 画面来源页：https://store.steampowered.com/app/358960/
- 权利人：Finji / Kittehface Software
- 核验日期：2026-10-21

### BIT.TRIP RUNNER（BIT.TRIP RUNNER）

- 机制来源：[Community wiki — BIT.TRIP RUNNER](https://bittrip.fandom.com/wiki/BIT.TRIP_RUNNER)
- 画面来源页：https://www.gog.com/en/game/bittrip_runner
- 权利人：Gaijin Games / Choice Provisions
- 核验日期：2026-10-21

## 对比观察

《Canabalt》把主要操作收束为跳跃，在变化的屋顶和跑速中判断时机；《BIT.TRIP RUNNER》用预设障碍序列要求切换跳、滑、踢等动作。

## 组合灵感

设计提案：自动前进的角色每经过一扇门就面对一个提前亮起的攻击提示，玩家选择跳过低扫或滑过高射线。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
