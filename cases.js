const CASES = [
      {"id":"video","title":"互动影游｜选择之后的等待","kicker":"Interactive Video","problem":"玩家选完分支才开始生成，成本可控，却可能在故事最需要连贯时留下空白。","decision":"把“生成成功”与“玩家可播放”设为两项验收；提前生成未选分支会产生费用，因此不以预生成数量作为优化目标。","actions":["亲自试写双主角故事，拆分建议生成、作者采纳和稿件保存。","区分角色知道的线索和玩家在其他视角看过的事实。","分段检查脚本准备、媒体取回、首帧衔接和实际可播放时间。"],"outcomes":["交付创作与试玩原型，形成换角、续玩和视频衔接的验收用例。"],"truth":"原型验证，未将分支预生成描述为已取得线上时延改善。","categories":["全部","AIGC","Agent"],"company":"原初之境","role":"产品实习生","period":"2026.09—至今","stage":"原型验证","stageColor":"#6d50bd","desc":"玩家选完分支才开始生成，成本可控，却可能在故事最需要连贯时留下空白。","tags":["视频生成","创作 Agent"],"code":"IV","number":"XGEN / 01","size":"wide"},
      {"id":"life","title":"AI 人生体验｜角色是否真的到场","kicker":"Multi-agent Experience","problem":"角色在聊天里答应见面，并不等于玩家进入现场后能遇见它。","decision":"导演协调世界进展；角色根据所知和目标行动。只有系统记录了行动结果，才应改变地点、会话或存档。","actions":["把约见、出发、到场、现场回应、返回手机串为连续场景。","区分用户资料、虚构设定与角色认知；为中断回复设计分段保存与重试规则。"],"outcomes":["原有存档复测了人物到场与现场交流。","合成存档验证两名角色对同一动态发表评论，刷新后仍可读取。"],"truth":"两类存档分开验证，不等同于真实玩家留存或长期自主运行。","categories":["全部","Agent","AIGC"],"company":"原初之境","role":"产品实习生","period":"2026.09—至今","stage":"原型验证","stageColor":"#6d50bd","desc":"角色在聊天里答应见面，并不等于玩家进入现场后能遇见它。","tags":["多角色","存档恢复"],"code":"PL","number":"XGEN / 02","size":"narrow"},
      {"id":"pisco","title":"Pisco｜从角色创作到内测资格","kicker":"AI Roleplay","problem":"玩家可能既在官网申请，也从好友取得邀请。若按入口计数，会出现同一人占两个名额。","decision":"将申请、登录、获得资格分开记录，以账号绑定资格；好友领取成功后释放平台预留名额。","actions":["推动角色创建、发布与历史续聊的可运行前端交接。","梳理旧答卷回查、作品退回后修改原稿并重提的运营路径。","研究 Tipsy 社区一周内 1,373 条去重消息，关注遗忘剧情后重试仍需扣费的反馈。"],"outcomes":["交付用户端和运营后台演示版本。","推动制作覆盖竞品 17 个历史套餐档位的计算器，比较相同预算下的可聊轮数与每百轮费用。"],"truth":"内测流程为原型验证；套餐数字来自竞品研究，不代表 Pisco 的用户或收入。","categories":["全部","AIGC","Growth"],"company":"原初之境","role":"产品实习生","period":"2026.09—至今","stage":"内测流程原型","stageColor":"#6d50bd","desc":"玩家可能既在官网申请，也从好友取得邀请。若按入口计数，会出现同一人占两个名额。","tags":["Roleplay","邀请与审核"],"code":"RP","number":"XGEN / 03","size":"wide"},
      {
        id: 'agent-platform', code: 'AP', number: 'CASE 01', size: 'wide', categories: ['全部', 'Enterprise AI', 'Agent'],
        title: '企业级多模型 Agent 平台', kicker: 'Enterprise Agent Platform', stage: '公司内网已部署', stageColor: '#24b46b',
        desc: '针对飞书 Agent 在多模型、复杂任务与能力复用方面的不足，从 0 到 1 规划独立平台，让 Agent、模型、Skill、企业知识、长期记忆与 MCP 工具进入统一生命周期。',
        tags: ['Agent Lifecycle', 'Multi-model', 'MCP', 'Skill', 'RAG'],
        company: '欢乐互娱', role: 'AI 产品经理', period: '2026.06—08',
        problem: '业务团队需要更灵活地创建和复用 Agent，但原有入口难以承载多模型选择、复杂任务、多 Agent 协作、企业知识与工具统一管理。',
        decision: '不再继续为单个飞书 Agent 叠加能力，而是把模型、知识、记忆、Skill 与工具抽象为平台级资源，并用草稿、测试、发布和回滚管理完整生命周期。',
        actions: [
          '规划手动配置与自然语言创建两种路径，统一“创建草稿—编辑配置—测试评测—审核发布—版本回滚”流程。',
          '设计模型选择与调整、单/多 Agent 执行、Skill、企业知识、长期记忆及 MCP 工具等核心模块。',
          '规划平台内创建及可信 URL 导入 Skill、来源记录、版本更新与显式绑定规则。',
          '设计企业 Wiki 混合检索、来源引用，以及用户可确认、编辑和删除的长期记忆。',
          '通过受控工具方案连接 JoyData、公司翻译系统、翻译记忆库、术语库与本地化能力。'
        ],
        outcomes: [
          '形成 Agent 从创建、配置、测试到发布和回滚的统一产品闭环。',
          '让模型、Skill、知识、记忆和工具成为可配置、可复用的企业能力。',
          '平台现已部署公司内网，员工连接内网后可通过飞书账号登录使用。'
        ],
        truth: '负责产品规划与核心功能设计；平台内网部署由团队完成。',
      },
      {
        id: 'marketing-ai', code: 'MA', number: 'CASE 02', size: 'narrow', categories: ['全部', 'Enterprise AI', 'Agent', 'Growth'],
        title: '海外游戏营销 AI 工作台', kicker: 'Social Listening · Influencer Ops', stage: '部分能力已落地', stageColor: '#315bff',
        desc: '以营销人员真实工作流为中心，连接 JoyData、飞书 AI Agent 与自动化工作流，覆盖多社媒舆情、HTML 报告、异常预警、达人治理和区域热点。',
        tags: ['JoyData', '舆情报告', '告警', 'OneLink', '热点周报'],
        company: '欢乐互娱', role: 'AI 产品经理', period: '2026.06—08',
        problem: '海外营销信息分散在多社媒、达人档案、OneLink 与飞书表格中；查询、判断、建档和回填高度依赖人工，且缺少可追溯的舆情分析与告警链路。',
        decision: '不把舆情、预警、达人和热点分别做成孤立机器人，而是以营销人员的工作流和 JoyData 数据为主体：Agent 负责查询与归纳，自动化流程负责监测和同步，原始记录始终可回溯。',
        actions: [
          '负责 JoyData 官媒舆情页面，聚合 Discord、Facebook、YouTube、Instagram、App Store 与 JoymakerClub 评论。',
          '设计飞书 Agent 查询：按游戏、平台、地区与时间提炼趋势、情绪、话题、代表性原声和运营建议，并生成 HTML 舆情报告。',
          '规划“定时监测—同期基线—评论下钻—事件去重—首次/升级推送—持续追踪”预警闭环。',
          '设计达人跨社媒身份补全、链接标准化、传递式去重与主记录归并，串联达人建档和 OneLink 协作。',
          '整合 TikTok、YouTube/Google Trends、Google、Reddit、X 等来源，形成按地区筛选和 AI 归纳的热点周报。'
        ],
        outcomes: [
          'JoyData 官媒舆情页面已形成多平台评论聚合、筛选、翻译、标签、导出与原帖回溯入口。',
          '形成“自然语言查询—AI 总结—HTML 报告”及分级预警的完整产品方案。',
          '把达人身份、建联地区、OneLink 与合作信息同步从分散操作整理为可编排工作流。'
        ],
        truth: 'JoyData 官媒舆情页面已落地；Agent、预警、达人与热点能力处于不同建设阶段，因此统一标注为“部分能力已落地”。',
      },
      {
        id: 'survey', code: 'SV', number: 'CASE 03', size: 'wide', categories: ['全部', 'Enterprise AI', 'B2B'],
        title: 'JoyData 多语言问卷系统重构', kicker: 'Research Ops · Global Players', stage: '可运行验证版本', stageColor: '#ff9f6e',
        desc: '将旧问卷系统重构为面向游戏出海业务的调研工作台，统一问卷编辑、多语言本地化、复杂显示逻辑、答卷清洗、统计分析与即时抽奖方案。',
        tags: ['30+ Components', '多语言', '显示逻辑', '即时抽奖', 'Git 协作'],
        company: '欢乐互娱', role: 'AI 产品经理', period: '2026.06—08',
        problem: '旧系统入口与 JoyData 割裂，功能密度高，多语言内容依赖重复创建，复杂题型、发布锁定、数据清洗与海外身份规则缺少统一定义。',
        decision: '不为每种语言复制整份问卷，而是用稳定字段 ID 共享结构、分离语言内容；复杂题型和显示逻辑先通过可运行原型验证，再进入正式接口接入阶段。',
        actions: [
          '重构问卷工作台、国内/海外工作空间、项目分组、模板、回收站和草稿/收集中/已结束状态。',
          '规划 30 余种题目与排版组件，并按题型定义显示条件、实时执行、隐藏答案清理和失效条件处理。',
          '设计原文/译文对照、稳定字段 ID、翻译状态及 Excel、CSV、飞书多维表格导入导出。',
          '建立答卷有效性、重复去重、评分判定和逐题型统计口径。',
          '规划即时抽奖的资格、九宫格奖池、概率、库存、防重复、领取时限及过期释放，并通过可运行页面验证。'
        ],
        outcomes: [
          '完成工作台、编辑器、多语言、设置发布、玩家答题、答卷明细与数据统计等可运行页面。',
          '形成显示逻辑、多语言、发布锁定、答卷有效性、统计和即时抽奖的复杂规则基线。',
          '将 PRD 与代码共同维护在 Git 仓库，可直接参与简单前端修改与合并协作。'
        ],
        truth: '当前为产品方案与可运行验证版本，尚未接入 JoyData 生产环境；即时抽奖已完成产品设计与原型验证，尚未上线。',
      },
      {
        id: 'crevo', code: 'CV', number: 'CASE 04', size: 'narrow', categories: ['全部', 'AIGC', 'Agent', 'Growth'],
        title: 'Crevo AI 多媒体创作 SaaS', kicker: 'AIGC SaaS · Global Creators', stage: '已上线', stageColor: '#24b46b',
        desc: '面向海外创作者与电商卖家，将图像、视频、语音与音乐能力整合到对话式创作入口，并通过模型评测、路由、降级与商业化机制连接体验和成本。',
        tags: ['Multimodal', 'Model Eval', 'URL to Video', 'Subscription'],
        company: '腾讯 PCG', role: 'AI 产品经理', period: '2025.09—2026.05',
        problem: '用户需要在多个生成工具之间切换、重复学习 Prompt 和模型参数；电商广告素材制作还涉及商品解析、脚本、首帧和视频等跨步骤协作。',
        decision: '不把多模态能力平铺成一组彼此割裂的工具，而是用统一对话入口承接意图和任务编排，并以质量、速度、成本和稳定性评测驱动模型路由、降级与计费。',
        actions: [
          '规划图像、视频、语音、音乐等 11 个工具模块及简中、繁中、英语、日语、韩语多语言方案。',
          '设计对话式 Agent 的意图识别、任务拆解、Prompt 优化、模型调用、异步任务和实时进度反馈。',
          '规划多模型路由、失败重试与降级机制，降低生成失败对核心体验的影响。',
          '设计 URL to Video：商品页解析—卖点提取—风格选择—分镜脚本—首帧—视频生成。',
          '建立质量、速度、API 成本、稳定性四维模型评测，并规划积分与三档订阅体系。'
        ],
        outcomes: [
          '完成从产品方案、AI 能力、模型评测到商业化与研发协作的完整交付。',
          '产品上线后累计注册 500+、月活 160、付费转化率 3%，D1 留存 18%、D7 留存 9%。'
        ],
        stats: [['500+', '累计注册'], ['160', '月活用户'], ['3%', '付费转化'], ['18%', 'D1 留存']],
        truth: '运营数据由团队提供并采用团队统计口径，不作个人单独贡献归因。',
      }
    ];

    const summaries = {
      video: '作者通过创作 Agent 编辑故事，玩家在视频片段间选择下一幕。案例聚焦作者控制权，以及续片等待和生成费用的取舍。',
      life: '在虚拟手机里约见角色、前往现场、再回到聊天。用连续场景检验多角色认知、实际行动与存档是否一致。',
      pisco: '由单角色创作与续聊延伸到内测招募；以双端原型验证邀请名额和审核版本，并以竞品社区反馈研究对话成本。'
    };
    CASES.forEach(item => { if (summaries[item.id]) item.desc = summaries[item.id]; });
    const LABS = [
      {type:'MULTI-AGENT', title:'WorkTogether', desc:'Web 工作台将方案讨论、审批、开发和验收放入同一任务。另行验证的原生群聊版已测试 Codex 与 DeepSeek 互发消息及只读任务交叉验收。', status:'原型开源', href:'https://github.com/limengzhe27-boop/workTogether', pic:'worktogether-concept.jpg',caption:'公开仓库中的群聊界面设计稿 · 模拟数据'},
      {type:'CONTENT OPERATIONS',title:'GEO Workbench',desc:'围绕品牌资料、关键词、来源约束和多平台适配设计内容工作台；在生成、人工审核与发布之间保留明确的编辑责任。',status:'可运行原型',href:'https://github.com/limengzhe27-boop/geo2'},
      {type:'AI ASSESSMENT / BRD', title:'StudySphere / StudyHere', desc:'从泛 AI 学习助手进一步收敛为“会出题、会追问、会评分、会给再练方案”的技能考核闭环，设计情境题、Rubric、证据化报告与再评估。', status:'完整方案与验证设计', href:''},
      {type:'RAG / PRODUCT PROTOTYPE', title:'校园圈', desc:'开放式校园信息广场，覆盖信息流、互助悬赏、闲置交易、身份认证与管理后台，并以 RAG 提供带来源的校规问答。', status:'高保真可运行原型', href:''},
      {type:'AIGC / FIXED WORKFLOW', title:'漫想', desc:'AI 小说漫画一体化创作原型，以故事种子、两段式分镜、剧情分支、滚动摘要和角色一致性组成稳定创作工作流。', status:'线上可运行原型', href:'https://manxiang.site'},
      {type:'MOBILE ENGINEERING', title:'CallMe', desc:'本地来电安排工具，完成 iOS SwiftUI/CallKit 与 Android Kotlin/Compose 双端实现，并在 iPhone 与小米真机验证前后台、锁屏和权限链路。', status:'双端真机验证', href:'https://github.com/limengzhe27-boop/CallMe',pic:'callme-home.jpg',caption:'iOS 实机界面 · 来电安排与联系人模板'},
      {type:'UTILITY / FRONTEND', title:'PixelBead Studio', desc:'面向拼豆创作者的像素化与色板映射工具，将图片转换、网格编辑、颜色统计与导出整合为可直接使用的网页工具。', status:'线上可体验', href:'https://pixel-bead-studio-theta.vercel.app'},
      {type:'OPEN SOURCE / SKILLS', title:'AI 产品交付 Skills', desc:'把市场研究、需求定义、PRD 生成和原型转研发文档固化为可复用 Skill，以证据矩阵、模板与校验流程提升 Agentic 产品交付质量。', status:'GitHub 持续维护', href:'https://github.com/limengzhe27-boop'}
    ];
