---
id: gpt6-astra-arcade-kitchen
title: "午夜外卖合作出餐"
model: "GPT-6 Astra"
author: "火山哥️ @huoshan007"
source: "https://x.com/huoshan007/status/2102703772128489903"
published_at: "2026-09-23T10:17:00+00:00"
contentLicense: CC-BY-NC-4.0
---

# 午夜外卖合作出餐

- **模型**：GPT-6 Astra
- **作者**：火山哥️ @huoshan007
- **原帖**：https://x.com/huoshan007/status/2102703772128489903
- **分类**：游戏
- **code2 标签**：code2game, code2canvas, code2deck
- **许可**：CC-BY-NC-4.0（默认许可：署名-非商业使用（CC BY-NC 4.0）。本条内容为第三方原作者作品，若原作者另有明确声明，以原作者声明为准。如需下架请提 Issue，即刻移除。）

## Prompt

```
请制作可直接在浏览器运行的原创双人合作小游戏《午夜外卖》。使用纯 JavaScript ES Module 和 Canvas 2D，不需要账号、不依赖远程图片、字体或游戏库。

一局 75 秒，逻辑场地 960×600。温暖的午夜小面馆：木色棋盘地砖、薄荷绿和桃粉色两个小厨师、有表情的小脸、厨师帽、围裙、碗里冒出的蒸汽、切菜动作、出餐粒子和柔和阴影。不要做成静态卡片或演示文稿。

玩法：左侧蔬菜仓无限取原料；左上备菜台自动加工 2.1 秒；中央接力台可放取一份食材；右上炉灶将切好的食材烹饪 2.8 秒；右侧取餐窗口仅接受熟食。每人一次只能携带一份。台面有实体碰撞，互动距离有限，错误材料不能加工，处理中不能提前拿走。两人附近可直接递给空手搭档。

每碗基础 100 分，经过两人之手额外 40 分；连续出餐每次增加 10 分，连单奖励上限 40 分。接力出餐让两位玩家平分贡献，团队总分等于双方之和。订单 24 秒超时会换单、断连单，但不删除玩家手中食物。75 秒后停止游戏，只触发一次结算。

P1：WASD 移动、F 互动、G 递菜；P2：方向键移动、K 互动、L 递菜。提供触屏方向键和操作按钮。提供单人+机器人、同屏双人、明确标注的自动展示。规则机器人必须通过与人类一样的输入正常走路、加工、传菜、送餐，不能伪造分数。暂停、重开、声音开关与移动端布局可用。

可选增加局域网手机手柄：电脑运行本地 Node 服务，手机与电脑同一 Wi-Fi，按房间码加入，实际传输两位玩家的独立按键状态；不声称已经部署公网联机。

将引擎做成 export meta / createGame({width,height,seed,sound,end})，返回 update(dt,inputs)、draw(ctx)、bot(index)、getState()。固定随机种子可复现。写测试验证原料不能出餐、加工不能跳过、双人交接保留物品、140 分接力首单公平分配、订单过时、75 秒结束一次、机器人正常完成出餐。交付源码、启动方式和真实浏览器截图。
```

## 相关链接

- https://github.com/huoshantao7-hub/party-pocket-arcade
- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/docs/kitchen.md
- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/assets/kitchen.jpg

## 原始媒体（指向原作者 CDN，不在本仓库托管）

- https://raw.githubusercontent.com/huoshantao7-hub/party-pocket-arcade/1d631426532c498b4a42e25e2b68230044a03dc1/assets/kitchen.jpg

## 备注

作者仓库标注“复现提示词”，不是逐轮原始聊天记录；按作者公开复现版本原样收录。6 款不同任务来自同一个 X 帖和同一仓库，不算6个独立来源。运行成品需 Node.js 20+；同 Wi-Fi 手机手柄仍未经过实体手机跨网络验证。源码 MIT；不以作者描述替代本次试玩验收。
