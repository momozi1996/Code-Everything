# 玩法总索引

共 280 个机制、28 个系统。每条含玩法说明、最小原型和 AI 任务模板。

## 分配与调度 · allocation（8）

- [按顺序从公共池选走一个 · Take one option from a shared pool](mechanics/allocation-public-pick.md) — 自己拿走的东西，也会从别人的选择里消失。
- [派人占住一次行动位置 · Commit a worker to occupy an action](mechanics/allocation-worker-placement.md) — 先去的位置能做事，也会暂时挡住别人。
- [用人数争夺区域控制 · Control an area by having more presence](mechanics/allocation-area-majority.md) — 多放一个单位，可能就改变一整片区域的归属。
- [抢占路段改变对手通路 · Claim routes to alter an opponent’s path](mechanics/allocation-route-denial.md) — 一段路既能帮自己连接，也能让别人被迫绕远。
- [抢先拿到公共目标奖励 · Race for a public objective reward](mechanics/allocation-public-goal-race.md) — 进度够了还要赶得上，奖励可能先被别人拿走。
- [从共享库存购买单位 · Recruit from a shared stock](mechanics/allocation-shared-stock.md) — 别人买走的同类单位，会减少你继续补齐的机会。
- [第二轮倒着选补偿后手 · Reverse the next pass to compensate late picks](mechanics/allocation-snake-order.md) — 前面先挑，后面则有机会连着挑两次。
- [我选行动，其他人也能跟着做 · Choose a phase that others can also use](mechanics/allocation-follow-phase.md) — 自己开启的机会，也可能帮对手推进计划。

## 自动化与物流 · automation（10）

- [传送带路径规划 · Conveyor routing](mechanics/automation-belt-routing.md) — 让物料绕过障碍、穿过交叉点，持续抵达机器入口。
- [分流与产能配比 · Flow splitting and ratios](mechanics/automation-flow-splitting.md) — 把有限输入分给多台机器，避免一边吃撑、一边断粮。
- [按物料筛选运输 · Item-filtered transport](mechanics/automation-item-filtering.md) — 为混合物流设定规则，让不同物品自动走向正确出口。
- [多级生产链 · Multi-stage production chains](mechanics/automation-production-chain.md) — 把上一道工序的产出变成下一道的输入，逐级制造复杂物品。
- [管道与液体输送 · Fluid routing](mechanics/automation-fluid-routing.md) — 通过管线、泵与分支把液体送到正确设备。
- [电力供需平衡 · Power supply balancing](mechanics/automation-power-budget.md) — 让发电、储能与负载保持匹配，避免扩产拖垮整座工厂。
- [传感器条件控制 · Sensor-driven control](mechanics/automation-conditional-control.md) — 让机器根据温度、库存或其他信号自动启停。
- [无人运输网络 · Autonomous aerial logistics](mechanics/automation-aerial-logistics.md) — 把重复搬运交给飞行单位，再围绕覆盖、能源和吞吐重新规划。
- [生产模块蓝图复用 · Reusable factory blueprints](mechanics/automation-blueprint-reuse.md) — 把验证过的生产单元保存下来，快速复制并适配新场地。
- [副产物消纳与回流 · Byproduct consumption and recirculation](mechanics/automation-byproduct-loop.md) — 给不想要的产出找到去处，避免它把主产品生产一起堵停。

## 建造与空间 · building（10）

- [结构支撑与坍塌 · Structural support and collapse](mechanics/building-structural-support.md) — 建得高、伸得远之前，先找到能够承受结构的支点。
- [房间资格判定 · Room qualification rules](mechanics/building-room-requirements.md) — 用围合空间和指定设施，把普通地块变成有功能的房间。
- [地形塑造 · Terrain shaping](mechanics/building-terrain-shaping.md) — 直接改动高低与地面形状，为建筑和水流创造条件。
- [设施覆盖选址 · Service coverage placement](mechanics/building-service-coverage.md) — 让关键设施覆盖更多需求，同时减少无效重叠。
- [道路与入口连通 · Road and entrance connectivity](mechanics/building-access-network.md) — 建筑摆下去不等于能工作，还要让人和货到达入口。
- [垂直空间叠建 · Vertical stacking](mechanics/building-vertical-stacking.md) — 平面放不下时，把功能层叠起来，再解决上下连接。
- [模块吸附拼装 · Modular snap construction](mechanics/building-modular-snapping.md) — 把墙、地板等部件对齐接口，快速拼出可编辑结构。
- [施工顺序与优先级 · Construction sequencing](mechanics/building-construction-sequencing.md) — 先画计划，再让工人按资源、通路和紧急程度落地。
- [蓄水结构与水位管理 · Water retention and level management](mechanics/building-water-engineering.md) — 通过阻挡与放流改变水位，把水变成可管理的地形资源。
- [隔热分区与温控 · Thermal zoning and control](mechanics/building-thermal-zoning.md) — 把热源、冷库和生活区分开，让布局参与温度管理。

## 战斗与战术 · combat（18）

