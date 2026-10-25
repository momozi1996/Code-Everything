---
id: driving-air-stunt
title: "腾空做动作换取加速"
system: driving
source: https://gameplayatlas.loopyhop.com/mechanic/driving-air-stunt/
contentLicense: CC-BY-NC-4.0
imagesIncluded: false
---

# 腾空做动作换取加速 · Perform an airborne trick for a boost

> 把跳台提供的短暂腾空时间，变成额外动作和速度奖励。

- **系统**：驾驶与竞速（driving）
- **标签**：timing, risk, dexterity
- **出处**：[Gameplay Atlas](https://gameplayatlas.loopyhop.com/mechanic/driving-air-stunt/)

## 基础规则

玩家经过跳台或落差时获得动作窗口，在起跳时或空中输入特技，成功后获得加速奖励。窗口的位置和可连续动作次数由规则决定；玩家既要找到可利用的地形，也要判断剩余时间能否完成动作。

## 核心循环

1. 发现跳台或落差
2. 判断可用动作时间
3. 输入特技并完成落地
4. 利用奖励准备下个路段

## 关键取舍

- 走平稳路线还是利用有特技机会的落差？
- 剩余腾空时间够再做一次，还是应准备落地？

## 可调参数

- **动作窗口位置**：起跳瞬间输入强调地形预判；空中输入更强调剩余时间判断。
- **连续动作奖励**：递增奖励鼓励多做一次，但必须让失败原因清楚可见。

## 最小原型

- **第一步**：先用固定跳跃轨迹、两种滞空时间和一个特技按钮验证时机，无需真实车辆物理。
- **验证**：玩家是否会根据跳台长度主动减少或增加特技次数？
- **避免**：动画时长和判定时长必须一致，否则动作看似完成却失败。

## AI 原型任务模板

```text
你是一名资深游戏原型工程师。请用原创代码与原创占位素材，实现一个可玩的最小原型，验证以下机制。不要复制任何现有游戏的名称、角色、世界观、地图、界面布局、数值表、美术、音频或代码。

## 机制
腾空做动作换取加速（Perform an airborne trick for a boost）

## 设计目标
把跳台提供的短暂腾空时间，变成额外动作和速度奖励。

## 基础规则
玩家经过跳台或落差时获得动作窗口，在起跳时或空中输入特技，成功后获得加速奖励。窗口的位置和可连续动作次数由规则决定；玩家既要找到可利用的地形，也要判断剩余时间能否完成动作。

## 核心循环
1. 发现跳台或落差
2. 判断可用动作时间
3. 输入特技并完成落地
4. 利用奖励准备下个路段

## 关键取舍
- 走平稳路线还是利用有特技机会的落差？
- 剩余腾空时间够再做一次，还是应准备落地？

## 可调参数
- 动作窗口位置：起跳瞬间输入强调地形预判；空中输入更强调剩余时间判断。
- 连续动作奖励：递增奖励鼓励多做一次，但必须让失败原因清楚可见。

## 最小实现建议
先用固定跳跃轨迹、两种滞空时间和一个特技按钮验证时机，无需真实车辆物理。

## 验证方式
玩家是否会根据跳台长度主动减少或增加特技次数？

## 需要避免
动画时长和判定时长必须一致，否则动作看似完成却失败。

## 交付要求
1. 先完成可验证的机制闭环，再考虑表现层；范围控制在单局 3–5 分钟。
2. 所有素材必须原创、程序化生成或使用明确的占位符，不使用第三方游戏资产。
3. 提供运行方式、操作说明、关键参数和验证结果。
4. 如果表现与机制验证冲突，优先保留机制，不增加无关系统。
```

## 实现参考与画面出处

> 这里只列出来源页和权利人。图片未收录，也不提供图片直链；请在原页面查看。

### 马力欧卡丁车8 豪华版（Mario Kart 8 Deluxe）

- 机制来源：[Nintendo-hosted guide / GameWith](https://www.nintendo.com/jp/ichikara/aabpa/index_en.html)
- 画面来源页：https://www.nintendo.com/jp/ichikara/aabpa/02_en.html
- 权利人：Nintendo
- 核验日期：2026-10-21

### 索尼克与全明星赛车：变形（Sonic & All-Stars Racing Transformed Collection）

- 机制来源：[SEGA manual / third-party archive](https://manuzoid.com/manuals/AMBym-Sega%20Sonic%20%26%20All-Stars%20Racing%20Transformed%2010086620023%20User%20manual)
- 画面来源页：https://store.steampowered.com/app/212480/Sonic__AllStars_Racing_Transformed_Collection/
- 权利人：Sumo Digital / SEGA
- 核验日期：2026-10-21

## 对比观察

马力欧卡丁车主要奖励起跳时的准确输入；索尼克允许在跳跃期间连续安排方向动作，增加了腾空时间的分配。

## 组合灵感

组合提案：随机路线每次改变跳台和出口位置，玩家要临时判断哪次腾空值得做特技，哪次应该专心落地。

---

原始整理：Gameplay Atlas · LoopyHop。AI 模板为本仓库生成的研究辅助文本。
