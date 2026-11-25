const slides = [
 {id:'intro',part:'开场',tag:'个人定位',title:'李孟哲',sub:'AI 产品经理 · 2027 届',body:'软件工程本科。三段实习分别关注创作者、企业业务团队和游戏玩家。以下按经历发生的顺序，介绍产品如何从需求定义走到上线或验证。',lens:'讲述主线',note:'从创作工具的模型选型，到企业平台的可配置性，再到互动内容的连续体验。',visual:'map'},
 {id:'crevo',part:'腾讯 PCG',tag:'多模态创作 / 2025.09 — 2026.05',title:'从商品链接到成片',sub:'Crevo · AI 多媒体创作 SaaS',body:'海外电商卖家需要的是一条能展示商品卖点的视频。作为唯一产品负责人，我把商品解析、分镜、首帧和成片接入同一个创作流程。',lens:'产品取舍',note:'评测不只看画质。速度、API 成本与稳定性也决定模型如何路由、失败如何降级，以及积分如何计费。',visual:'crevo',cases:['crevo']},
 {id:'agent',part:'欢乐互娱',tag:'质量管理中心 / 2026.06 — 08',title:'从单个助手到企业平台',sub:'企业级多模型 Agent 平台',body:'原有飞书 Agent 难以支持复杂任务。针对业务人员配置和测试助手的需要，从零规划独立平台，将模型、企业知识、Skill 和工具纳入同一创建流程。',lens:'职责与交付',note:'负责产品规划和核心功能设计，推动团队完成内网部署。员工连接公司内网后，可用飞书账号登录并调整 Agent 使用的模型。',visual:'agent',cases:['agent-platform','marketing-ai','survey']},
 {id:'video',part:'原初之境',tag:'互动影游 / 2026.09 — 至今',title:'生成结束，不等于能播',sub:'基于视频模型的互动故事',body:'作者与创作 Agent 一起编写分支故事，玩家通过选择进入下一幕。如果等玩家选完再生成，剧情会中断；提前生成所有分支，又要为没被选中的内容付费。',lens:'验证方式',note:'分开检查脚本、媒体取回、首帧衔接和实际播放；通过双主角试写与试玩验证换角和续玩，不把原型结果写成线上提速。',visual:'video',cases:['video','life']},
 {id:'pisco',part:'原初之境',tag:'AI 角色互动 / Pisco',title:'同一玩家，只占一个名额',sub:'Pisco · 角色创作与内测运营',body:'除了创建角色和继续对话，内测还需要处理一个容易遗漏的冲突：玩家可能先在官网申请，又收到好友邀请，两个入口不能重复占用名额。',lens:'产品取舍',note:'申请、登录与获得资格分别记录；资格绑定账号。交付用户端和运营后台演示，并研究社区反馈中剧情遗忘、重试付费等续聊问题。',visual:'pisco',cases:['pisco']},
 {id:'lab',part:'个人实践',tag:'独立验证 / WorkTogether',title:'两个 Agent 如何交接工作',sub:'从并行对话到任务验收',body:'WorkTogether 的 Web 原型把方案讨论、审批、开发与验收放进同一任务。另一个原生群聊验证版本，用 Codex 和 DeepSeek 测试互发消息与只读交叉验收。',lens:'验证边界',note:'群聊验证的是两个 Agent 能互相传递信息并检查任务，不等于完整流程已能无人运行。',visual:'lab'},
 {id:'summary',part:'收束',tag:'能力回顾 / 求职方向',title:'AI 产品经理',sub:'AI 应用、企业 Agent 产品方向',body:'能独立定义产品范围，理解模型与工程限制，并用原型、运行结果或业务数据判断方案是否成立。希望在 AI 产品经理岗位继续承担从需求判断到验证交付的工作。',lens:'对应经验',note:'Crevo 支撑模型选型与订阅设计，企业 Agent 平台支撑复杂流程设计，互动影游与 Pisco 支撑玩家体验验证。',visual:'summary'}
];
const q=s=>document.querySelector(s), dlg=q('#talk'), str=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;'); let at=0, prior=null;
const panels={
map:'<div class="mapstack"><p><time>2025.09</time><b>腾讯 PCG</b><span>创作者</span></p><p><time>2026.06</time><b>欢乐互娱</b><span>业务团队</span></p><p><time>2026.09</time><b>原初之境</b><span>玩家</span></p></div>',
crevo:'<div class="pipeline"><span>商品链接</span><i></i><span>卖点与分镜</span><i></i><span>首帧与成片</span></div><div class="numline"><b>500+<small>注册用户</small></b><b>160<small>月活用户</small></b><b>3%<small>付费转化</small></b></div><small>上线首月 · 团队运营口径</small>',
agent:'<div class="layers"><p><small>业务入口</small><b>通过飞书账号登录</b></p><p><small>配置与测试</small><b>模型 / 知识 / Skill / 工具</b></p><p><small>版本管理</small><b>测试、发布与回滚</b></p></div>',
video:'<div class="filmstrip"><div><i></i><b>当前片段</b></div><div><i></i><b>分支选择</b></div><div><i></i><b>下一幕</b></div></div><div class="ruler"><b>生成完成</b><span></span><b>实际可播放</b></div><small>流程示意 · 两个不同的验收时点</small>',
pisco:'<div class="channels"><span>官网申请</span><span>好友邀请</span></div><div class="join"></div><div class="account">账号资格记录</div><small>领取成功后释放预留名额</small>',
lab:'<figure class="demopic"><img src="../../assets/worktogether-concept.jpg" alt="WorkTogether 群聊界面设计稿"><figcaption>公开仓库设计稿 · 模拟数据</figcaption></figure>',
summary:'<div class="wrapup"><p><b>判断需求</b><span>从商品链接定义创作任务</span></p><p><b>设计规则</b><span>把模型选择与发布审核分开</span></p><p><b>验证结果</b><span>把可播放作为玩家端验收点</span></p></div>'
};
const labels={map:'三段经历',crevo:'创作链路与业务结果',agent:'企业 Agent 的使用路径',video:'分支视频的衔接',pisco:'内测资格归并',lab:'独立项目',summary:'三类产品判断'};
const cues=[
 '开场可以先说：我的第一段实习做创作工具，第二段做企业内部平台，第三段做玩家体验。我先从最早独立负责的 Crevo 讲起。',
 '过渡到欢乐互娱：Crevo 的用户希望系统替他选好模型；企业团队的需求不同，他们需要自己选择模型、配置知识，并判断助手能否发布。',
 '过渡到原初之境：企业平台关心任务有没有按配置执行。到了互动影游，即使后台成功了，玩家眼前的故事也可能还是断的。',
 '过渡到 Pisco：影游验证的是一段故事能否连续播放。Pisco 换了一个场景：角色要能持续互动，团队也要能管理内测用户和作品。',
 '过渡到个人项目：刚才几项都是团队中的产品工作。接下来用一个独立项目，补充我怎样自己验证一个 Agent 协作设想。',
 '收束时回看三个证据：一项产品已经上线，一个平台已在内网使用，一组新体验通过了原型验证。分别说明个人负责的部分。',
 '结束时可以邀请追问：如果岗位更关注 Agent，我可以展开模型配置、知识和工具的边界；如果更关注 AI 应用，我可以展开生成体验与成本的取舍。'
];
const hints=document.createElement('button');hints.type='button';hints.textContent='讲述提示';hints.setAttribute('aria-pressed','false');q('#endTalk').before(hints);let notes=false;
function cue(){let el=q('#cue');if(!el){el=document.createElement('aside');el.id='cue';q('#stagecontent').append(el)}el.hidden=!notes;el.textContent=cues[at];hints.setAttribute('aria-pressed',String(notes))}
hints.onclick=()=>{notes=!notes;cue();if(notes)q('#cue').scrollIntoView({block:'nearest'})};
const short={video:'互动影游',life:'AI 人生体验',pisco:'Pisco','agent-platform':'企业 Agent 平台','marketing-ai':'海外游戏营销','survey':'多语言问卷',crevo:'Crevo'};
function showSlide(n,dir=0){
 const s=slides[n];at=n;const body=q('#stagecontent');
 const extra=(s.cases||[]).map(id=>{const p=CASES.find(x=>x.id===id);return '<details><summary>'+short[id]+' · 追问材料</summary><p><b>业务问题</b>'+str(p.problem)+'</p><p><b>关键判断</b>'+str(p.decision)+'</p><p><b>个人职责</b>'+p.actions.map(str).join('<br>')+'</p><p><b>交付结果</b>'+p.outcomes.map(str).join('<br>')+'</p><small>'+str(p.truth)+'</small></details>'}).join('');
 body.innerHTML='<div class="slidecopy"><div class="talklabel">'+s.tag+'</div><h2 id="slideTitle">'+s.title+'</h2><h3>'+s.sub+'</h3><p>'+s.body+'</p><div class="insight"><strong>'+s.lens+'</strong>'+s.note+'</div></div><aside class="plate plate-'+s.visual+'"><div class="plabel">'+labels[s.visual]+'</div>'+panels[s.visual]+'</aside>'+(extra?'<div class="appendix">'+extra+'</div>':'')+(s.id==='summary'?'<div class="endlinks"><a class="button primary" href="../../assets/resume-product-20261125.pdf" target="_blank" rel="noreferrer">综合版简历</a><a class="button" href="../../assets/resume-agent-20261125.pdf" target="_blank" rel="noreferrer">Agent 版简历</a><a class="button" href="mailto:limengzhe27@gmail.com">邮件联系</a></div>':'');
 cue();q('#count').textContent=(n+1)+' / '+slides.length+'　'+s.part;q('#back').disabled=n===0;q('#forward').textContent=n===slides.length-1?'完成讲解':'下一页';body.scrollTop=0;dlg.style.setProperty('--step',100*(n+1)/slides.length+'%');
 if(dir&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&body.animate){body.getAnimations().forEach(a=>a.cancel());body.animate([{transform:'translateX('+dir*13+'px)',opacity:.7},{transform:'none',opacity:1}],{duration:190,easing:'ease-out'})}
}
function launch(n){prior=document.activeElement;showSlide(n);dlg.showModal();document.documentElement.classList.add('presenting');q('#forward').focus({preventScroll:true})}
function finish(){dlg.close()}
function advance(d){if(at+d===slides.length){finish();return}if(at+d>=0)showSlide(at+d,d)}
q('#tourStart').onclick=()=>launch(0);q('#endTalk').onclick=finish;q('#forward').onclick=()=>advance(1);q('#back').onclick=()=>advance(-1);
dlg.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();advance(e.key==='ArrowRight'?1:-1)}});
dlg.addEventListener('close',()=>{document.documentElement.classList.remove('presenting');if(location.hash.startsWith('#talk-'))history.replaceState(null,'',location.pathname+location.search);prior?.focus({preventScroll:true})});
function direct(){let i=slides.findIndex(s=>location.hash==='#talk-'+s.id);if(i>=0){if(dlg.open)showSlide(i);else launch(i)}}
window.addEventListener('hashchange',direct);direct();