- [攻防共用耐力 · Shared attack–defense stamina](mechanics/combat-stamina-budget.md) — 每多打一刀，都在花掉下一次闪避的余量。
- [瞬间招架 · Timed parries](mechanics/combat-timed-parry.md) — 把防御从持续按住，变成一次有风险的时机判断。
- [无敌帧闪避 · Invulnerability-window dodging](mechanics/combat-invulnerable-dodge.md) — 不只离开危险区，也能在正确瞬间穿过攻击。
- [失衡积累与处决窗口 · Stagger buildup and punish windows](mechanics/combat-posture-break.md) — 先持续施压制造破绽，再把破绽兑换成高价值攻击。
- [部位弱点瞄准 · Weak-point targeting](mechanics/combat-weakpoint-aim.md) — 同一个敌人，不同命中位置会改变攻击价值。
- [部位破坏改写战局 · Part destruction changes the fight](mechanics/combat-part-destruction.md) — 攻击局部目标，永久削减敌人的能力或取得专属掉落。
- [掩体与侧翼包抄 · Cover and flanking](mechanics/combat-cover-flanking.md) — 安全不是一个地点，而是相对于敌人射线的关系。
- [地表元素连锁 · Reactive combat surfaces](mechanics/combat-surface-reactions.md) — 技能不仅打人，还能改写脚下的战场。
- [连招变化奖励 · Combo variety rewards](mechanics/combat-combo-variation.md) — 不仅要求打赢，还用即时评价推动玩家尝试不同招式。
- [战斗牌库循环 · Combat draw–discard cycles](mechanics/combat-combat-deck-cycle.md) — 每次出牌既解决眼前问题，也改变下一轮抽牌结构。
- [敌人下一步提前公开 · Previewing enemy intent](mechanics/combat-intent-preview.md) — 先知道威胁，再用有限行动改变将要发生的事。
- [推拉敌人改变站位 · Forced movement](mechanics/combat-forced-movement.md) — 把敌人送到不该站的位置，有时比直接扣血更有效。
- [移动攻击共用行动点 · Shared action points](mechanics/combat-action-points.md) — 每回合预算有限，走近一点就可能少打一次。
- [留守警戒与反应射击 · Overwatch and reaction fire](mechanics/combat-overwatch.md) — 把当前机会留到敌人行动时，用一片危险区域限制它。
- [双方先排指令再同时执行 · Simultaneous planned orders](mechanics/combat-simultaneous-orders.md) — 先排好几秒动作，再观看双方计划撞在一起。
- [暂停战斗再分配指令 · Pausing to issue orders](mechanics/combat-pause-orders.md) — 事情同时发生太多时，暂停一下，把队伍安排明白。
- [范围攻击也会伤到队友 · Area attacks with friendly fire](mechanics/combat-friendly-fire.md) — 威力大的范围技能，需要先替自己人留出安全位置。
- [炸开掩体重画战场 · Destroying cover to reshape a fight](mechanics/combat-destructible-cover.md) — 拆掉挡路或挡枪的东西，让原本安全的位置变危险。

## 指挥与单位 · command（10）

- [调整速度安排出手先后 · Tune speed to arrange turn order](mechanics/command-initiative-order.md) — 让先手留给铺垫者，再让收割者接上。
- [趁准备阶段打断行动 · Interrupt an action during preparation](mechanics/command-interrupt-action.md) — 放弃眼前伤害，换掉敌人即将完成的大动作。
- [把敌人的注意力拉到自己身上 · Redirect enemy attention](mechanics/command-threat-redirection.md) — 让能承伤的人接管危险，给脆弱队友腾出空间。
- [把耐打单位放到前面 · Protect damage dealers with a front line](mechanics/command-frontline-shielding.md) — 用队列顺序决定谁先挨打。
- [开打之前布阵，开打之后观察 · Arrange before combat, then observe](mechanics/command-prebattle-formation.md) — 把操作重点放在开战前的一次布置。
- [凑够不同成员触发团队加成 · Reach team bonuses with distinct members](mechanics/command-trait-thresholds.md) — 让一个较弱成员也可能成为阵容缺少的最后一块。
- [派人侦察，换取眼前信息 · Send scouts to reveal current information](mechanics/command-scout-current-vision.md) — 地图上去过，不等于现在知道敌人在哪。
- [把队伍拆开处理不同目标 · Split forces between simultaneous objectives](mechanics/command-split-objectives.md) — 同一批人无法同时守住每个地方。
- [集中火力先减掉一个威胁 · Focus fire to remove one threat](mechanics/command-focus-fire.md) — 打伤所有敌人，与让一个敌人停止攻击，是两种收益。
- [在人口中分配生产与作战 · Allocate people between work and combat](mechanics/command-workers-or-soldiers.md) — 多一个作战单位，可能就少一个持续创造资源的人。

## 商业与交易 · commerce（11）

- [留住商品等下一轮再买 · Reserve a shop item for a later purchase](mechanics/allocation-shop-reservation.md) — 暂时买不起，也可以先保住这次机会。
- [价格试探 · Price discovery](mechanics/commerce-price-discovery.md) — 根据顾客反应逐步找到可接受的售价，而不是直接查看标准答案。
- [讨价还价 · Haggling](mechanics/commerce-haggling.md) — 在成交前主动改变报价，用反应、时机或让步换取更好条件。
- [供需驱动价格 · Supply-driven market prices](mechanics/commerce-dynamic-market.md) — 让买卖行为改变下一次报价，市场成为会被玩家影响的系统。
- [地区价差运输 · Regional arbitrage](mechanics/commerce-regional-arbitrage.md) — 在地点之间搬运商品，赚取扣除路途成本后的差价。
- [陈列与销售位置 · Shop display allocation](mechanics/commerce-shop-display.md) — 让有限展示位成为销售策略，而不是把库存一股脑倒进商店。
- [识别顾客需求 · Interpreting customer requests](mechanics/commerce-interpret-orders.md) — 从自然表达中识别需求，再用产品属性满足它。
- [限时委托交付 · Timed delivery contracts](mechanics/commerce-timed-contracts.md) — 在接单之前判断能力，把生产计划与交付承诺绑定。
- [债务与现金流压力 · Debt and cash-flow pressure](mechanics/commerce-debt-pressure.md) — 用持续偿债目标区分“赚到钱”和“真正能支配的钱”。
- [竞拍与止损报价 · Auction bidding limits](mechanics/commerce-auction-bidding.md) — 在对手不断抬价时，守住自己对标的的真实估值。
- [自动贸易路线 · Programmed trade routes](mechanics/commerce-trade-route-programming.md) — 把反复跑商变成可调的路线与装卸规则，管理例外而非每次下令。

## 烹饪与食物 · cooking（10）

- [食谱知识解锁 · Recipe knowledge unlocks](mechanics/cooking-recipe-learning.md) — 先获得做法，再把现有材料变成新的行动选项。
- [同类食材替换 · Ingredient substitution](mechanics/cooking-ingredient-substitution.md) — 满足配方条件即可换料，把稀缺材料留给更重要的用途。
- [出锅时机窗口 · Cooking completion windows](mechanics/cooking-heat-window.md) — 熟了不等于完成：必须在过火之前取走。
- [分阶段备料组装 · Staged preparation and assembly](mechanics/cooking-preparation-chain.md) — 把一道菜拆成有先后关系、可并行准备的工序。
- [限时订单排序 · Timed order triage](mechanics/cooking-order-triage.md) — 不只做得快，还要判断哪张单值得先做。
- [厨房岗位交接 · Kitchen station handoffs](mechanics/cooking-station-handoff.md) — 把半成品交到对的人手里，比每个人各做一道菜更有效。
- [餐前增益搭配 · Meal buff loadouts](mechanics/cooking-meal-loadout.md) — 根据下一段活动配餐，而不是永远吃数值最高的一道。
- [加工保鲜 · Preservation through processing](mechanics/cooking-food-preservation.md) — 花时间和设施容量，把即将过期的食物变成远征储备。
- [定量配料 · Measured ingredient dosing](mechanics/cooking-measurement-precision.md) — 把配方中的数字变成手上需要控制的分量。
- [目标风味评分 · Targeted flavor scoring](mechanics/cooking-judged-flavor.md) — 同样能吃的食物，也要按评判标准决定做成什么样。

