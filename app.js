'use strict';

(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const $ = (id) => document.getElementById(id);
  const caseMap = new Map(data.cases.map((c) => [c.id, c]));
  const companies = ['全部', '原初之境', '欢乐互娱', '腾讯 PCG'];

  let currentCompany = '全部';
  let readerList = [];
  let readerIndex = 0;
  let lastTrigger = null;
  let toastTimer = null;

  function showToast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2200);
  }

  function stageClass(type) {
    if (type === 'live') return 'stage-pill stage-live';
    if (type === 'partial') return 'stage-pill stage-partial';
    return 'stage-pill stage-proto';
  }

  /* ========================================================================
     1. Experience Section (Structured Bullets for Clear Interview Reading)
     ======================================================================== */

  const expBulletsMap = {
    '原初之境 · XGEN Labs': [
      '探索视频模型驱动的互动影游与虚拟手机人生体验，通过作者试写、换角与旧存档复测，明确创作 Agent 与角色的读写与认知边界。',
      '推动 Pisco 单角色创作、发布与续聊前端交接；设计内测申请、好友邀请与资格激活规则，并以双端原型验证名额释放与退稿重提。',
      '发起 Tipsy 玩家研究，梳理一周内 1,373 条去重社区消息，推动制作覆盖 17 个历史套餐档位的每百轮费用计算器。'
    ],
    '欢乐互娱 · 质量管理中心': [
      '从 0 到 1 规划企业级多模型 Agent 平台，将模型、企业知识、长期记忆、Skill 与 MCP 工具纳入统一创建与评测流程，平台已由团队部署内网并支持飞书登录。',
      '基于内部自研大数据中台 JoyData 建设海外社媒舆情查询、HTML 报告与分级告警链路，梳理达人身份治理与多语区热点情报流程。',
      '重构多语言问卷编辑器（30+ 题型）、显示逻辑、答卷清洗统计与即时抽奖，交付可运行验证版，推动 PRD 与代码同仓及 Git 协作。'
    ],
    '腾讯 PCG · 平台与内容事业群': [
      '面向海外创作者与电商卖家，主导 Crevo 多模态创作 SaaS 从 0 到 1 产品规划与研发交接，覆盖 11 个工具模块与多语言支持。',
      '设计对话式「AI 导演」与 URL to Video 商品页转广告视频链路，结合质量、速度、API 成本与稳定性建立四维模型评测框架。',
      '规划积分与三档订阅双轨制及转化漏斗埋点；上线首月据团队统计口径累计注册 500+、月活 160、付费转化率 3%。'
    ]
  };

  function renderExperiences() {
    $('experienceList').innerHTML = data.experiences
      .map((exp) => {
        const bullets = expBulletsMap[exp.company] || [exp.desc];
        return `
          <article class="exp-card">
            <div>
              <div class="exp-period">${exp.period}</div>
              <h3 class="exp-company">${exp.company}</h3>
              <div class="exp-role">${exp.role}</div>
              <div class="exp-scope">${exp.focus}</div>
            </div>
            <div>
              <ul class="exp-bullets">
                ${bullets.map((b) => `<li>${b}</li>`).join('')}
              </ul>
              <div class="exp-chips">
                ${exp.relatedCases
                  .map((id) => {
                    const c = caseMap.get(id);
                    return c
                      ? `<button class="exp-chip" type="button" data-open-case="${c.id}"><span>查看案例：${c.title.split('｜')[0]}</span><span aria-hidden="true">↗</span></button>`
                      : '';
                  })
                  .join('')}
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  /* ========================================================================
     2. Core Cases (3 Flagship Cards + 4 Secondary Cards)
     ======================================================================== */

  function getFilteredCases() {
    const ordered = data.perspectives.all.order.map((id) => caseMap.get(id)).filter(Boolean);
    if (currentCompany === '全部') return ordered;
    return ordered.filter((c) => c.company === currentCompany);
  }

  function renderCaseCard(c, isFlagship) {
    const metricsClass = c.metrics.length === 2 ? 'case-metrics is-two' : 'case-metrics';
    return `
      <button class="case-card ${isFlagship ? 'is-flagship' : ''}" type="button" data-open-case="${c.id}">
        <div>
          <div class="case-top">
            <span class="case-org">${c.company} · ${c.period}</span>
            <span class="${stageClass(c.stageType)}">${c.stage}</span>
          </div>
          <h3 class="case-title">${c.title}</h3>
          <div class="case-question">${c.question}</div>
          <p class="case-summary">${c.summary}</p>
        </div>

        <div style="display:grid;gap:14px">
          <div class="${metricsClass}">
            ${c.metrics
              .slice(0, 3)
              .map((m) => `<div><strong>${m.value}</strong><span>${m.label}</span></div>`)
              .join('')}
          </div>
          <div class="case-foot">
            <div class="case-tags">
              ${c.tags.slice(0, 3).map((t) => `<span>${t}</span>`).join('')}
            </div>
            <span class="case-cta">详情 →</span>
          </div>
        </div>
      </button>
    `;
  }

  function renderCases() {
    $('companyFilters').innerHTML = companies
      .map((co) => {
        const count =
          co === '全部' ? data.cases.length : data.cases.filter((c) => c.company === co).length;
        return `<button class="filter-btn" type="button" data-company="${co}" aria-pressed="${co === currentCompany}">${co} (${count})</button>`;
      })
      .join('');

    const list = getFilteredCases();
    readerList = list;

    const split = currentCompany === '全部' && list.length > 3;
    const primary = split ? list.slice(0, 3) : list;
    const secondary = split ? list.slice(3) : [];

    $('featuredCases').innerHTML = primary.map((c) => renderCaseCard(c, true)).join('');

    const secEl = $('secondaryCases');
    if (secondary.length) {
      secEl.style.display = 'grid';
      secEl.innerHTML = secondary.map((c) => renderCaseCard(c, false)).join('');
    } else {
      secEl.style.display = 'none';
      secEl.innerHTML = '';
    }
  }

  /* ========================================================================
     3. Method & Independent Lab
     ======================================================================== */

  function renderMethodAndLab() {
    $('methodGrid').innerHTML = data.principles
      .map(
        (p) => `
      <article class="method-card">
        <span class="method-num">${p.index}</span>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
      </article>
    `
      )
      .join('');

    $('featuredLabs').innerHTML = data.featuredLabs
      .map(
        (item) => `
      <article class="lab-card-lg">
        <figure class="lab-media">
          <a href="${item.pic}" target="_blank" rel="noopener">
            <img src="${item.pic}" alt="${item.caption}">
          </a>
          <figcaption>${item.caption}</figcaption>
        </figure>
        <div class="lab-content">
          <div class="lab-top">
            <span>${item.tag}</span>
            <span>${item.status}</span>
          </div>
          <h3>${item.title}<span>${item.subtitle}</span></h3>
          <p>${item.desc}</p>
          <div class="lab-note">${item.note}</div>
          <a class="lab-link" href="${item.href}" target="_blank" rel="noopener">${item.linkText} ↗</a>
        </div>
      </article>
    `
      )
      .join('');

    $('moreLabs').innerHTML = data.moreLabs
      .map(
        (item) => `
      <article class="lab-card-sm">
        <div class="lab-top">
          <span>${item.tag}</span>
          <span>${item.status}</span>
        </div>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        ${
          item.links.length
            ? `<div class="lab-links">${item.links
                .map((l) => `<a href="${l.href}" target="_blank" rel="noopener">${l.label} ↗</a>`)
                .join('')}</div>`
            : ''
        }
      </article>
    `
      )
      .join('');
  }

  /* ========================================================================
     4. Case Reader Modal
     ======================================================================== */

  function openCaseById(id, trigger) {
    let idx = readerList.findIndex((c) => c.id === id);
    if (idx === -1) {
      readerList = data.perspectives.all.order.map((cid) => caseMap.get(cid)).filter(Boolean);
      idx = readerList.findIndex((c) => c.id === id);
    }
    if (idx !== -1) openReaderAt(idx, trigger);
  }

  function openReaderAt(index, trigger) {
    if (index < 0 || index >= readerList.length) return;
    const dialog = $('readerDialog');
    const c = readerList[index];
    readerIndex = index;
    if (!dialog.open) lastTrigger = trigger || document.activeElement;

    $('readerLoc').textContent = `${c.companyFull}  ·  ${index + 1} / ${readerList.length}`;
    $('readerBody').innerHTML = `
      <div class="reader-kicker">${c.role} · ${c.period} · ${c.stage}</div>
      <h2 id="readerTitle">${c.title}</h2>
      <div class="reader-tags">${c.tags.map((t) => `<span>${t}</span>`).join('')}</div>

      <div class="reader-sec">
        <h3>01 · 业务问题</h3>
        <p>${c.problem}</p>
      </div>

      <div class="reader-sec">
        <h3>02 · 关键判断与取舍</h3>
        <p class="reader-decision">${c.decision}</p>
      </div>

      <div class="reader-sec">
        <h3>03 · 我的具体工作</h3>
        <ul class="reader-list">${c.actions.map((a) => `<li>${a}</li>`).join('')}</ul>
      </div>

      <div class="reader-sec">
        <h3>04 · 交付与验证</h3>
        <ul class="reader-list">${c.outcomes.map((o) => `<li>${o}</li>`).join('')}</ul>
      </div>

      <div class="reader-truth">
        <strong>真实性与范围说明：</strong>${c.truth}
      </div>
    `;

    $('readerPrev').disabled = index === 0;
    $('readerNext').textContent = index === readerList.length - 1 ? '结束讲解 ✓' : '下一例 →';

    if (!dialog.open) dialog.showModal();
    $('readerBody').scrollTop = 0;
    $('readerClose').focus({ preventScroll: true });
  }

  function closeReader() {
    const dialog = $('readerDialog');
    if (dialog.open) dialog.close();
  }

  /* ========================================================================
     5. Events & Scroll Progress
     ======================================================================== */

  document.addEventListener('click', (e) => {
    const coBtn = e.target.closest('[data-company]');
    if (coBtn) {
      currentCompany = coBtn.dataset.company;
      renderCases();
      return;
    }

    const openBtn = e.target.closest('[data-open-case]');
    if (openBtn) {
      openCaseById(openBtn.dataset.openCase, openBtn);
      return;
    }

    const copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) {
      const val = copyBtn.dataset.copy;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(val).then(() => showToast(`已复制：${val}`));
      } else {
        showToast(val);
      }
    }
  });

  $('startTour').addEventListener('click', (e) => openReaderAt(0, e.currentTarget));
  $('readerClose').addEventListener('click', closeReader);
  $('readerPrev').addEventListener('click', () => openReaderAt(readerIndex - 1));
  $('readerNext').addEventListener('click', () => {
    if (readerIndex === readerList.length - 1) closeReader();
    else openReaderAt(readerIndex + 1);
  });

  $('readerDialog').addEventListener('close', () => {
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus({ preventScroll: true });
    }
  });

  $('readerDialog').addEventListener('click', (e) => {
    if (e.target === $('readerDialog')) closeReader();
  });

  document.addEventListener('keydown', (e) => {
    if (!$('readerDialog').open) return;
    if (e.key === 'ArrowLeft' && readerIndex > 0) {
      e.preventDefault();
      openReaderAt(readerIndex - 1);
    } else if (e.key === 'ArrowRight' && readerIndex < readerList.length - 1) {
      e.preventDefault();
      openReaderAt(readerIndex + 1);
    }
  });

  // Scroll Progress + Active Nav Highlight
  const sections = ['overview', 'experience', 'cases', 'method', 'lab', 'summary'];
  const navLinks = [...document.querySelectorAll('.nav-links a')];

  function onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    $('progressBar').style.transform = `scaleX(${ratio})`;

    let activeId = sections[0];
    for (const id of sections) {
      const sec = $(id);
      if (sec && sec.getBoundingClientRect().top <= 160) {
        activeId = id;
      }
    }
    navLinks.forEach((a) => {
      a.classList.toggle('is-active', a.getAttribute('href') === `#${activeId}`);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Init
  renderExperiences();
  renderCases();
  renderMethodAndLab();
  onScroll();
})();
