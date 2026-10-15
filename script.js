'use strict';
const categories=['All projects','Health & services','Cities & mobility','Cartography','Imagery & environment','Research','Automation'];
let active='All projects';
const grid=document.querySelector('#grid'), search=document.querySelector('#search'), dialog=document.querySelector('#detail');
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.querySelector('#total').textContent=PROJECTS.length;
const filters=document.querySelector('.filters');
categories.forEach(category=>{const button=document.createElement('button');button.textContent=category;button.setAttribute('aria-pressed',String(category===active));button.addEventListener('click',()=>{active=category;for(const b of filters.children)b.setAttribute('aria-pressed',String(b===button));render();});filters.append(button);});
function render(){
 const term=search.value.trim().toLowerCase();
 const matches=PROJECTS.map((p,i)=>({...p,i})).filter(p=>(active==='All projects'||p.category===active)&&[p.title,p.summary,p.method,p.year,p.category].join(' ').toLowerCase().includes(term));
 // Show the six featured examples first, then preserve the portfolio's thematic sequence.
 matches.sort((a,b)=>Number(b.featured)-Number(a.featured));
 grid.innerHTML=matches.map(p=>`<article class="card"><div class="card-meta"><span class="category">${escapeHTML(p.category)}</span><span>${escapeHTML(p.year)}</span></div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p><div class="card-bottom"><span>${p.links.length?`${p.links.length} ${p.links.length===1?'material':'materials'}`:'Professional project summary'}</span><button class="details" data-index="${p.i}" aria-label="View ${escapeHTML(p.title)} details">Explore project</button></div></article>`).join('');
 document.querySelector('#result-count').textContent=`${matches.length} of ${PROJECTS.length} projects${active==='All projects'?'':' · '+active}`;
 document.querySelector('#empty').hidden=matches.length>0;
}
search.addEventListener('input',render);
document.querySelector('#reset').addEventListener('click',()=>{search.value='';filters.firstElementChild.click();search.focus();});
grid.addEventListener('click',event=>{const button=event.target.closest('[data-index]');if(!button)return;const p=PROJECTS[Number(button.dataset.index)];
 const video=p.links.find(l=>l.url.endsWith('.mp4'));
 const readers=p.links.filter(l=>l.reader||l.url.endsWith('.htm'));
 const first=readers[0];
 document.querySelector('#detail-content').innerHTML=`<p class="detail-meta">${escapeHTML(p.category)} · ${escapeHTML(p.year)}</p><h2 id="detail-title">${escapeHTML(p.title)}</h2><p>${escapeHTML(p.summary)}</p><details class="approach"><summary>Approach & methods</summary><p>${escapeHTML(p.method)}</p></details>${video?`<video controls preload="metadata" src="${encodeURI(video.url)}"></video>`:''}${readers.length?`<div class="reader-tabs" role="group" aria-label="Choose project material">${readers.map((l,i)=>`<button data-reader="${escapeHTML(l.reader||l.url)}" aria-pressed="${i===0}">${readers.length>1?`Material ${i+1} · `:''}${escapeHTML(l.label)}</button>`).join('')}</div><iframe id="inline-reader" src="${encodeURI(first.reader||first.url)}" title="Read ${escapeHTML(p.title)}" class="inline-reader"></iframe><a id="reader-new-tab" class="reader-new-tab" href="${encodeURI(first.reader||first.url)}" target="_blank" rel="noopener">Open reader in a new tab ↗</a>`:!video?'<p class="source-note">This project is described in the submitted Work GIS Portfolio spreadsheet. A project map or report was not included in the archive.</p>':''}<p class="source-note">${p.year==='Professional'||p.category==='Health & services'||p.category==='Automation'?'Summary based on the submitted professional work inventory.':'Academic analyses reflect their original study dates and datasets.'}</p>`;
 dialog.classList.toggle('with-reader',readers.length>0);dialog.showModal();
});
document.querySelector('#detail-content').addEventListener('click',event=>{const button=event.target.closest('[data-reader]');if(!button)return;const url=encodeURI(button.dataset.reader);document.querySelector('#inline-reader').src=url;document.querySelector('#reader-new-tab').href=url;for(const b of document.querySelectorAll('[data-reader]'))b.setAttribute('aria-pressed',String(b===button));});
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{const video=dialog.querySelector('video');if(video)video.pause();});
render();