## 合作与分工 · cooperation（9）

- [信息分开，靠描述拼起来 · Communicating split information](mechanics/cooperation-split-information.md) — 一人看现场，一人拿线索，只有讲清楚才能一起解决问题。
- [隐藏身份与行为伪装 · Hidden roles and convincing behavior](mechanics/cooperation-hidden-role.md) — 目标不同的人混在一起，行动既要获利，也要经得起别人观察。
- [讨论、举证与集体投票 · Discussion, evidence and voting](mechanics/cooperation-discussion-vote.md) — 把每个人只看到的一小段事实，变成一次全体承担后果的决定。
- [倒地救援与掩护 · Reviving a downed teammate](mechanics/cooperation-downed-revival.md) — 伙伴失去行动力后，队伍要拿眼前的安全换回一名战力。
- [共同操控一辆载具 · Crew a shared vehicle](mechanics/cooperation-shared-vehicle.md) — 同一艘船的转向、防守与维修都要人做，队员必须不断商量谁先忙什么。
- [身体连接与互相借力 · Move while physically tethered](mechanics/cooperation-physical-tether.md) — 绳子把两人的移动连在一起，伙伴既能拉你上去，也会被你拖下去。
- [分头就位，同步触发 · Reach separate controls and synchronize](mechanics/cooperation-synchronized-triggers.md) — 两处开关必须同时满足，走到位置之后还得对上行动时机。
- [角色能力互补 · Combine different character abilities](mechanics/cooperation-complementary-abilities.md) — 每个人擅长不同事情，搭配顺序比谁单独最强更重要。
- [暂时合作与背叛时机 · Temporary alliances and betrayal](mechanics/cooperation-temporary-alliance.md) — 眼前需要彼此，最后却只想自己赢：每次合作都要重新判断是否可信。

## 卡组构筑 · deckbuilding（12）

- [奖励选牌与跳过 · Drafting rewards and skipping](mechanics/deckbuilding-reward-choice.md) — 赢了以后选一张牌，也可以为了稳定抽牌什么都不拿。
- [把资源投给已有卡牌 · Investing in existing cards](mechanics/deckbuilding-card-upgrade.md) — 不扩大牌库，而是挑一张值得反复使用的牌进行强化。
- [这一战只用一次的强牌 · Powerful cards spent for the fight](mechanics/deckbuilding-exhaust-for-burst.md) — 先打出强力效果，代价是这场战斗后面再也抽不到它。
- [指定开局必到的牌 · Choosing guaranteed opening cards](mechanics/deckbuilding-opening-hand-control.md) — 把最关键的准备步骤放进首回合，换取开局的稳定性。
- [挑出不要的牌换一手 · Selective discarding and redrawing](mechanics/deckbuilding-discard-redraw.md) — 保留快要成形的组合，用有限换牌次数修补缺口。
- [复制已经养好的牌 · Copying an invested card](mechanics/deckbuilding-duplicate-investment.md) — 复制不只是多一张牌，也能把此前的强化一起复制出去。
- [战斗中临时生出新牌 · Generating cards during combat](mechanics/deckbuilding-temporary-generation.md) — 用一张牌或一个单位，在这一战里制造额外的行动材料。
- [同样的效果，换顺序结果不同 · Ordering effects to change the result](mechanics/deckbuilding-trigger-order.md) — 先加再乘，或先挂弱点再攻击，把顺序本身变成决策。
- [同一张牌，两种用途 · Two competing uses for one card](mechanics/deckbuilding-dual-use-cards.md) — 把攻击和移动放在同一张牌上，选一个用途就放弃另一个。
- [把掷出的结果分配给行动 · Allocating rolled outcomes](mechanics/deckbuilding-dice-allocation.md) — 骰子先告诉你这回合有什么，再由你决定把它们用在哪里。
- [凑牌型来支付行动 · Using card patterns as action requirements](mechanics/deckbuilding-poker-hand-requirements.md) — 同一手扑克可以凑成不同组合，用哪一组决定你能做什么。
- [拿到改规则的被动后重组玩法 · Rebuilding around rule-changing passives](mechanics/deckbuilding-rule-changing-passives.md) — 新被动不只加数值，还改变哪些组合成立、哪些牌值得留下。

## 防御与阵地 · defense（9）

- [造迷宫延长敌人路线 · Build a longer enemy route](mechanics/defense-maze-routing.md) — 花有限的建筑资源，让敌人多走几步、多挨几轮攻击。
- [设置自动攻击优先级 · Set automatic target priorities](mechanics/defense-target-priority.md) — 塔会自己开火，玩家决定它先解决哪一种威胁。
- [提前叫下一波 · Call the next wave early](mechanics/defense-early-wave-call.md) — 主动缩短休息时间，用更危险的重叠进攻换取奖励。
- [白天投资，夜晚验收 · Invest by day, defend by night](mechanics/defense-day-night-investment.md) — 每次安全期都在决定：今天多赚钱，还是今晚更安全。
- [亲自赶到缺口补防 · Move a defender to the breach](mechanics/defense-mobile-defender.md) — 固定防线顾不过来时，玩家本人就是可以移动的最后一道补丁。
- [把陷阱串成连续处理 · Chain traps into a sequence](mechanics/defense-trap-sequence.md) — 先减速、再集中、再造成伤害，让几个普通陷阱一起发挥作用。
- [为不同敌人准备克制手段 · Prepare answers to enemy resistances](mechanics/defense-resistance-counters.md) — 火力很高也可能打不动，先判断敌人需要哪一种处理方式。
- [有限塔位的集中升级 · Upgrade deeply or build wider](mechanics/defense-tower-upgrade-budget.md) — 同样的钱，是把一个好位置变强，还是在另一处增加覆盖？
- [给炮塔持续送弹药 · Keep defensive guns supplied](mechanics/defense-ammunition-supply.md) — 塔建好了还不算完成，子弹断供时，再强的防线也会停火。

