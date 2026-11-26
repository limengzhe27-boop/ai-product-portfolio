'use strict';

window.PORTFOLIO_DATA = {
  profile: {
    name: '李孟哲',
    enName: 'LI MENGZHE',
    role: 'AI 产品经理 · Agent 产品方向',
    batch: '2027 届校园招聘',
    school: '河北地质大学 · 软件工程本科（2023.09 — 2027.06）',
    email: 'limengzhe27@gmail.com',
    phone: '13081013323',
    github: 'https://github.com/limengzhe27-boop',
    gitee: 'https://gitee.com/ztmslmz',
    summary:
      '软件工程背景，擅长把不确定的模型能力转化为可编辑、可验证、有边界的产品系统。在原初之境设计互动影游与多角色体验，在欢乐互娱从零规划企业 Agent 平台与海外营销工作台，在腾讯 PCG 负责多模态创作 SaaS 从 0 到 1 规划与研发交接。'
  },

  perspectives: {
    all: {
      label: '综合产品视角',
      desc: '三段实习旗舰案例优先：覆盖互动内容体验、企业 AI 平台与海外多模态商业化。',
      order: ['pisco', 'agent-platform', 'crevo', 'video', 'life', 'marketing-ai', 'survey']
    },
    agent: {
      label: 'Agent 专项视角',
      desc: '聚焦模型路由、上下文与记忆分层、工具授权、任务编排与可观测验收。',
      order: ['agent-platform', 'life', 'video', 'marketing-ai', 'crevo', 'pisco', 'survey']
    }
  },

  cases: [
    {
      id: 'pisco',
      number: '01',
      code: 'XGEN / RP',
      company: '原初之境',
      companyFull: '原初之境 · XGEN Labs',
      role: '产品实习生',
      period: '2026.09 — 至今',
      stage: '内测流程原型',
      stageType: 'proto',
      featured: true,
      question: '一个玩家有两个邀请入口，资格该如何计数？',
      title: 'Pisco｜AI 角色扮演与内测运营规则',
      kicker: 'AI Roleplay · Beta Operations',
      summary:
        '围绕单角色创作、发布与历史续聊推动前端交接；针对官网预留与好友邀请并存的内测场景，设计账号级资格绑定、名额释放及竞品对话成本测算模型。',
      tags: ['单角色创作', '资格状态机', '双端原型', 'Tipsy 竞品研究'],
      metrics: [
        { value: '1,373', label: '去重社区消息样本' },
        { value: '17 档', label: '竞品历史套餐测算' },
        { value: '双端', label: '用户端 + 运营后台原型' }
      ],
      problem:
        '玩家可能既在官网提交了内测申请，又通过好友拿到了邀请码。若按入口分别计数，会出现同一人占用两个名额，或后台无法解释名额波动的问题；同时竞品玩家普遍反馈模型遗忘后付费重试体验不佳。',
      decision:
        '将申请、登录与资格激活拆分为独立状态，按账号绑定内测资格；好友领取成功后自动释放平台预留名额。在商业化研究上，不直接比较标价，而是转化为「相同预算与聊天习惯下的每百轮费用」。',
      actions: [
        '推动单角色创建、私有/公开发布、独立角色库与历史续聊的可运行前端与代码交接。',
        '实测 Emochi、Cheliz、Tipsy、Zeta 四款移动端竞品，复现仅查看开场即计入续聊、同名角色难辨等问题并列出验收条件。',
        '设计内测招募的重复领取拦截、邀请过期、补发与问卷换版保留旧答卷规则；作品退回保留版本与意见以便原稿重提。',
        '发起 Tipsy 社区研究，按日期抽样并整理一周内 1,373 条去重消息，推动制作覆盖 17 个历史套餐档位的离线消耗计算器。'
      ],
      outcomes: [
        '推动单角色可运行前端及代码交接，便于研发直接核对交互与续聊流程。',
        '交付内测用户端与运营后台演示版本，以示例账号和答卷验证名额释放、换版回查及退回重提。',
        '形成可调参数的每百轮费用与可聊轮数测算工具，为评审模型重试与付费权益提供具体场景。'
      ],
      truth:
        '内测流程与后台为双端原型验证；1,373 条社区消息与 17 个套餐档位来自 Tipsy 竞品公开研究，反映历史套餐购买力，不代表 Pisco 的用户数据或模型成本。'
    },
    {
      id: 'agent-platform',
      number: '02',
      code: 'JOY / AP',
      company: '欢乐互娱',
      companyFull: '欢乐互娱 · 质量管理中心',
      role: 'AI 产品经理实习生',
      period: '2026.06 — 2026.08',
      stage: '公司内网已部署',
      stageType: 'live',
      featured: true,
      question: '模型、知识、记忆、Skill 与工具如何进入同一生命周期？',
      title: '企业级多模型 Agent 创建与管理平台',
      kicker: 'Enterprise Agent Platform · Harness',
      summary:
        '针对原有飞书 Agent 在多模型接入、复杂任务执行与能力复用方面的局限，从 0 到 1 规划独立企业 Agent 平台，将配置、评测、发布与内部工具授权统一治理。',
      tags: ['Agent 生命周期', '多模型调度', 'MCP 工具层', 'Skill 复用', '企业 RAG'],
      metrics: [
        { value: '内网部署', label: '支持飞书账号登录' },
        { value: '2 种路径', label: '手动配置 + 自然语言生成' },
        { value: '5 步闭环', label: '草稿→配置→评测→发布→回滚' }
      ],
      problem:
        '业务团队希望灵活构建和复用 Agent，但原有单一入口难以承载多模型切换、多 Agent 协作、企业知识溯源与内部业务系统（如 JoyData、翻译系统）的受控接入。',
      decision:
        '不再往单个机器人里继续堆功能，而是把模型、Skill、企业知识、长期记忆与 MCP 工具抽象为平台级可复用资产，并用「草稿—配置—测试评测—审核发布—版本回滚」统一生命周期。',
      actions: [
        '设计手动配置与自然语言创建两种方式：用户输入业务目标后由 AI 生成可编辑配置，经人工确认后再测试发布。',
        '规划 Skill 平台内创建与可信 URL 导入、来源与版本记录；设计企业 Wiki 关键词+向量混合检索及回答来源引用。',
        '设计用户可确认、编辑与删除的长期记忆机制，避免隐式记忆污染业务回答。',
        '参与制定多模型策略，支持按 Agent 选择和调整 Claude、Kimi、DeepSeek 等运行模型，按任务复杂度选择单/多 Agent 执行。',
        '规划统一工具接入层（权限校验、参数检查、异常重试），接入 JoyData 受控查询与公司翻译系统、术语库及本地化 Skill。'
      ],
      outcomes: [
        '完成企业级多模型 Agent 平台从 0 到 1 产品规划与核心功能设计。',
        '平台已由团队部署至公司内网，员工连接内网后可通过飞书账号登录创建、评测与使用 Agent。',
        '建立知识来源、工具调用链路与失败原因的可追踪记录，支撑后续排查与优化。'
      ],
      truth:
        '本人负责产品规划与核心功能设计；平台内网部署由技术团队共同完成，不表述为个人独立开发或部署。'
    },
    {
      id: 'crevo',
      number: '03',
      code: 'PCG / CV',
      company: '腾讯 PCG',
      companyFull: '腾讯 PCG · 平台与内容事业群',
      role: 'AI 产品经理实习生',
      period: '2025.09 — 2026.05',
      stage: '已上线',
      stageType: 'live',
      featured: true,
      question: '商品页到广告视频，如何用对话编排替代复杂 Prompt？',
      title: 'Crevo｜AI 多媒体创作 SaaS 平台',
      kicker: 'AIGC SaaS · Multimodal Orchestration',
      summary:
        '面向海外创作者与电商卖家，主导从 0 到 1 产品规划与研发交接。整合 11 个多媒体工具模块、对话式「AI 导演」、URL to Video 链路、四维模型评测与订阅积分体系。',
      tags: ['11 工具模块', 'URL to Video', '四维模型评测', '积分与三档订阅'],
      metrics: [
        { value: '500+', label: '上线首月累计注册*' },
        { value: '160', label: '首月活跃用户*' },
        { value: '3%', label: '付费转化率*' }
      ],
      problem:
        '海外创作者和电商卖家需要在多个生成工具间频繁切换、反复试错 Prompt；制作电商广告视频还涉及商品信息提取、卖点脚本、首帧参考图与视频生成的跨步骤串联。',
      decision:
        '不把模型平铺成割裂的工具列表，而是用对话式「AI 导演」承接意图拆解与参数确认；以质量、速度、API 成本、稳定性四维评测结果直接驱动模型路由、失败降级与积分定价。',
      actions: [
        '规划 Image/Text to Video、AI Image Editor、AI Music、URL to Video 等 11 个工具模块及简繁中、英、日、韩多语言方案。',
        '设计 URL to Video 完整链路：商品页抓取结构化 → 卖点与图片提取 → 风格与参数确认 → 首帧参考图、分镜脚本与视频生成。',
        '规划异步任务进度反馈、占位展示与失败兜底机制；建立四维模型评测框架并整理异常样例归因。',
        '设计积分与三档订阅双轨制，将积分不足的生硬拦截优化为订阅引导；定义注册、首次创作、积分消耗与付费转化漏斗埋点。'
      ],
      outcomes: [
        '完成 11 个工具模块、多模型调度、商业化方案及 PRD、架构、接口与埋点文档，向研发完成可运行原型交接。',
        '据上线首月团队统计口径：累计注册 500+、月活 160、付费转化率 3%，D1 留存 18%、D7 留存 9%。',
        '结合实践沉淀可复用的产品文档与交付规范 Skills。'
      ],
      truth:
        '* 运营数据（500+ 注册、160 月活、3% 转化、D1 18% / D7 9%）由上线后团队同事提供并采用团队统计口径，本人参与规划埋点与漏斗，不作个人单独贡献归因。'
    },
    {
      id: 'video',
      number: '04',
      code: 'XGEN / IV',
      company: '原初之境',
      companyFull: '原初之境 · XGEN Labs',
      role: '产品实习生',
      period: '2026.09 — 至今',
      stage: '原型验证',
      stageType: 'proto',
      featured: false,
      question: '分支视频何时生成，才能兼顾连贯播放与试制成本？',
      title: 'AI 互动影游｜视频模型驱动的互动故事',
      kicker: 'Interactive Video · Creator Agent',
      summary:
        '探索视频模型驱动的互动故事创作与游玩体验，明确创作 Agent 的建议采纳边界、多角色视角知识隔离，以及分支视频预生成与等待体验的成本取舍。',
      tags: ['视频生成', '创作 Agent', '角色知识边界', '分支预生成取舍'],
      metrics: [
        { value: '2 类入口', label: '直接编辑 + 对话辅助' },
        { value: '3 态分离', label: '建议 / 采纳 / 保存' }
      ],
      problem:
        '玩家选完分支再开始生成视频虽能控制成本，却容易在剧情高潮处留下漫长空白；同时，创作 Agent 容易擅自篡改作者设定，或在作品资料不完整时过早触发发布。',
      decision:
        '将「视频生成成功」与「玩家及时可播放」拆为两项独立验收指标，并将未选分支的额外开销纳入方案取舍；在创作端将建议生成、用户采纳与配置保存定义为三个独立状态。',
      actions: [
        '以仅有初步构思的作者身份试写双主角故事，梳理已有剧本与仅有创意两类作者的差异化入口。',
        '设计需求澄清、方案推荐、依据说明与作者确认流程，支持修订、拒绝与保留未定设定，明确作者最终决策权。',
        '划分公开简介与角色私有设定，多角色共用剧情事实但不共享尚未知晓的线索；区分作品发布版本与玩家个人存档。',
        '对比选后生成、分支预生成与部分步骤并行方案，分段观察脚本准备、媒体取回、首帧衔接与实际可播放时间。'
      ],
      outcomes: [
        '交付创作配置与玩家体验的多轮可运行原型，明确 AI 建议采纳、角色知识范围与内容可见性规则。',
        '将发布资料完整性、换角知识边界、续玩进度和选后可播放性纳入验证用例与方案取舍记录。'
      ],
      truth:
        '当前为多轮原型验证与方案取舍记录，未将分支预生成描述为已上线并取得生产时延改善。'
    },
    {
      id: 'life',
      number: '05',
      code: 'XGEN / PL',
      company: '原初之境',
      companyFull: '原初之境 · XGEN Labs',
      role: '产品实习生',
      period: '2026.09 — 至今',
      stage: '原型验证',
      stageType: 'proto',
      featured: false,
      question: '角色在聊天里答应赴约，进入现场后真的到场了吗？',
      title: '个性化 AI 人生体验｜虚拟手机与多角色互动',
      kicker: 'Multi-Agent World · State Consistency',
      summary:
        '玩家在虚拟手机的私聊、群聊、地图与现场间切换进入平行人生。负责记忆分层、导演与角色权责边界、中断恢复机制及旧存档复测验收。',
      tags: ['多角色协作', '记忆分层', '分段保存', '旧存档复测'],
      metrics: [
        { value: '3 层记忆', label: '真实资料 / 虚构分支 / NPC 认知' },
        { value: '连续验收', label: '约见→出发→到场→返回手机' }
      ],
      problem:
        '多角色互动中常出现「嘴上答应见面、现场却找不到人」的割裂感，以及跨分支记忆串台、模型已回复但消息未完整落库导致的重复记录问题。',
      decision:
        '由导演协调世界进展，各角色依据自身身份、所知与目标自主决策；只有系统真实记录了执行结果，才允许改变地点、会话或存档状态，不能仅凭一句对话台词认定人物已到场。',
      actions: [
        '区分真实用户资料、虚构分支设定与 NPC 认知，制定信息归属、冲突澄清、修订与时间精度保留规则。',
        '把约见、出发、到场、现场回应和返回手机串联为同一条连续验收路径，组织编码 Agent 分工实现并复测。',
        '针对回复中断与未落库问题，推动分段保存机制，区分完整回复、部分中断与结果未知，重试时复用原请求防止重复写入。'
      ],
      outcomes: [
        '完成虚拟手机可运行原型，并用原有存档复测办公室人物到场、现场交流与再次进入流程。',
        '在合成存档中验证两名角色对同一求助动态自主评论且刷新后可读取；拆解上游模型等待与系统处理耗时，明确优化排查顺序。'
      ],
      truth:
        '原有存档复测与合成存档验证分开记录，不等同于真实玩家长期留存或无人值守长期自主运行。'
    },
    {
      id: 'marketing-ai',
      number: '06',
      code: 'JOY / MA',
      company: '欢乐互娱',
      companyFull: '欢乐互娱 · 质量管理中心',
      role: 'AI 产品经理实习生',
      period: '2026.06 — 2026.08',
      stage: '部分能力已落地',
      stageType: 'partial',
      featured: false,
      question: '海外多社媒舆情分散，如何串联成可追溯的营销工作台？',
      title: '海外游戏营销 AI 工作台',
      kicker: 'Social Listening · Influencer Ops',
      summary:
        '基于公司内部自研大数据与营销分析中台 JoyData、飞书 Agent 与自动化工作流，构建「舆情洞察—达人协作—海外热点情报」三条业务链路。',
      tags: ['JoyData 中台', 'HTML 舆情报告', '分级告警', '达人身份治理', 'OneLink'],
      metrics: [
        { value: '6+ 渠道', label: 'Discord / YT / X / 商店聚合' },
        { value: '3 条链路', label: '舆情 · 达人 · 区域情报' }
      ],
      problem:
        '海外发行舆情分散在 Discord、Facebook、YouTube、Instagram、App Store 等渠道，达人档案与 OneLink 高度依赖手工建档回填，缺乏基线监测和可回溯原始评论的分析链路。',
      decision:
        '不做彼此孤立的问答机器人，而是以 JoyData 数据底座和营销真实工作流为核心：Agent 负责自然语言查询与报告归纳，自动化流程负责基线监测与跨系统同步，每条结论始终可回溯原帖。',
      actions: [
        '负责 JoyData 官媒舆情页面，支持多平台评论聚合、语言/玩家身份/互动量筛选、翻译、打标、导出与 AI 分析入口。',
        '设计飞书舆情分析 Agent，自然语言查询指定游戏、平台与地区舆情，自动输出含数据概览、时间线、风险判断与运营建议的 HTML 报告。',
        '规划定时评论量统计与过去 7 天同期基线对比机制，通过事件指纹去重、沉默期控制与风险分级升级推送。',
        '设计达人跨社媒身份补全、链接标准化、传递式去重与主记录归并，以人工确认+幂等重试串联达人建档与 OneLink 协作。',
        '整合 TikTok、YouTube/Google Trends、Reddit、X 等源，按英/西/葡/亚洲市场生成区域化热点周报。'
      ],
      outcomes: [
        'JoyData 官媒舆情页面已落地多平台评论聚合、筛选、翻译、标记、导出与原帖回溯能力。',
        '形成「自然语言查询—AI 舆情总结—HTML 报告」与分级预警的完整产品方案。',
        '将达人身份治理、OneLink 协作与区域热点整理为标准化可编排工作流。'
      ],
      truth:
        'JoyData 为欢乐互娱内部自研大数据与营销分析中台；官媒舆情页面已落地，Agent 报告、分级告警、达人协作与区域热点处于不同建设阶段，统一标注为「部分能力已落地」。'
    },
    {
      id: 'survey',
      number: '07',
      code: 'JOY / SV',
      company: '欢乐互娱',
      companyFull: '欢乐互娱 · 质量管理中心',
      role: 'AI 产品经理实习生',
      period: '2026.06 — 2026.08',
      stage: '可运行验证版本',
      stageType: 'proto',
      featured: false,
      question: '一份问卷如何用稳定结构同时服务多语言海外玩家？',
      title: 'JoyData 多语言问卷系统重构',
      kicker: 'Research Ops · Complex B2B Rules',
      summary:
        '重构旧问卷系统为面向出海业务的用研工作台，统一 30 余种题型组件、显示逻辑、稳定字段 ID 多语言协作、答卷清洗统计与即时抽奖规则，并通过 Git 同仓交付验证版。',
      tags: ['30+ 题型组件', '多语言协作', '显示逻辑', '即时抽奖', 'PRD 与代码同仓'],
      metrics: [
        { value: '30+ 种', label: '题目与排版组件' },
        { value: 'Vercel', label: '可运行验证环境' }
      ],
      problem:
        '旧问卷系统入口与 JoyData 割裂，多语言调研靠反复复制整份问卷导致统计割裂；复杂题型显示逻辑、发布后字段锁定、答卷清洗与海外玩家身份匹配缺少统一规则基线。',
      decision:
        '不为每种语言复制问卷，而是以稳定字段 ID 共享题干结构、分离多语言内容；复杂交互与显示逻辑先在可运行原型中跑通异常边界，再交接研发接入生产接口。',
      actions: [
        '重构问卷工作台、国内/海外工作空间、项目分组、模板、回收站及草稿/收集/结束全状态。',
        '设计 30 余种题目与排版组件，按题型定义显示条件、答题端实时判断、隐藏答案清理、失效条件处理与发布后字段锁定。',
        '设计原文/译文对照、AI 翻译、Excel/CSV/飞书多维表格导入导出，以及游戏/账号/系统/兜底四级语言匹配策略。',
        '建立重复答卷去重、空值、逻辑校验与逐题型统计口径；规划九宫格即时抽奖的奖池、概率、库存、防重复与超时释放规则。',
        '推动 PRD 与代码同仓维护，直接参与简单前端交互修改、Git 提交与合并协作。'
      ],
      outcomes: [
        '完成覆盖工作台、编辑器、多语言、设置发布、玩家答题、答卷明细与统计分析的可运行验证版本并部署 Vercel 演示环境。',
        '将显示逻辑、多语言字段、发布锁定、答卷清洗与即时抽奖沉淀为研发可拆分实施与测试的规则体系。'
      ],
      truth:
        '当前为产品方案与 Vercel 可运行验证版本，尚未正式接入 JoyData 生产环境；即时抽奖已完成产品设计与原型验证，尚未上线。'
    }
  ],

  principles: [
    {
      index: '01',
      title: '边界先于生成',
      en: 'Boundary before Generation',
      desc: '把「模型提议」「用户采纳」「系统落库」拆成独立状态。角色说的话不等于世界已发生，AI 生成的草稿不等于已发布配置。'
    },
    {
      index: '02',
      title: 'Harness 与资源复用',
      en: 'Context, Tools & Harness',
      desc: '从单点 Prompt 走向平台化治理：统一编排多模型路由、企业知识溯源、受控 MCP 工具授权与可版本化 Skill，让能力跨业务复用。'
    },
    {
      index: '03',
      title: '可观测验收',
      en: 'Observable Verification',
      desc: '用旧存档复测、异常样例归因、四维模型评测和每百轮成本测算替代主观感觉，让体验问题可复现、方案取舍有依据。'
    },
    {
      index: '04',
      title: '原型即交接语言',
      en: 'Prototype as Spec',
      desc: '善用 Claude Code / Codex 进行 Vibe Coding，推动 PRD 与代码同仓；复杂状态机和交互逻辑先跑成可运行原型，再与研发对齐合并。'
    }
  ],

  experiences: [
    {
      period: '2026.09 — 至今',
      company: '原初之境 · XGEN Labs',
      role: '产品实习生',
      focus: '互动影游 · 虚拟手机人生 · Pisco 角色扮演',
      desc: '与产品负责人协作探索视频模型驱动的互动内容与多角色体验。负责创作/游玩流程设计、双端内测运营原型交接、旧存档复测验收，以及 Tipsy 1,373 条社区反馈与 17 档套餐费用测算。',
      relatedCases: ['pisco', 'video', 'life']
    },
    {
      period: '2026.06 — 2026.08',
      company: '欢乐互娱 · 质量管理中心',
      role: 'AI 产品经理实习生',
      focus: '企业 Agent 平台 · 海外营销 AI · 多语言问卷重构',
      desc: '从 0 到 1 规划企业级多模型 Agent 平台并推动内网部署（支持飞书登录）；基于自研中台 JoyData 建设社媒舆情、HTML 报告与分级告警链路；重构多语言问卷系统并交付可运行验证版本，推动 PRD 与代码同仓协作。',
      relatedCases: ['agent-platform', 'marketing-ai', 'survey']
    },
    {
      period: '2025.09 — 2026.05',
      company: '腾讯 PCG · 平台与内容事业群',
      role: 'AI 产品经理实习生',
      focus: 'Crevo AI 多媒体创作 SaaS（海外创作者 & 电商）',
      desc: '负责面向海外创作者与电商卖家的多模态创作 SaaS 从 0 到 1 产品规划与研发交接。覆盖 11 个工具模块、对话式「AI 导演」、URL to Video、四维模型评测、积分订阅双轨制及转化漏斗埋点。',
      relatedCases: ['crevo']
    }
  ],

  featuredLabs: [
    {
      tag: 'MULTI-AGENT WORKBENCH',
      title: 'WorkTogether',
      subtitle: '多 Agent 协同研发工作台',
      status: '原型开源',
      desc: '针对多 Agent 讨论上下文分散、责任不清的问题，以任务为单位串联讨论、规划、人工审批、代码执行与验收修复。Web 工作台区分本地执行 Agent 与受限对话 Agent；独立验证的原生群聊版已跑通 Codex 与 DeepSeek 双向消息及只读任务交叉验收。',
      note: '原生版与 Web 版分别验证，不将只读案例外推为任意开发任务可无人值守交付。',
      href: 'https://github.com/limengzhe27-boop/workTogether',
      linkText: '查看 GitHub 仓库',
      pic: 'assets/worktogether-concept.jpg',
      caption: '公开仓库群聊协同界面设计稿 · 模拟数据'
    },
    {
      tag: 'MOBILE ENGINEERING',
      title: 'CallMe',
      subtitle: '双端本地来电安排工具',
      status: 'iOS / Android 真机验证',
      desc: '独立完成 iOS（SwiftUI / CallKit）与 Android（Kotlin / Compose）双端实现，并在 iPhone 与小米真机上验证前后台切换、锁屏触发、铃声与系统权限链路，解决特定场景下的本地模拟来电提醒需求。',
      note: '本地模拟来电与提醒工具，非运营商真实外呼服务。',
      href: 'https://github.com/limengzhe27-boop/CallMe',
      linkText: '查看 GitHub 仓库',
      pic: 'assets/callme-home.jpg',
      caption: 'iOS 实机截图 · 来电安排与联系人模板'
    }
  ],

  moreLabs: [
    {
      tag: 'OPEN SOURCE SKILLS',
      title: 'AI 产品交付 Skills（5 仓开源）',
      status: '持续维护',
      desc: '将市场研究、需求定义、原型转研发 PRD、Web 设计规范、公众号内容研究与 GitHub 发布检查固化为可复用 Skills，配套校验脚本与来源约束。',
      links: [
        { label: '产品文档', href: 'https://github.com/limengzhe27-boop/claude-product-doc-skills' },
        { label: '原型转 PRD', href: 'https://github.com/limengzhe27-boop/prototype-to-dev-prd' },
        { label: 'Web 设计', href: 'https://github.com/limengzhe27-boop/claude-web-design-skill' },
        { label: '内容研究', href: 'https://github.com/limengzhe27-boop/wechat-content-skill' },
        { label: '发布检查', href: 'https://github.com/limengzhe27-boop/github-project-publisher' }
      ]
    },
    {
      tag: 'CONTENT WORKFLOW',
      title: 'GEO Workbench',
      status: '可运行原型',
      desc: '面向品牌与个人 IP 的生成式引擎内容工作台，串联主体档案、关键词研究、来源约束写作、多平台适配与人工审核，附带 5 个配套 Skills。',
      links: [{ label: 'GitHub', href: 'https://github.com/limengzhe27-boop/geo2' }]
    },
    {
      tag: 'UTILITY / LIVE WEB',
      title: 'PixelBead Studio',
      status: '线上可体验',
      desc: '面向手作创作者的拼豆像素图纸工具：支持本地图片导入/AI 生成（自备密钥）/手绘、Artkal 色板映射、网格编辑、材料统计与 PDF 导出。',
      links: [
        { label: '在线体验', href: 'https://pixel-bead-studio-theta.vercel.app' },
        { label: 'GitHub', href: 'https://github.com/limengzhe27-boop/PixelBead-Studio' }
      ]
    },
    {
      tag: 'AI ASSESSMENT · TEAM',
      title: 'StudySphere / StudyHere',
      status: '方案与验证设计',
      desc: '团队项目。从资料学习闭环（StudyHere 16 章 PRD）收敛为「出题—追问—Rubric 评分—证据化报告—再评估」的技能考核闭环（StudySphere BRD）。',
      links: []
    },
    {
      tag: 'RAG FIXED WORKFLOW',
      title: '校园圈',
      status: '高保真原型',
      desc: '开放式校园信息广场，涵盖信息流、悬赏互助状态机、闲置交易与学号认证，并以 RAG 固定流程提供带原文来源的校规检索问答。',
      links: []
    },
    {
      tag: 'AIGC WORKFLOW',
      title: '漫想',
      status: '线上原型',
      desc: 'AI 小说漫画一体化创作原型，以故事种子、两段式分镜、剧情分支与滚动摘要组成稳定固定工作流。',
      links: [{ label: '访问原型', href: 'https://manxiang.site' }]
    }
  ]
};
