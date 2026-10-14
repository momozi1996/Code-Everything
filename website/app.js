/* Offline-first gallery. Source strings are rendered as text, never as HTML. */
(() => {
  'use strict';
  const data = window.OPUS_CATALOG;
  if (!data) { document.getElementById('hero-meta').textContent = '数据文件未载入。请确认 data/catalog.js 与页面放在同一文件夹。'; return; }
  const { cases, meta } = data;
  // StepPage serves assets with `immutable` caching for a year, so a URL that
  // never changes never updates. Key media URLs to the Feishu revision.
  const assetUrl = (p) => (!p || /^[a-z][a-z0-9+.-]*:/i.test(p)) ? p : `${p}${p.includes('?') ? '&' : '?'}v=${meta.revision}`;
  const $ = (id) => document.getElementById(id);
  const icons = {
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.5 5.4 22H2.2l8.3-9.5L.8 2h6.5l5 6.8L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 4h12v17l-6-4-6 4z"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 4 13 8-13 8z"/></svg>',
    image: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="4" y="4" width="24" height="24" rx="3"/><circle cx="12" cy="12" r="2"/><path d="m5 25 9-9 5 5 4-4 5 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m5 12 4 4 10-10"/></svg>'
  };
  const status = { full: '原始 Prompt', repository: '作者复现 / 题库', thread: '引用链原文', transcribed: '截图 / 视频转录', context: '需参考上下文', unavailable: '仅演示' };
  const storage = {
    read(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch { return fallback; } },
    write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
  };
  const storedFavorites=storage.read('opus55-favorites', []);
  let favorites = new Set((Array.isArray(storedFavorites)?storedFavorites:[]).filter(id => cases.some(c => c.id === id)));
  let state = { model: 'all', category: '全部', query: '', scope: 'prompt', sort: 'featured', saved: false, limit: 24, code2: null };
  let filtered = [], activeCase = null, dialogTrigger = null, toastTimer, searchTimer;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const initial = new URLSearchParams(location.search);
  if (meta.categories.includes(initial.get('category'))) state.category = initial.get('category');
  if (['prompt', 'all', 'independent', 'collection', 'demo', 'experience'].includes(initial.get('scope'))) state.scope = initial.get('scope');
  if (['featured','newest','oldest','number'].includes(initial.get('sort'))) state.sort = initial.get('sort');
  if (initial.get('code2')) state.code2 = initial.get('code2');
  if ((meta.models||[]).some(m=>m.id===initial.get('model'))) state.model=initial.get('model');
  if (initial.get('q')) state.query = initial.get('q');
  const searchStrings = new Map(cases.map(c => [c.id, [c.title, c.originalTitle, c.author, c.prompt, c.note, c.modelLabel, c.categories.join(' ')].filter(Boolean).join(' ').toLocaleLowerCase()]));

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }
  function icon(name) { const wrapper = el('span'); wrapper.innerHTML = icons[name]; wrapper.setAttribute('aria-hidden', 'true'); return wrapper; }
  function link(url, label, className) {
    const a = el('a', className, label);
    try { const parsed = new URL(url); if (!['http:', 'https:'].includes(parsed.protocol)) throw Error(); a.href = url; } catch { a.removeAttribute('href'); return a; }
    a.target = '_blank'; a.rel = 'noopener noreferrer'; return a;
  }
  function dateLabel(c, full = false) {
    if (!c.publishedAt) return '日期待核实';
    const date = new Date(c.publishedAt);
    if (isNaN(date)) return '日期待核实';
    const options = { timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit', ...(full ? {hour: '2-digit',minute: '2-digit',hour12: false} : {}) };
    return new Intl.DateTimeFormat('sv-SE', options).format(date).replaceAll('-', '.');
  }
  function toast(message) { $('toast').textContent = message; $('toast').classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2800); }
  async function copyPrompt(c, button) {
    if (!c.prompt) { toast('此案例未公开完整 Prompt，不能复制。'); return; }
    let copied = false;
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(c.prompt); copied = true; } } catch {}
    if (!copied) {
      const field = el('textarea'); field.value = c.prompt; field.readOnly = true;
      Object.assign(field.style, { position: 'fixed', top: '0', left: '-9999px', opacity: '0' });
      // A textarea inside an active modal remains focusable; outside is inert.
      const parent = $('case-dialog').open ? $('case-dialog') : document.body;
      parent.append(field); field.focus(); field.select(); field.setSelectionRange(0, c.prompt.length);
      try { copied = document.execCommand('copy'); } catch {} field.remove();
    }
    if (copied) {
      toast('已复制完整原始 Prompt · ' + c.prompt.length.toLocaleString() + ' 字符');
      if (button) { button.replaceChildren(icon('check'), document.createTextNode('已复制')); button.classList.add('copied'); button.focus({preventScroll: true}); setTimeout(() => { if (button.isConnected) { button.replaceChildren(icon('copy'), document.createTextNode('复制 Prompt')); button.classList.remove('copied'); } }, 1900); }
    } else {
      openCase(c.id, button);
      const pane = $('case-dialog').querySelector('.prompt-pane');
      const field = el('textarea', 'copy-fallback'); field.value = c.prompt; field.readOnly = true; field.setAttribute('aria-label', '手动复制提示词'); pane.replaceChildren(field); field.focus(); field.select();
      toast('浏览器限制了剪贴板。已选中原文，请按 Ctrl/Cmd + C。');
    }
  }
  function copyButton(c, className = '') {
    const b = el('button', 'copy-button ' + className);
    b.type = 'button'; b.dataset.copyId = c.id;
    b.append(icon('copy'), document.createTextNode(c.prompt ? '复制 Prompt' : '暂无公开 Prompt'));
    b.setAttribute('aria-label', c.prompt ? '复制提示词：' + c.title : '此案例暂无公开提示词');
    b.disabled = !c.prompt;
    b.addEventListener('click', () => copyPrompt(c, b)); return b;
  }
  function favoriteButton(c) {
    const b = el('button', 'bookmark' + (favorites.has(c.id) ? ' saved' : '')); b.dataset.favoriteId = c.id;
    b.append(icon('bookmark')); b.setAttribute('aria-label', (favorites.has(c.id) ? '取消收藏：' : '收藏：') + c.title); b.setAttribute('aria-pressed', String(favorites.has(c.id)));
    b.addEventListener('click', () => {
      if (favorites.has(c.id)) favorites.delete(c.id); else favorites.add(c.id);
      storage.write('opus55-favorites', [...favorites]); updateSaved();
      document.querySelectorAll('[data-favorite-id="' + c.id + '"]').forEach(node => { node.classList.toggle('saved', favorites.has(c.id)); node.setAttribute('aria-pressed', String(favorites.has(c.id))); node.setAttribute('aria-label', (favorites.has(c.id) ? '取消收藏：' : '收藏：') + c.title); });
      if (state.saved) render();
    }); return b;
  }
  function updateSaved() { $('saved-count').textContent = favorites.size; $('saved-nav').classList.toggle('active', state.saved); $('saved-nav').setAttribute('aria-pressed', String(state.saved)); }
  function placeholder(c) {
    const div = el('div', 'placeholder'); div.append(icon('image'), el('span', '', '暂无可下载的原始预览'), el('small', '', 'OPEN THE ORIGINAL SOURCE')); return div;
  }
  function renderCard(c, index) {
    const card = el('article', 'case-card'); card.dataset.caseId = c.id; card.style.animationDelay = Math.min(index % 24 * 12, 160) + 'ms';
    const preview = el('button', 'preview-button'+(c.containPreview?' contain-preview':'')); preview.type = 'button'; preview.setAttribute('aria-label', '查看案例：' + c.title);
    if (c.image) {
      const img = el('img'); img.src = assetUrl(c.image); img.alt = c.title + '，' + c.mediaCaption; img.loading = index < 8 ? 'eager' : 'lazy'; img.decoding = 'async';
      img.addEventListener('error', () => { img.remove(); preview.prepend(placeholder(c)); }, {once: true}); preview.append(img);
    } else preview.append(placeholder(c));
    preview.append(el('span', 'preview-shade'));
    let label = c.failed ? '失败测试' : c.collection ? '100 HTML 合辑' : status[c.promptStatus];
    preview.append(el('span', 'preview-label ' + (c.failed ? 'failure' : c.promptStatus === 'context' ? 'context' : ''), label));
    if (c.video) { const play = el('span', 'preview-play'); play.append(icon('play'), document.createTextNode('VIDEO')); preview.append(play); }
    const more = el('span', 'preview-open'); more.append(el('span', '', '查看案例 ↗')); preview.append(more);
    preview.addEventListener('click', () => openCase(c.id, preview));
    let hoverTimer, vid;
    if (c.video && !reducedMotion) {
      preview.addEventListener('pointerenter', (event) => {
        if (event.pointerType === 'touch') return;
        hoverTimer = setTimeout(() => {
          if (!vid) { vid = el('video'); vid.src = assetUrl(c.video); vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = 'none'; vid.setAttribute('aria-hidden','true'); preview.insertBefore(vid, preview.firstChild); vid.addEventListener('error', () => { preview.classList.remove('video-playing'); vid.remove(); vid = null; }, {once:true}); }
          vid.play().then(() => preview.classList.add('video-playing')).catch(() => {});
        }, 220);
      });
      preview.addEventListener('pointerleave', () => { clearTimeout(hoverTimer); if (vid) vid.pause(); preview.classList.remove('video-playing'); });
    }
    const modelLine=el('div','card-model');modelLine.append(el('span','model-badge '+(c.modelId==='opus-5.5'?'model-opus':'model-gpt'),c.modelLabel));if(c.relatedCaseIds?.length)modelLine.append(el('span','shared-prompt-label','同题 · '+(c.relatedCaseIds.length+1)+' 个结果'));
    const metaLine = el('div','card-meta'); metaLine.append(el('span','',c.categories.slice(0,2).join(' / ')));
    const time = el('time','',dateLabel(c)); if(c.publishedAt) time.dateTime=c.publishedAt; time.title=(c.dateLabel || '来源帖日期')+' · 北京时间'; metaLine.append(time);
    const titleLine = el('div','card-title-line'); const h3=el('h3','card-title'); const tb=el('button','',c.title); tb.addEventListener('click',()=>openCase(c.id,tb)); h3.append(tb); titleLine.append(h3,favoriteButton(c));
    const c2=el('div','card-code2'); (c.code2Tags||[]).forEach(t=>{const b=el('button','code2-tag',t.replace('code2','code2·'));b.type='button';b.title='按需求/证据关键词推断的代码产出标签（可点击筛选）';b.dataset.code2=t;b.addEventListener('click',()=>{state.code2=t;state.limit=24;render();window.scrollTo({top:0,behavior:'smooth'});});c2.append(b);});
    const author=el('div','card-author'); author.title=c.author; if(c.collection) author.append(el('span','collection-label','MiaAI-Lab 合辑'),document.createTextNode(' · X 转发来源')); else author.textContent=c.author;
    const actions=el('div','card-actions'); actions.append(copyButton(c));
    if(c.xUrl){const x=link(c.xUrl,'','card-x');x.append(icon('x'),document.createTextNode('原帖 ↗'));x.setAttribute('aria-label','查看原始 X 帖子：'+c.title);actions.append(x);} else actions.append(el('span','source-missing','X 来源待核实'));
    if(c.experienceUrl){const experience=link(c.experienceUrl,'打开体验 ↗','card-experience');experience.title=c.experienceCheck||'原作者提供的体验地址';actions.append(experience);}
    card.append(preview,modelLine,metaLine,titleLine,c2,author,actions); return card;
  }
  function matchesScope(c) { return state.scope==='prompt'?!!c.prompt : state.scope==='independent'?!!c.prompt&&!c.collection : state.scope==='collection'?c.collection : state.scope==='demo'?!c.prompt : state.scope==='experience'?!!c.experienceUrl : true; }
  function currentMatches(c,includeCategory=true) { return (state.model==='all'||c.modelId===state.model) && matchesScope(c) && (!state.saved||favorites.has(c.id)) && (!includeCategory||state.category==='全部'||c.categories.includes(state.category)) && (!state.code2||(c.code2Tags||[]).includes(state.code2)) && (!state.query||searchStrings.get(c.id).includes(state.query.toLocaleLowerCase().trim())); }
  function updateURL() { const params=new URLSearchParams();if(state.model!=='all')params.set('model',state.model);if(state.category!=='全部')params.set('category',state.category);if(state.scope!=='prompt')params.set('scope',state.scope);if(state.query)params.set('q',state.query);if(state.sort!=='featured')params.set('sort',state.sort);if(state.code2)params.set('code2',state.code2);if(activeCase)params.set('case',activeCase.id);try{history.replaceState(null,'',location.pathname+(params.size?'?'+params.toString():'')+location.hash);}catch{} }
  // Deliverable facet: what the agent produced as code (code2video / code23d / ...).
  // Tags are keyword-inferred per case; the chip row states that so nobody reads it as ground truth.
  function code2Filters() {
    let root = $('code2-filters');
    if (!root) { root = el('div', 'code2-filters'); root.id = 'code2-filters'; const anchor = $('model-filters'); if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(root, anchor.nextSibling); else return; }
    const counts = (OPUS_CATALOG.meta && OPUS_CATALOG.meta.code2TagCounts) || {};
    const names = Object.keys(counts);
    if (!names.length) return;
    root.replaceChildren(el('span', 'code2-filters-label', '代码产出'));
    const mk = (label, value) => { const b = el('button', 'code2-chip' + (state.code2 === value ? ' active' : ''), label); b.type = 'button'; b.dataset.code2 = value || ''; b.addEventListener('click', () => { state.code2 = value; state.limit = 24; render(); }); return b; };
    root.append(mk('全部', null));
    names.forEach(n => root.append(mk(n.replace('code2', 'code2·') + ' ' + counts[n], n)));
  }

  function categories() {
    $('categories').replaceChildren();
    for (const name of ['全部',...meta.categories]) {
      const count=cases.filter(c=>currentMatches(c,false)&&(name==='全部'||c.categories.includes(name))).length;
      const button=el('button','category-chip'+(state.category===name?' active':''));button.append(document.createTextNode(name),el('span','',count));button.dataset.category=name;button.setAttribute('aria-pressed',String(state.category===name));button.addEventListener('click',()=>{state.category=name;state.limit=24;render();});$('categories').append(button);
    }
  }
  function modelFilters(){
    const root=$('model-filters');root.replaceChildren();
    for(const model of [{id:'all',label:'全部模型'},...(meta.models||[])]){
      const count=cases.filter(c=>matchesScope(c)&&(model.id==='all'||c.modelId===model.id)&&(!state.saved||favorites.has(c.id))).length;
      const button=el('button','model-chip'+(state.model===model.id?' active':''));button.dataset.model=model.id;button.setAttribute('aria-pressed',String(state.model===model.id));button.append(document.createTextNode(model.label.replace('Claude ','')),el('span','',count));button.addEventListener('click',()=>{state.model=model.id;state.limit=24;render();});root.append(button);
    }
  }
  function columnCount(){const width=innerWidth;return width<=580?1:width<=850?2:width<=1200?(document.body.classList.contains('compact')?4:3):(document.body.classList.contains('compact')?5:4);}
  let lastColumnCount=columnCount();
  window.addEventListener('resize',()=>{const next=columnCount();if(next!==lastColumnCount){lastColumnCount=next;render();}});
  function render() {
    document.querySelectorAll('#case-grid video').forEach(v=>v.pause());
    filtered=cases.filter(c=>currentMatches(c));
    filtered.sort((a,b)=>{
      if(state.sort==='newest'||state.sort==='oldest'){
        if(!a.publishedAt)return b.publishedAt?1:0;if(!b.publishedAt)return -1;
        const diff=new Date(a.publishedAt)-new Date(b.publishedAt);return (state.sort==='newest'?-diff:diff)||a.rank-b.rank;
      }
      if(state.sort==='number'){const section=c=>c.id.startsWith('case-')?0:c.id.startsWith('work-')?1:2;return section(a)-section(b)||a.number-b.number;}
      return a.rank-b.rank;
    });
    const visible=filtered.slice(0,state.limit);const count=columnCount();const columns=Array.from({length:count},()=>el('div','masonry-column'));visible.forEach((c,i)=>columns[i%count].append(renderCard(c,i)));$('case-grid').style.setProperty('--columns',count);$('case-grid').replaceChildren(...columns);
    $('result-count').replaceChildren(document.createTextNode(state.saved?'我的收藏 · ':'浏览 '),el('b','',filtered.length+' 个案例'),document.createTextNode(state.category!=='全部'?' · '+state.category:''));
    $('selection-label').textContent=state.scope==='collection'?'同一合辑 · 非 100 条独立 X 帖':state.sort==='newest'?'按来源帖日期 · 北京时间':state.scope==='demo'?'没有公开 Prompt 的条目不提供复制':'';
    $('empty-state').hidden=filtered.length>0;$('load-more').hidden=state.limit>=filtered.length;$('load-progress').textContent=filtered.length?visible.length+' / '+filtered.length+' CASES':'';
    $('clear-filters').hidden=state.model==='all'&&state.category==='全部'&&!state.query&&state.scope==='prompt'&&!state.saved&&!state.code2;
    $('scope').value=state.scope;$('sort').value=state.sort;$('search').value=state.query;categories();code2Filters();modelFilters();updateSaved();updateURL();
  }
  function reset(){state={...state,model:'all',category:'全部',query:'',scope:'prompt',saved:false,limit:24,code2:null};render();}
  function openCase(id,trigger){
    const c=cases.find(c=>c.id===id);if(!c)return;activeCase=c;if(trigger)dialogTrigger=trigger;document.querySelectorAll('#case-grid video').forEach(v=>v.pause());
    const layout=el('div','detail-layout'),left=el('div','detail-visual'),right=el('div','detail-copy');
    const media=el('div','detail-media');
    if(c.video){const video=el('video');video.src=assetUrl(c.video);video.poster=assetUrl(c.image)||'';video.controls=true;video.playsInline=true;video.preload='metadata';video.muted=true;video.setAttribute('aria-label',c.title+'视频预览节选');video.addEventListener('loadedmetadata',()=>{const at=storage.read('opus55-play-'+c.id,0);if(at>0&&at<video.duration)video.currentTime=at;});video.addEventListener('timeupdate',()=>storage.write('opus55-play-'+c.id,video.currentTime));video.addEventListener('error',()=>{video.remove();if(c.image){const im=el('img');im.src=assetUrl(c.image);im.alt=c.title;media.append(im);}else media.append(placeholder(c));});media.append(video);}
    else if(c.image){const im=el('img');im.src=assetUrl(c.image);im.alt=c.title+'，'+c.mediaCaption;media.append(im);}else media.append(placeholder(c));
    const caption=el('div','media-caption');caption.append(el('span','',c.video?c.mediaCaption+' · 静音节选':c.mediaCaption),el('span','',c.collection?'合辑 #'+String(c.collectionIndex||c.number-26).padStart(3,'0'):c.sourceSection+' #'+c.number));
    const heading=el('div','detail-heading');const chips=el('div','detail-chips');chips.append(el('span','model-badge '+(c.modelId==='opus-5.5'?'model-opus':'model-gpt'),c.modelLabel));c.categories.forEach(t=>chips.append(el('span','',t)));heading.append(chips);const h2=el('h2','',c.title);h2.id='dialog-title';heading.append(h2);if(c.originalTitle!==c.title)heading.append(el('p','original-title',c.originalTitle));const auth=el('div','detail-author');auth.append(el('span','',c.author),el('span','',(c.dateLabel||'来源帖日期')+' · '+dateLabel(c,true)+' 北京时间'));heading.append(auth);
    const btns=el('div','detail-buttons');if(c.xUrl){const x=link(c.xUrl,'查看 X 原帖 ↗','button button-outline');btns.append(x);}if(c.demoUrl)btns.append(link(c.demoUrl,'打开效果 / 资料 ↗','button button-outline'));btns.append(favoriteButton(c));left.append(media,caption,heading,btns);
    if(c.relatedCaseIds?.length){const related=el('div','related-cases');related.append(el('span','','同一原始 Prompt · 其他模型 / 结果'));for(const id of c.relatedCaseIds){const other=cases.find(x=>x.id===id);if(!other)continue;const b=el('button','related-case',other.modelLabel+' ↗');b.addEventListener('click',()=>openCase(id));related.append(b);}left.append(related);}
    const tabs=el('div','detail-tabbar'),tabbuttons=el('div','detail-tabs');const promptTab=el('button','detail-tab active','Prompt 原文'),sourceTab=el('button','detail-tab','来源与条件');tabbuttons.append(promptTab,sourceTab);tabs.append(tabbuttons,el('span','prompt-length',c.prompt?c.prompt.length.toLocaleString()+' CHARS':'UNPUBLISHED'));
    const pane=el('div','prompt-pane');const pre=el('pre','',c.prompt||'此案例只有展示或任务概述，来源未公开完整提示词。\n\n为保证资料正确性，这里不根据成品反推或补写 Prompt。请通过“来源与条件”查看原帖。');pane.append(pre);
    const sources=el('div','source-pane');sources.hidden=true;sources.append(el('h3','','EVIDENCE & CONTEXT'),el('p','',c.note||'原文按来源保留。本次收录不是模型复跑。'),el('p','',c.evidence));
    if(c.sourceGroup)sources.append(el('p','','同源项目档案：'+c.sourceGroup+'。来源帖日期不代表每个项目当前版本的制作日期。'));
    if(c.collection)sources.append(el('p','','此卡来自 MiaAI-Lab 的 100 项 HTML 合辑。来源 X 链接是转发帖；卡片日期是该帖发布日期，不是独立作品创建日期。'));
    const allUrls=[...new Set([c.xUrl,...c.links,c.videoOriginalUrl].filter(Boolean))];allUrls.forEach(u=>sources.append(link(u,u,'source-link')));
    if(c.experienceCheck)sources.prepend(el('p','experience-note','体验检查 · '+c.experienceCheck));
    function switchTab(which){pane.hidden=which!=='prompt';sources.hidden=which==='prompt';promptTab.classList.toggle('active',which==='prompt');sourceTab.classList.toggle('active',which!=='prompt');}
    promptTab.addEventListener('click',()=>switchTab('prompt'));sourceTab.addEventListener('click',()=>switchTab('source'));
    right.append(tabs,pane,sources);
    if(c.promptStatus!=='full'||c.collection||c.failed){let notice=c.failed?'失败测试：有原始输入，不代表生成结果成功。':c.collection?'合辑原文已核对；复跑前请查看页面及输入条件。':c.promptStatus==='unavailable'?'没有 Prompt，不提供复制，避免将概述误当输入。':'该案例'+status[c.promptStatus]+'，复跑前请查看“来源与条件”。';right.append(el('div','context-notice',notice));}
    right.append(copyButton(c));const provenance=el('div','provenance-line');provenance.append(el('span','','原文保留 · 非改写提示词'),el('span','',c.promptHash?'SHA256 '+c.promptHash.slice(0,10):'DEMO ONLY'));right.append(provenance);layout.append(left,right);$('dialog-body').replaceChildren(layout);
    if(!$('case-dialog').open){$('case-dialog').showModal();document.documentElement.classList.add('freeze');}
    $('prev-case').disabled=filtered.length<2;$('next-case').disabled=filtered.length<2;updateURL();
  }
  function closeCase(){document.querySelectorAll('#case-dialog video').forEach(v=>v.pause());$('case-dialog').close();}
  $('case-dialog').addEventListener('close',()=>{activeCase=null;document.documentElement.classList.remove('freeze');updateURL();if(dialogTrigger?.isConnected)dialogTrigger.focus({preventScroll:true});});
  $('case-dialog').querySelector('.dialog-close').addEventListener('click',closeCase);
  function next(delta){if(!activeCase||!filtered.length)return;const pos=filtered.findIndex(c=>c.id===activeCase.id);openCase(filtered[(pos+delta+filtered.length)%filtered.length].id);}
  $('prev-case').addEventListener('click',()=>next(-1));$('next-case').addEventListener('click',()=>next(1));
  $('case-dialog').addEventListener('click',event=>{if(event.target===$('case-dialog')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)closeCase();}});
  const guide=$('guide-body');guide.append(el('p','',`这是一份人工整理的静态快照：${meta.total} 个案例，其中 ${meta.withPrompt} 条有 Prompt。其中 ${(meta.uniquePromptCount||meta.withPrompt)} 段文本去重后的 Prompt。同题不同模型各有结果卡，类别不是模型能力排名。`));
  const stats=el('div','guide-stats');for(const [num,label] of [[meta.withPrompt,'有 Prompt 的结果卡'],[meta.demos,'仅演示的案例'],[meta.collectionCount,'同源合辑条目']]){const d=el('div','guide-stat');d.append(el('b','',num),el('span','',label));stats.append(d);}guide.append(stats);
  for(const [title,body] of [
    ['一键复制的是原文','点击卡片的“复制 Prompt”会复制完整原文，不含卡片标题与说明。含参考图、项目文件或插件的案例，单独复制文字可能不能复现。'],
    ['模型与同题对比','模型筛选以这张卡对应的实际结果为准，不因原帖提到其他模型就多贴标签。相同原始 Prompt 的不同模型结果会相互关联；结果卡数量不等于独立提示词数量。未注明版本的 GPT-6 不自动归为 Astra。'],
    ['日期与来源','卡片日期按来源 X 帖子的发布时间，统一为北京时间。100 HTML 合辑显示转发帖日期；没有可靠日期时标注待核实，不从内容推测。'],
    ['预览与证据','预览图片来自原帖、作者合辑或真实页面截图。视频是本地静音节选，不是完整作品；查看原帖可播放源视频。没有可用媒体时明确提示，不借用其他案例的图。'],
    ['范围与版权','本站没有独立复跑这些 Prompt，也不保证穷尽 X。原作者、品牌和第三方素材的权利不因收录而改变。本文件夹用于你的本地查阅；对外商用或批量再发布前请核实各来源授权。'],
    ['如何继续更新','用 scripts/export_from_site.py 重新同步上游数据源；脚本会保留稳定案例 ID、按 X ID 核验日期及媒体，生成媒体来源清单。不会修改原始内容。']
  ]){guide.append(el('h3','',title),el('p','',body));}
  guide.append(el('p','',`数据版本 v${meta.revision} · 整理时间 ${meta.syncedAt.replace('T',' ').replace('+08:00','')} 北京时间`));
  document.querySelectorAll('[data-action="guide"]').forEach(b=>b.addEventListener('click',()=>{$('guide-dialog').showModal();document.documentElement.classList.add('freeze');}));document.querySelectorAll('.guide-close').forEach(b=>b.addEventListener('click',()=>$('guide-dialog').close()));$('guide-dialog').addEventListener('close',()=>document.documentElement.classList.remove('freeze'));
  $('hero-meta').replaceChildren();for(const [i,phrase] of [[0,(meta.uniquePromptCount||meta.withPrompt)+' 段不同 Prompt'],[1,meta.total+' 个案例'],[2,(meta.models||[]).length+' 个模型分区']]){if(i)$('hero-meta').append(el('i'));$('hero-meta').append(el('span','',phrase));}
  $('sync-footer').textContent=`数据快照 v${meta.revision} · ${meta.syncedAt.slice(0,10)} · 非 Anthropic / OpenAI 官方网站`;
  $('search').addEventListener('input',e=>{clearTimeout(searchTimer);const q=e.target.value;searchTimer=setTimeout(()=>{state.query=q;state.limit=24;render();},180);});$('scope').addEventListener('change',e=>{state.scope=e.target.value;state.limit=24;render();});$('sort').addEventListener('change',e=>{state.sort=e.target.value;render();});$('clear-filters').addEventListener('click',reset);$('empty-reset').addEventListener('click',reset);$('load-more').addEventListener('click',()=>{state.limit+=24;render();});
  $('saved-nav').addEventListener('click',()=>{state.saved=!state.saved;state.limit=24;render();window.scrollTo({top:$('library').offsetTop-20,behavior:reducedMotion?'instant':'smooth'});});
  $('density-button').addEventListener('click',()=>{document.body.classList.toggle('compact');storage.write('opus55-compact',document.body.classList.contains('compact'));lastColumnCount=columnCount();render();});if(storage.read('opus55-compact',false))document.body.classList.add('compact');
  $('random-button').addEventListener('click',e=>{const pool=cases.filter(c=>c.prompt&&!c.failed&&!c.collection&&(state.model==='all'||c.modelId===state.model));if(!pool.length){toast('当前模型没有可随机查看的 Prompt');return;}openCase(pool[Math.floor(Math.random()*pool.length)].id,e.currentTarget);});
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('case-dialog').open&&!$('guide-dialog').open){e.preventDefault();$('search').focus();}if($('case-dialog').open&&!['INPUT','TEXTAREA','VIDEO'].includes(document.activeElement.tagName)){if(e.key==='ArrowLeft')next(-1);if(e.key==='ArrowRight')next(1);}});
  window.addEventListener('popstate',()=>{const c=new URLSearchParams(location.search).get('case');if(c)openCase(c);else if($('case-dialog').open)closeCase();});
  render();const caseId=initial.get('case');if(caseId)openCase(caseId);
  // Public read-only diagnostics used by the integrity/UI tests.
  window.OPUS_APP={getState:()=>({...state}),getFiltered:()=>filtered.map(c=>c.id),openCase};
})();