## 驾驶与竞速 · driving（5）

- [漂移蓄力后释放加速 · Drift to charge a release boost](mechanics/driving-drift-boost.md) — 弯道里多维持一会儿漂移，换取出弯时更长的加速。
- [跟在前车后借势超越 · Follow a lead vehicle to gain speed](mechanics/driving-slipstream.md) — 先保持追随位置取得速度优势，再找机会侧移超车。
- [倒计时中踩准起步蓄力 · Time the throttle during the countdown](mechanics/driving-start-charge.md) — 比赛开始前的一次或几次油门输入，决定起步能否抢得速度。
- [腾空做动作换取加速 · Perform an airborne trick for a boost](mechanics/driving-air-stunt.md) — 把跳台提供的短暂腾空时间，变成额外动作和速度奖励。
- [空中调整车身，准备落地 · Adjust vehicle pitch before landing](mechanics/driving-air-balance.md) — 腾空后仍能改变姿态，让车轮以合适角度接触下一段地面。

## 生态与系统 · ecology（8）

- [安排邻株培育新品种 · Arrange neighbors to breed plants](mechanics/ecology-plant-crossbreeding.md) — 想得到新植物，先决定哪些植物一起生长、哪些必须隔开。
- [挑选亲本保留后代性状 · Select parents for offspring traits](mechanics/ecology-parent-trait-selection.md) — 繁殖之前看双方特点，繁殖之后检查哪些特点传给了下一代。
- [保留不同血缘与基因 · Preserve genetic diversity](mechanics/ecology-genetic-diversity.md) — 只留下最优秀的一家，可能让后续配对越来越困难。
- [让野生动物逐步接受靠近 · Gradually tame wild animals](mechanics/ecology-animal-taming.md) — 想把野生动物变成长期伙伴，先要提供食物并处理它的戒备。
- [控制繁殖数量与种群规模 · Control breeding and population size](mechanics/ecology-population-limits.md) — 出生是好消息，但下一批幼崽也会占用食物、空间和照料时间。
- [扩群之前检查栖息地余量 · Check habitat capacity before adding animals](mechanics/ecology-habitat-capacity.md) — 一只住得下，不代表再放五只仍然合适。
- [为不同物种安排合住关系 · Plan which species can share a home](mechanics/ecology-species-compatibility.md) — 能适应同一环境，不代表彼此适合住在一起。
- [先布置条件再触发繁殖 · Prepare conditions that enable breeding](mechanics/ecology-breeding-conditions.md) — 选对一对亲本还不够，时间、环境和育幼条件也要到位。

## 探索与路线 · exploration（4）

- [能力解锁旧路径 · Ability-gated backtracking](mechanics/exploration-ability-gates.md) — 先看到去不了的地方，再用新能力重新理解旧地图。
- [探索换取地图信息 · Earned map information](mechanics/exploration-earned-map.md) — 地图不是开局全知，而是需要主动获取的探索成果。
- [逐步解锁的快速旅行 · Unlockable fast-travel networks](mechanics/exploration-fast-travel-network.md) — 第一次路程保留探索，重复路程逐渐转化为网络选择。
- [随机地形下的路线判断 · Route reading in procedural terrain](mechanics/exploration-procedural-route-reading.md) — 每局都要重新判断怎么走，而不是背熟同一条最优路。

## 种植与经营 · farming（10）

- [播种与生长照料 · Planting and crop care](mechanics/farming-growth-care.md) — 把一次播种变成一串有节奏的投入，成熟后回收产物。
- [季节种植窗口 · Seasonal planting windows](mechanics/farming-season-window.md) — 让收成的截止日期，比种子价格更值得考虑。
- [灌溉覆盖布局 · Irrigation coverage](mechanics/farming-irrigation-layout.md) — 用占地与建造成本，交换重复浇水的时间。
- [肥料投入取舍 · Fertilizer investment](mechanics/farming-fertilizer-tradeoff.md) — 先投入稀缺材料，换取更快或更优的收成。
- [留种与再投资 · Seed reinvestment](mechanics/farming-seed-reinvestment.md) — 把一部分收成留给下一轮，而不是全部变现。
- [多次采收作物 · Regrowing crops](mechanics/farming-regrowth-crops.md) — 一次建立植株，之后反复回收较小的收益。
- [土壤与作物匹配 · Crop–substrate matching](mechanics/farming-substrate-match.md) — 种子能否生长，取决于脚下是什么地面。
- [农田防护 · Crop protection](mechanics/farming-crop-protection.md) — 产量不仅靠种出来，也要靠布防保下来。
- [果园长期投资 · Long-term orchards](mechanics/farming-orchard-investment.md) — 以漫长成熟期和固定占地，换取重复采摘。
- [家畜日常照料 · Livestock care](mechanics/farming-livestock-care.md) — 喂养与照顾把动物变成持续产出、持续占用时间的伙伴。

## 钓鱼与捕捉 · fishing（10）

- [咬钩时机判断 · Bite timing](mechanics/fishing-bite-window.md) — 从试探动作中识别真咬钩，在短窗口内提竿。
- [收线与张力控制 · Line tension control](mechanics/fishing-line-tension.md) — 在鱼挣扎时松手，在停顿时回收距离。
- [追踪鱼标 · Tracking a moving fish](mechanics/fishing-target-tracking.md) — 持续把控制区覆盖在鱼标上，累积捕获进度。
- [鱼种栖息地搜索 · Finding fish habitats](mechanics/fishing-habitat-search.md) — 把“去哪钓”做成有证据可推断的探索问题。
- [鱼饵选择 · Bait loadouts](mechanics/fishing-bait-loadout.md) — 钓鱼前的消耗品选择，改变等待、命中与目标分布。
- [抛竿落点选择 · Choosing a cast location](mechanics/fishing-cast-placement.md) — 一次出手前，把距离、角度和鱼的位置考虑进去。
- [布置捕捞陷阱 · Passive fishing traps](mechanics/fishing-passive-traps.md) — 把即时操作换成选点、等待与回收路线。
- [鱼塘繁育 · Fish-pond production](mechanics/fishing-pond-production.md) — 把一次成功捕获，转化为持续繁育的生产起点。
- [限时钓鱼赛事 · Timed fishing contests](mechanics/fishing-timed-contest.md) — 用短暂计分窗口，让熟悉的钓鱼变成路线与效率挑战。
- [钓具捕获资格 · Equipment-gated catches](mechanics/fishing-equipment-access.md) — 新装备解锁新的可捕获范围，而不只是让旧任务变快。

