/* Independent question library. Never execute source prompts or source HTML. */
(() => {
  'use strict';
  const data = window.WORLD_PROBLEMS;
  if (!data) { document.getElementById('problem-results').textContent = '题库未载入，请确认 data/problems.js 存在。'; return; }
  const { meta, problems } = data, byId = new Map(problems.map(p => [p.id, p]));
  const $ = id => document.getElementById(id), mathErrors = [];
  const e = (tag, className, text) => { const n = document.createElement(tag); if (className) n.className = className; if (text !== undefined) n.textContent = text; return n; };
  const copyIcon = () => { const s = document.createElementNS('http://www.w3.org/2000/svg','svg'); s.setAttribute('viewBox','0 0 24 24'); s.setAttribute('fill','none'); s.setAttribute('stroke','currentColor'); s.setAttribute('stroke-width','1.5'); s.setAttribute('aria-hidden','true'); s.innerHTML='<rect x="8" y="8" width="12" height="13" rx="2"/><path d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/>'; return s; };
  function link(url, text, className) { const a = e('a',className,text); try { const u = new URL(url); if (!['http:','https:'].includes(u.protocol)) throw Error(); a.href = u.href; a.target='_blank'; a.rel='noopener noreferrer'; } catch {} return a; }
  const storage = { read() { try { const v = JSON.parse(localStorage.getItem('frontier-problem-favorites') || '[]'); return Array.isArray(v) ? v.filter(id=>byId.has(id)) : []; } catch { return []; } }, write() { try { localStorage.setItem('frontier-problem-favorites',JSON.stringify([...favorites])); } catch {} } };
  const favorites = new Set(storage.read()), params = new URLSearchParams(location.search);
  let state = { category: meta.categories.some(c=>c.name===params.get('category')) ? params.get('category') : '全部', scope: params.get('scope')==='millennium' ? 'millennium' : 'all', query: params.get('q') || '', saved: false, limit: 24 };
  let filtered = [], active = null, trigger = null, toastTimer, searchTimer;
  const searchText = new Map(problems.map(p=>[p.id,[p.id,p.title,p.category,p.originalQuestion,p.prompt,p.author,p.difficulty].join(' ').toLocaleLowerCase()]));
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function math(target, latex, displayMode = false) {
    if (!window.katex) { target.textContent=latex; return; }
    try { window.katex.render(latex,target,{displayMode,throwOnError:true,trust:false,strict:'ignore',output:'htmlAndMathml',maxExpand:1000}); }
    catch (err) { target.textContent=latex; mathErrors.push({latex,error:String(err)}); target.title='源公式（LaTeX）'; }
  }
  function renderBlocks(target, blocks) {
    for (const b of blocks) {
      const p = e('div', b.displayMath?'problem-math-block':'problem-text-block');
      for (const part of b.parts) { if (part.type==='math') { const span=e('span'); math(span,part.text,b.displayMath); p.append(span); } else p.append(document.createTextNode(part.text)); }
      target.append(p);
    }
  }
  function toast(text) { $('problem-toast').textContent=text; $('problem-toast').classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('problem-toast').classList.remove('show'),2500); }
  async function copy(p, button) {
    // Nothing else is appended: exact prompt cell + one empty line + original question cell.
    const text=p.copyText; let ok=false;
    try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); ok=true; } } catch {}
    if (!ok) {
      const field=e('textarea'); field.value=text; field.readOnly=true;
      Object.assign(field.style,{position:'fixed',left:'-9999px',top:'0',opacity:'0'});
      ($('problem-dialog').open?$('problem-dialog'):document.body).append(field); field.focus(); field.select(); field.setSelectionRange(0,text.length);
      try { ok=document.execCommand('copy'); } catch {} field.remove();
    }
    if (ok) { toast('已复制 Prompt + 原始题目 · '+text.length.toLocaleString()+' 字符'); if (button?.isConnected) { button.replaceChildren(copyIcon(),document.createTextNode('已复制两列完整内容')); setTimeout(()=>{if(button.isConnected)button.replaceChildren(copyIcon(),document.createTextNode('复制 Prompt + 原始题目'));},1700); } }
    else { open(p.id,button); selectTab('combined'); const field=e('textarea','problem-copy-fallback'); field.value=text; field.readOnly=true; field.setAttribute('aria-label','手动复制 Prompt 与原始题目'); $('problem-pane').replaceChildren(e('p','problem-tab-note','浏览器限制剪贴板。原文已选中，请按 Ctrl/Cmd + C。'),field); field.focus(); field.select(); }
  }
  function copyButton(p) { const b=e('button','problem-copy'); b.type='button'; b.dataset.problemCopy=p.id; b.append(copyIcon(),document.createTextNode('复制 Prompt + 原始题目')); b.setAttribute('aria-label','复制 '+p.title+' 的 Prompt 与原始题目'); b.addEventListener('click',()=>copy(p,b)); return b; }
  function saveButton(p) { const b=e('button','problem-bookmark',favorites.has(p.id)?'◆':'◇'); b.type='button'; b.dataset.problemFavorite=p.id; b.setAttribute('aria-label',(favorites.has(p.id)?'取消收藏':'收藏')+p.title); b.setAttribute('aria-pressed',String(favorites.has(p.id))); b.addEventListener('click',()=>{if(favorites.has(p.id))favorites.delete(p.id);else favorites.add(p.id);storage.write();document.querySelectorAll('[data-problem-favorite="'+p.id+'"]').forEach(el=>{el.textContent=favorites.has(p.id)?'◆':'◇';el.setAttribute('aria-pressed',String(favorites.has(p.id)));el.setAttribute('aria-label',(favorites.has(p.id)?'取消收藏':'收藏')+p.title);});$('problem-saved-count').textContent=favorites.size;if(state.saved)render();});return b; }
  function card(p) {
    const article=e('article','problem-card');article.dataset.problemId=p.id;
    const top=e('div','problem-card-top');top.append(e('span','problem-id',p.id),e('span',p.isMillennium?'problem-classification':'problem-category-label',p.isMillennium?'CMI 千禧年题':p.category));
    const h=e('h3','problem-card-title'+(p.title.length>21?' long-title':'')),title=e('button','',p.title);title.type='button';title.addEventListener('click',()=>open(p.id,title));h.append(title);
    const questionLines=p.originalQuestion.split('\n');const excerpt=e('p','problem-excerpt',(questionLines.length>1?questionLines.slice(1).join(' '):p.originalQuestion));
    const panel=e('div','problem-card-formula');const formula=p.questionBlocks.flatMap(b=>b.parts).find(s=>s.type==='math');
    if(formula)math(panel,formula.text,false);else{const note=e('div','problem-research-note');note.append(e('small','','SOURCE STATUS / 来源表标注'),e('span','',p.humanSolvability));panel.append(note);}
    const detail=e('div','problem-card-metadata');detail.append(e('span','',p.difficulty),saveButton(p));
    const actions=e('div','problem-card-actions'),view=e('button','problem-view','查看题目 ↗');view.type='button';view.addEventListener('click',()=>open(p.id,view));actions.append(copyButton(p),view);article.append(top,h,excerpt,panel,detail,actions);return article;
  }
  function matches(p,ignoreCategory=false) { return (ignoreCategory||state.category==='全部'||p.category===state.category)&&(state.scope==='all'||p.isMillennium)&&(!state.saved||favorites.has(p.id))&&(!state.query||searchText.get(p.id).includes(state.query.trim().toLocaleLowerCase())); }
  function updateURL() { const q=new URLSearchParams();if(state.category!=='全部')q.set('category',state.category);if(state.scope!=='all')q.set('scope',state.scope);if(state.query)q.set('q',state.query);if(active)q.set('problem',active.id);try{history.replaceState(null,'',location.pathname+(q.size?'?'+q.toString():'')+location.hash);}catch{} }
  function render() {
    filtered=problems.filter(p=>matches(p));$('problem-grid').replaceChildren(...filtered.slice(0,state.limit).map(card));
    $('problem-categories').replaceChildren();for(const name of ['全部',...meta.categories.map(c=>c.name)]){const count=problems.filter(p=>matches(p,true)&&(name==='全部'||p.category===name)).length;const b=e('button','category-chip'+(state.category===name?' active':''));b.type='button';b.dataset.problemCategory=name;b.setAttribute('aria-pressed',String(state.category===name));b.append(document.createTextNode(name),e('span','',count));b.addEventListener('click',()=>{state.category=name;state.limit=24;render();});$('problem-categories').append(b);}
    $('problem-results').replaceChildren(document.createTextNode(state.saved?'我的收藏 · ':'浏览 '),e('strong','',filtered.length+' 道题目'),document.createTextNode(state.category==='全部'?'':' · '+state.category));
    $('problem-search').value=state.query;$('problem-scope').value=state.scope;$('problem-saved').setAttribute('aria-pressed',String(state.saved));$('problem-saved-count').textContent=favorites.size;
    $('problem-empty').hidden=filtered.length>0;$('problem-more').hidden=state.limit>=filtered.length;$('problem-progress').textContent=filtered.length?Math.min(state.limit,filtered.length)+' / '+filtered.length+' QUESTIONS':'';
    $('problem-reset').hidden=state.category==='全部'&&state.scope==='all'&&!state.query&&!state.saved;updateURL();
  }
  function reset() { state={category:'全部',scope:'all',query:'',saved:false,limit:24};render(); }
  function section(target,label,text) { const group=e('section','problem-eval-group');group.append(e('h3','',label),e('p','',text));target.append(group); }
  function selectTab(key) {
    if(!active)return;const p=active,pane=$('problem-pane');pane.replaceChildren();pane.dataset.tab=key;pane.setAttribute('aria-labelledby','problem-tab-'+key);
    document.querySelectorAll('.problem-tab').forEach(t=>{t.setAttribute('aria-selected',String(t.dataset.problemTab===key));t.tabIndex=t.dataset.problemTab===key?0:-1;});
    if(key==='combined'){pane.append(e('p','problem-tab-note','下方就是剪贴板全文：Prompt 在前，空一行，再接原始题目。公式复制为原始 LaTeX 文本。'),e('pre','problem-combined-text',p.copyText));}
    if(key==='question'){pane.append(e('h3','','原始题目 · 来源表完整题述'));renderBlocks(pane,p.questionBlocks);}
    if(key==='prompt'){pane.append(e('h3','','Prompt · 来源表原文'));renderBlocks(pane,p.promptBlocks);pane.append(e('p','problem-tab-note','复制按钮始终复制两列：Prompt + 原始题目，与当前选中的标签无关。'));}
    if(key==='evaluation'){section(pane,'题目难度（来源表）',p.difficulty);section(pane,'是否属于千禧年／世界难题（来源表）',p.verification);section(pane,'是否人类可解（来源表）',p.humanSolvability);section(pane,'Eval 难度',p.evalDifficulty);section(pane,'可能的评测方案',p.evaluation);section(pane,'GT 如何标注和验证',p.groundTruth);section(pane,'OpenAI 是否已经攻克（来源表说法）',p.openAIStatus);pane.prepend(e('p','problem-tab-note','以下是来源表的状态与评测说明，不是本站作答、认证或模型成绩。'));}
    if(key==='sources'){section(pane,'出题人 / 提出者',p.author);section(pane,'来源说明（表中原文）',p.sourceText);for(const source of p.sources){pane.append(e('p','problem-external-label',source.label),link(source.url,source.url,'problem-external'));}pane.append(e('p','problem-tab-note','数据快照 v'+meta.revision+' · '+meta.syncedAt.replace('T',' ')+'。仅依据上游整理数据导入，未独立核验每项最新文献或科学状态。'));}
    pane.scrollTop=0;
  }
  function open(id,from) {
    const p=byId.get(id);if(!p)return;active=p;if(from)trigger=from;
    const layout=e('div','problem-dialog-layout'),side=e('aside','problem-dialog-sidebar'),main=e('div','problem-dialog-main');
    side.append(e('span','problem-id',p.id));const h=e('h2','problem-dialog-heading',p.title);h.id='problem-dialog-title';side.append(h);const tags=e('div','problem-dialog-tags');tags.append(e('span','problem-category-label',p.category));if(p.isMillennium)tags.append(e('span','problem-classification','CMI 千禧年题'));tags.append(saveButton(p));side.append(tags);
    const dl=e('dl','problem-sidebar-list');for(const [label,value] of [['题目难度',p.difficulty],['Eval 难度',p.evalDifficulty],['出题人 / 提出者',p.author]]){dl.append(e('dt','',label),e('dd','',value));}side.append(dl,e('p','problem-sidebar-warning','这是一道研究问题，不是已攻克记录。来源表中的评价与GT边界，均在右侧完整保留。'));
    const tabs=e('div','problem-tabs');tabs.setAttribute('role','tablist');tabs.setAttribute('aria-label','题目详情内容');
    for(const [key,label] of [['combined','复制全文'],['question','原始题目'],['prompt','Prompt'],['evaluation','评测与 GT'],['sources','来源']]){const b=e('button','problem-tab',label);b.type='button';b.dataset.problemTab=key;b.id='problem-tab-'+key;b.setAttribute('role','tab');b.setAttribute('aria-controls','problem-pane');b.addEventListener('click',()=>selectTab(key));b.addEventListener('keydown',ev=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(ev.key))return;ev.preventDefault();const all=[...tabs.children];const index=all.indexOf(b);const next=ev.key==='Home'?0:ev.key==='End'?all.length-1:(index+(ev.key==='ArrowRight'?1:-1)+all.length)%all.length;all[next].focus();selectTab(all[next].dataset.problemTab);});tabs.append(b);}
    const pane=e('div','problem-pane');pane.id='problem-pane';pane.setAttribute('role','tabpanel');pane.tabIndex=0;
    const footer=e('div','problem-copy-contract');footer.append(e('p','','两列原文完整拼接 · Prompt 在前，原始题目在后'),copyButton(p));const hashes=e('div','problem-copy-hash');hashes.append(e('span','',p.copyText.length.toLocaleString()+' CHARS'),e('span','','SHA256 '+p.copyHash.slice(0,12)));footer.append(hashes);main.append(tabs,pane,footer);layout.append(side,main);$('problem-dialog-content').replaceChildren(layout);selectTab('combined');
    $('problem-prev').disabled=filtered.length<2;$('problem-next').disabled=filtered.length<2;if(!$('problem-dialog').open){$('problem-dialog').showModal();document.documentElement.classList.add('freeze');}updateURL();
  }
  function close() { $('problem-dialog').close(); }
  $('problem-dialog').addEventListener('close',()=>{if($('problem-dialog').open)return;active=null;document.documentElement.classList.remove('freeze');updateURL();if(trigger?.isConnected)trigger.focus({preventScroll:true});});$('problem-close').addEventListener('click',close);
  function next(delta){if(!active||!filtered.length)return;const pos=filtered.findIndex(p=>p.id===active.id);open(filtered[(pos+delta+filtered.length)%filtered.length].id);}
  $('problem-prev').addEventListener('click',()=>next(-1));$('problem-next').addEventListener('click',()=>next(1));$('problem-dialog').addEventListener('click',ev=>{if(ev.target!==$('problem-dialog'))return;const r=ev.target.getBoundingClientRect();if(ev.clientX<r.left||ev.clientX>r.right||ev.clientY<r.top||ev.clientY>r.bottom)close();});
  $('problem-search').addEventListener('input',ev=>{clearTimeout(searchTimer);const q=ev.target.value;searchTimer=setTimeout(()=>{state.query=q;state.limit=24;render();},140);});$('problem-scope').addEventListener('change',ev=>{state.scope=ev.target.value;state.limit=24;render();});$('problem-saved').addEventListener('click',()=>{state.saved=!state.saved;state.limit=24;render();});$('problem-reset').addEventListener('click',reset);$('problem-empty-reset').addEventListener('click',reset);$('problem-more').addEventListener('click',()=>{state.limit+=24;render();});$('problem-how').addEventListener('click',()=>$('problem-guide').scrollIntoView({behavior:reduced?'instant':'smooth'}));
  document.addEventListener('keydown',ev=>{if(ev.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('problem-dialog').open){ev.preventDefault();$('problem-search').focus();}});
  window.addEventListener('popstate',()=>{const p=new URLSearchParams(location.search);state.category=meta.categories.some(c=>c.name===p.get('category'))?p.get('category'):'全部';state.scope=p.get('scope')==='millennium'?'millennium':'all';state.query=p.get('q')||'';const id=p.get('problem');render();if(byId.has(id))open(id);else if($('problem-dialog').open)close();});
  
  for(const [value,label] of [[meta.total,'道完整题目'],[meta.categories.length,'个学科'],[meta.millenniumCount,'道 CMI 原题']]){const s=e('div','problem-stat');s.append(e('b','',value),e('span','',label));$('problem-stats').append(s);}
  $('problem-sync-footer').textContent='题库快照 v'+meta.revision+' · '+meta.syncedAt.slice(0,10)+' · 来源快照，非模型解答';
  render();if(byId.has(params.get('problem')))open(params.get('problem'));
  window.WORLD_PROBLEM_APP={openProblem:open,getFiltered:()=>filtered.map(p=>p.id),getState:()=>({...state}),mathErrors};
})();