## 采集与挖掘 · gathering（10）

- [采集工具门槛 · Harvesting tool gates](mechanics/gathering-tool-hardness.md) — 看得到的资源，不一定能用现在的工具带走。
- [资源探测高亮 · Resource detection overlays](mechanics/gathering-resource-detection.md) — 花费道具或基础设施，把寻找资源从盲搜变成定位。
- [体积式挖掘 · Volumetric excavation](mechanics/gathering-volumetric-excavation.md) — 资源不是一个按钮，而是埋在可改变地形里的体积。
- [氧气采集预算 · Oxygen-budgeted gathering](mechanics/gathering-oxygen-gathering.md) — 每多拿一件东西，都在压缩安全返程时间。
- [采集配额与收手判断 · Gathering quotas and stopping decisions](mechanics/gathering-gathering-quota.md) — 数量目标已经达成，接下来这一镐还值不值得？
- [采集反哺续航 · Gathering to sustain gathering](mechanics/gathering-supply-mining.md) — 途中补充继续采集所需的弹药、能源或生命。
- [埋藏资源线索 · Clues to buried deposits](mechanics/gathering-hidden-deposit-clues.md) — 读懂地表痕迹，再挖出藏在下面的收获。
- [拆解环境回收 · Dismantling for salvage](mechanics/gathering-salvage-dismantling.md) — 把已经有用途的物件拆成材料，获得资源也失去设施。
- [野外资源复访 · Revisiting renewable forage](mechanics/gathering-renewable-forage-route.md) — 记住资源何时回来，把地图变成有节奏的采集路线。
- [按矿层选择深度 · Depth-targeted mining](mechanics/gathering-depth-targeting.md) — 去更深不一定更好，先确定你缺哪一种矿。

## 放置与增量 · incremental（11）

- [留住资金换下一轮利息 · Keep savings to earn next-round interest](mechanics/allocation-savings-interest.md) — 少买一次强化，可能让以后每轮都多一笔收入。
- [先亲手赚，再买自动收益 · Earn by hand, then buy passive output](mechanics/incremental-manual-to-passive.md) — 把第一笔劳动换成持续收入，重新决定时间该花在哪里。
- [离开前安排收益，回来后结算 · Set up earnings before leaving](mechanics/incremental-offline-window.md) — 离线收益取决于离开时的安排，也可能受到时间上限约束。
- [把有限产能分给持续项目 · Allocate capacity across ongoing projects](mechanics/incremental-allocate-progress-capacity.md) — 投入不会立刻消失，但被一个项目占用，就不能同时加速另一个。
- [花掉资源，也会失去持有加成 · Spend a resource that also grants a held bonus](mechanics/incremental-spend-held-bonus.md) — 同一份资源既是购买力，也是当前收益的一部分。
- [凑到数量门槛，产出突然跃升 · Reach a quantity threshold for a production jump](mechanics/incremental-quantity-milestones.md) — 临近门槛的最后几次投入，可能比平时更有价值。
- [同一种买得越多，下一份越贵 · Each additional copy costs more](mechanics/incremental-escalating-copy-price.md) — 旧选择的价格会改变，逼着玩家反复比较下一笔投资。
- [让短时加成在同一窗口重叠 · Overlap temporary income boosts](mechanics/incremental-overlap-income-bursts.md) — 两个加成一起生效的短时间，可能比各自开满更值钱。
- [消耗道具，把未来收益提前结算 · Spend an item to bring future earnings forward](mechanics/incremental-spend-time-advance.md) — 同一张时间券，配置更好时使用会得到不同结果。
- [派出有限队伍，等待任务回报 · Dispatch limited teams for delayed rewards](mechanics/incremental-limited-team-dispatch.md) — 长任务占住名额，更高奖励要和错过其他任务一起计算。
- [稳定刷取，还是继续推进 · Farm reliably or push ahead](mechanics/incremental-farm-or-push.md) — 下一关更诱人，但当前目标可能更适合积累下一次突破的资源。

## 背包与资源 · inventory（10）

- [异形背包拼装 · Shape-based packing](mechanics/inventory-shape-packing.md) — 让物品的轮廓决定能带走什么。
- [物品邻接增益 · Item adjacency bonuses](mechanics/inventory-adjacency.md) — 同一件道具，换个邻居就能改变价值。
- [负重与搬运预算 · Carry-weight budgets](mechanics/inventory-weight-budget.md) — 容量不是能否装下，而是还能否带着它行动。
- [格数与堆叠上限 · Slots and stack limits](mechanics/inventory-stack-limits.md) — 同类可以合并，物品种类却仍然占用空间。
- [工具耐久与维护 · Tool durability and maintenance](mechanics/inventory-durability.md) — 工具会耗尽，出发前必须估算它能撑多久。
- [可耗尽的照明储备 · Consumable light reserves](mechanics/inventory-light-reserve.md) — 光既提供安全，也占用有限补给。
- [未知道具鉴定 · Unknown-item identification](mechanics/inventory-identification.md) — 先承担试用风险，还是花资源换取确定性？
- [删除卡牌与抽取密度 · Card removal and draw density](mechanics/inventory-deck-thinning.md) — 删掉弱卡，让想要的组合更常出现。
- [有限槽位的能力配装 · Budgeted ability loadouts](mechanics/inventory-equipment-budget.md) — 拥有所有能力，也不等于能同时装备。
- [死亡后的资源回收 · Recovering resources after death](mechanics/inventory-death-retrieval.md) — 一次失败会生成一个必须重新规划的取回任务。

## 匹配与消除 · matching（10）

- [交换相邻物件凑成一排 · Swap neighbors to complete a match](mechanics/matching-swap-to-align.md) — 只换两个位置，却要同时考虑眼前消除和换完后的棋盘。
- [沿同类物件画出一条链 · Trace a path through matching pieces](mechanics/matching-trace-color-chain.md) — 一次拖动选择整条路线，长度和终点都影响收益。
- [点掉一整团相邻同色块 · Clear a connected group with one tap](mechanics/matching-tap-connected-group.md) — 先改变周围排列，把小团接成大团，再选择何时收掉。
- [填满整行来释放空间 · Complete a line to reclaim space](mechanics/matching-complete-lines.md) — 落下或放入的形状占地方，凑满一行才能把空间拿回来。
- [把同级物件合成更高一级 · Merge matching items into the next tier](mechanics/matching-merge-three-upgrade.md) — 合并既带来升级，也把多个占位缩成一个。
- [推动整盘，让数字相遇合并 · Slide the whole board to merge numbers](mechanics/matching-slide-board-merge.md) — 一次方向输入会影响多排物件，不能只盯着眼前的一对。
- [预留掉落位置触发连续消除 · Set up gravity-driven cascades](mechanics/matching-gravity-cascade.md) — 先消掉支撑物，让上面的物件落下来完成下一组。
- [凑出特定形状制造特殊块 · Create a power piece with a match pattern](mechanics/matching-pattern-creates-power.md) — 同样是消除，凑成哪种形状决定留下什么工具。
- [把两个特殊块合成一次大效果 · Combine two power pieces into one effect](mechanics/matching-combine-power-pieces.md) — 两个道具各自使用很方便，留到相遇时可能改变整盘。
- [消掉下方支撑，把目标送到出口 · Clear support beneath cargo to reach an exit](mechanics/matching-clear-under-cargo.md) — 目标不能直接消除，要改变它下面的地形让它继续往下走。

## 移动与操控 · movement（15）

- [蹬墙跳与竖直穿越 · Wall-jump traversal](mechanics/exploration-wall-jump.md) — 把墙从边界变成可连续借力的移动节点。
- [空中位移与补充节点 · Air movement and refill nodes](mechanics/exploration-air-action-refill.md) — 让一次跳跃通过有限位移资源，串成一整条空中路线。
- [攀爬体力与休息路线 · Climbing stamina and rest routes](mechanics/exploration-climbing-rest-route.md) — 把看似连续的墙面，拆成一段段可承受的攀登。
- [钩索摆荡与放手时机 · Grapple swings and release timing](mechanics/exploration-grapple-swing.md) — 选锚点、积累速度、适时放手，把空间变成运动路线。
- [滑翔与落点选择 · Gliding and landing choice](mechanics/exploration-gliding-descent.md) — 把高度兑换成水平距离，并在途中寻找续航机会。
- [按住多久，决定跳多高 · Hold duration sets jump height](mechanics/movement-variable-jump.md) — 同一个跳跃键，轻点过矮坎，长按够高台。
- [切换快慢，控制跨越与落点 · Switch speed to control reach and landing](mechanics/movement-run-walk-control.md) — 跑得快能跨远处，走得慢才容易对准窄路。
- [把可踩目标当作下一次起跳点 · Bounce from a target into the next jump](mechanics/movement-target-bounce.md) — 危险目标也能变成踏脚石，但必须从正确方向命中。
- [等平台到位，再接续下一跳 · Time boarding and leaving a moving platform](mechanics/movement-moving-platform.md) — 落脚处会移动，什么时候上去和离开都要判断。
- [自动前进中选择动作时机 · Choose action timing while moving automatically](mechanics/movement-auto-forward.md) — 方向已经确定，你只负责在对的时间跳、滑或出手。
- [失败后立刻重试同一小段 · Retry the same short segment immediately](mechanics/movement-short-retry.md) — 把失败变成一次有用的练习，下一次只改一个动作。
- [抓住边沿，决定上去还是松手 · Catch a ledge, then climb up or let go](mechanics/movement-ledge-catch.md) — 没跳到台面也能抓住边缘，把一次坠落变成新的选择。
- [压低身体，滑过狭窄通道 · Lower the body and slide through a gap](mechanics/movement-low-slide.md) — 利用已有速度穿过低处空间，出口还要留好落脚位置。
- [主动下砸，改变落地结果 · Commit to a downward slam](mechanics/movement-downward-slam.md) — 不等自然下落，主动砸向地面或目标，换取一次强反馈。
- [让角色和手中物件一起通过障碍 · Move yourself and a carried object through obstacles](mechanics/movement-carry-object.md) — 自己能过去还不够，还要让手里的物件到达目的地。

## 叙事与选择 · narrative（10）

- [在回答窗口关闭前表态 · Answer before the response window closes](mechanics/narrative-timed-response.md) — 还没想好也会继续，犹豫本身消耗说话机会。
- [选择不回答，让对方继续 · Choose silence and let the other person continue](mechanics/narrative-deliberate-silence.md) — 不提供信息也是一种回应，但未必能避免后果。
- [拿证据反驳某一句话 · Use evidence to challenge a specific statement](mechanics/narrative-evidence-rebuttal.md) — 不是猜凶手，而是指出这句话与哪条事实冲突。
- [把早先的选择留到后来结算 · Let an earlier choice change a later event](mechanics/narrative-delayed-choice-consequences.md) — 眼前没有立即奖惩，后面的场景却记得你做过什么。
- [把有限时段分给不同线索 · Allocate limited time among leads](mechanics/narrative-investigation-time-slots.md) — 查这一条线索，就暂时放下另一条。
- [用身份和经历打开额外话题 · Open extra dialogue through identity and experience](mechanics/narrative-background-dialogue-access.md) — 同一个问题，不同经历的人能提出不同回答。
- [用做出的东西回应对方 · Respond through what you make and serve](mechanics/narrative-service-as-response.md) — 选择递出什么，也是在决定对话往哪走。
- [换一个角色承接前面的后果 · Continue earlier consequences through another character](mechanics/narrative-perspective-handoff.md) — 换了视角，也要接住上一个角色留下的局面。
- [重过同一段时间，换一种事件顺序 · Repeat a time window with a different event plan](mechanics/narrative-loop-event-schedule.md) — 世界回到起点，玩家用上一轮的发现改变下一轮安排。
- [在对方说完前介入 · Intervene before the other person finishes](mechanics/narrative-conversation-intervention.md) — 何时开口或行动，也能改变正在发生的对话。

## 成长与解锁 · progression（12）

- [成长方向二选一 · Exclusive specialization branches](mechanics/progression-specialization-branches.md) — 成长到关键节点，只能选一条更擅长的路线。
- [做什么，就练强什么 · Practice-based skill growth](mechanics/progression-practice-based-growth.md) — 成长跟随实际行为，常做的事情自然变成特长。
- [退点后重新分配 · Refund and reassign upgrades](mechanics/progression-respec-investment.md) — 保留已有成长，付出代价后换一种能力组合。
- [失败也能带回成长资源 · Persistent currency between attempts](mechanics/progression-permanent-run-currency.md) — 这一趟没通关，也能为下一趟留下可用的提升。
- [失败后挑选下一位继承者 · Choose the next heir](mechanics/progression-successor-selection.md) — 每次重新出发先换个人，适应新角色的长处与毛病。
- [主动重置换永久加速 · Reset progress for lasting acceleration](mechanics/progression-prestige-reset.md) — 主动放弃这一轮积累，换下一轮更快起步。
- [通关后追加难度条件 · Escalating challenge conditions](mechanics/progression-challenge-tiers.md) — 熟悉规则后，给同一套挑战再加一道限制。
- [升级时从随机选项中挑一个 · Random choices at level-up](mechanics/progression-random-level-choices.md) — 每次升级给几项候选，玩家边打边决定成长方向。
- [凑齐条件升级成新武器 · Complete a weapon evolution recipe](mechanics/progression-evolution-recipes.md) — 一路保留配套零件，等条件满足后把武器变成新形态。
- [先研究前置，再解锁新技术 · Research prerequisite chains](mechanics/progression-research-prerequisites.md) — 研究不是单独等进度条，而是安排一条解锁路线。
- [死亡会损失练出的能力 · Death costs trained abilities](mechanics/progression-death-loses-training.md) — 失败不只丢物品，还会损失一部分练习成果。
- [懂了规则，就能跨过障碍 · Progress through learned knowledge](mechanics/progression-knowledge-gates.md) — 角色没有变强，是玩家知道了一种原本就能用的做法。

## 射击与弹道 · projectiles（10）

- [朝一个方向走，朝另一个方向打 · Move one way, aim another](mechanics/projectiles-independent-aim.md) — 移动决定自己在哪，瞄准决定攻击去哪，两件事同时做。
- [短暂停火，让弹着重新收拢 · Pause fire to tighten the spread](mechanics/projectiles-spread-recovery.md) — 连射换来更多子弹，也可能让后续射击偏得更远。
- [在装填窗口里再按一次 · Press again inside the reload window](mechanics/projectiles-active-reload.md) — 把等待装填的时间，变成一次可以争取额外收益的小判断。
- [蓄力后选择放手时机 · Charge, then choose when to release](mechanics/projectiles-charged-release.md) — 多等一会儿能换强力一击，也可能把安全出手机会等没了。
- [抬高准星，修正抛物线落点 · Aim higher to correct a falling trajectory](mechanics/projectiles-ballistic-arc.md) — 瞄准的是未来落点，发射方向不一定正对目标。
- [借墙反弹，把攻击送到拐角 · Bounce a shot around a corner](mechanics/projectiles-wall-ricochet.md) — 墙面成为弹道的一部分，打不到的目标也可能有间接路线。
- [让多个目标排进同一条弹道 · Line up targets for a piercing shot](mechanics/projectiles-piercing-line.md) — 一发不在第一个目标处停下，站位就能换来额外命中。
- [把目标留在锁定区再开火 · Keep a target inside the lock zone](mechanics/projectiles-maintain-lock.md) — 先付出持续追踪的时间，再换取发射时的命中帮助。
- [在过热之前停火冷却 · Stop firing before overheating](mechanics/projectiles-heat-pacing.md) — 现在多打一会儿，可能换来之后更长的一段无法射击。
- [擦着危险边缘移动来换资源 · Graze danger to earn a resource](mechanics/projectiles-graze-reward.md) — 安全躲开不再是唯一目标，靠近但不碰到也有收益。

## 解谜与推理 · puzzles（10）

- [推箱与不可逆走位 · Box pushing and positional traps](mechanics/puzzles-box-pushing.md) — 移动物体之前，先想好自己还能站在哪里。
- [重力方向切换 · Changing gravity direction](mechanics/puzzles-gravity.md) — 重新定义下方，把障碍变成落脚点。
- [成对传送门连接 · Paired portal connections](mechanics/puzzles-linked-portals.md) — 把两个表面变成相邻位置，重新组织路线。
- [时间回拨与因果调整 · Rewinding time to change outcomes](mechanics/puzzles-time-scrubbing.md) — 回到关键时刻，理解哪些状态会随时间倒退。
- [光束路径与接收器 · Routing beams to receivers](mechanics/puzzles-beam-routing.md) — 移动少量中继物，让整条能量路径成立。
- [从例题归纳视觉规则 · Inferring visual puzzle rules](mechanics/puzzles-visual-rule-learning.md) — 不用说明书，让玩家从反馈中自己学会语法。
- [把视觉关系变成实体 · Turning visual relationships into geometry](mechanics/puzzles-perspective-reality.md) — 改变观看方式，就能改变可行走的空间。
- [折叠地形连通 · Folding terrain to connect routes](mechanics/puzzles-paper-folding.md) — 把远处的两块地形折到一起，再让角色通过。
- [语境推断陌生语言 · Decoding language from context](mechanics/puzzles-language-decoding.md) — 从行为、图像和重复词形推测一句话的含义。
- [多线索还原事件 · Reconstructing events from evidence](mechanics/puzzles-scene-deduction.md) — 把零散可见事实连成一个可以检验的解释。

## 社交与关系 · relationships（10）

- [送礼偏好与分配 · Gift preferences and allocation](mechanics/relationships-gift-allocation.md) — 把有限礼物送给合适的人，换取关系或实用回馈。
- [日常交流节奏 · Daily contact rhythm](mechanics/relationships-daily-contact.md) — 用每日有限的交流收益，让“顺路看看朋友”成为路线选择。
- [关系阶段解锁事件 · Relationship-gated scenes](mechanics/relationships-bond-scenes.md) — 通过持续互动解锁人物片段，让数值进度变成可感知的关系变化。
- [同伴立场反馈 · Companion approval](mechanics/relationships-companion-approval.md) — 让队友对玩家的选择表达不同判断，形成队伍内部的取舍。
- [对话说服检定 · Dialogue persuasion checks](mechanics/relationships-persuasion-checks.md) — 把说服变成可准备、会失败、能改变后续路径的行动。
- [共同活动安排 · Shared-activity itineraries](mechanics/relationships-date-itinerary.md) — 把约会或聚会设计成有限时间内的一组活动选择。
- [阵营声望记账 · Faction reputation](mechanics/relationships-faction-reputation.md) — 把各方对玩家的评价分开记录，让同一行动产生不同后果。
- [秘密与要挟筹码 · Secrets as leverage](mechanics/relationships-secrets-leverage.md) — 把搜集来的秘密变成公开、交换或保留的社会资源。
- [联姻与家族连接 · Dynastic marriage](mechanics/relationships-dynastic-marriage.md) — 用人物关系连接政治资源，把短期盟友和长期继承放在一起权衡。
- [关系身份转换 · Relationship commitment](mechanics/relationships-relationship-commitment.md) — 让表白、交往与分手成为明确动作，而不只是好感数字增长。

## 节奏与节拍 · rhythm（5）

- [踩着拍点移动或出手 · Move or attack on the beat](mechanics/rhythm-onbeat-actions.md) — 同一招什么时候出手，也会决定它能否奏效。
- [按住跨过整段长音 · Hold through a sustained note](mechanics/rhythm-sustain-notes.md) — 按准开头只是开始，还要把输入保持到指定终点。
- [听完提示，在指定拍回应 · Answer a cue on its target beat](mechanics/rhythm-cue-response.md) — 不是听到声音就按，而是认出提示后等到该你回应的那一拍。
- [提示消失后仍然接准拍子 · Keep time when the cues disappear](mechanics/rhythm-hidden-beats.md) — 先让玩家听懂节奏，再拿掉一部分提示，检验能否自己把拍子续下去。
- [连续合拍，保住收益倍率 · Keep a multiplier through accurate streaks](mechanics/rhythm-streak-multiplier.md) — 一连串稳定表现会让后面的行动更值钱，也让下一次失误更可惜。

## 潜行与警戒 · stealth（11）

- [分级警觉与潜行绕路 · Escalating awareness and stealth routing](mechanics/exploration-stealth-awareness.md) — 被看见并非立刻失败，警觉阶段为玩家留下处理窗口。
- [伪装与身份权限 · Disguise permissions](mechanics/stealth-disguise-access.md) — 换一身衣服，就换了一张能去不同地方的通行证。
- [声源诱导 · Sound lures](mechanics/stealth-sound-lures.md) — 让守卫走向你制造的声响，空出真正想走的路。
- [搬运与藏匿身体 · Moving and hiding bodies](mechanics/stealth-body-concealment.md) — 放倒守卫只是前半步，还得决定把留下的证据放哪儿。
- [预排同步行动 · Queued synchronized actions](mechanics/stealth-synchronized-actions.md) — 先给几名队员安排动作，再一口气处理互相照应的守卫。
- [沿着阴影移动 · Moving through light and shadow](mechanics/stealth-light-shadow.md) — 地面上的明暗，决定哪里适合停留、哪里必须快速通过。
- [探头与隔门侦察 · Peeking before committing](mechanics/stealth-peeking.md) — 先花一点时间看清另一侧，再决定要不要走进去。
- [监控设施与控制权 · Surveillance control](mechanics/stealth-security-network.md) — 摄像头既能发现你，也能成为你看见敌人的眼睛。
- [进入藏身点再择机出来 · Hiding spots and exit timing](mechanics/stealth-hiding-spots.md) — 柜子提供暂时安全，却把自由行动换成了等待出口时机。
- [昏迷倒计时与看守 · Knockout timers and pinning](mechanics/stealth-knockout-window.md) — 没杀死的守卫会醒来，你要花人手看住他，还是赶快离开？
- [安排环境事故 · Staging environmental accidents](mechanics/stealth-staged-accidents.md) — 先读懂物件与巡逻的关系，再让环境完成最后一步。

## 生存与压力 · survival（12）

- [多种生存需求抢时间 · Competing survival needs](mechanics/survival-competing-needs.md) — 解决饥饿时，口渴和疲劳还在继续累积。
- [取水与净水准备 · Collecting and purifying water](mechanics/survival-safe-water.md) — 有水可喝，不代表现在喝最划算。
- [疲劳积累与睡眠安排 · Fatigue and sleep planning](mechanics/survival-fatigue-rest.md) — 把睡觉放进日程，而不是等角色撑不住再补救。
- [持续失血与紧急包扎 · Bleeding and urgent bandaging](mechanics/survival-bleeding-triage.md) — 先阻止伤势继续扩大，再考虑把生命补满。
- [伤口清洁与感染预防 · Wound hygiene and infection prevention](mechanics/survival-wound-cleanliness.md) — 今天省下的护理，可能变成明天的新麻烦。
- [检查身体定位问题 · Inspecting the body to find problems](mechanics/survival-body-inspection.md) — 先找出哪里出问题，才能用对处理方法。
- [食物搭配与长期营养 · Food balance and nutrition](mechanics/survival-balanced-nutrition.md) — 吃饱之后，还要考虑食物补充了什么，以及长期只吃一种东西的代价。
- [压力积累与失控风险 · Stress buildup and crisis](mechanics/survival-stress-crisis.md) — 坏事不断发生时，角色可能暂时不再听指挥，休息和安抚因此有了价值。
- [淋湿、受冻与取暖 · Wetness, cold and warming up](mechanics/survival-weather-exposure.md) — 天气改变身体状态，玩家要为赶路、避雨和烘干安排顺序。
- [受伤部位改变行动能力 · Injured limbs change capabilities](mechanics/survival-limb-impairment.md) — 腿伤影响撤离，手伤影响作战，同样的掉血会产生不同的处理顺序。
- [暂时压住症状再撤离 · Temporary symptom relief](mechanics/survival-temporary-relief.md) — 处理症状可以争取行动窗口，但并不等于伤势已经恢复。
- [切断疾病传播路线 · Interrupt disease transmission](mechanics/survival-contagion-control.md) — 处理病人之外，还要找出问题通过接触、食物或空气怎样传过去。
