'use strict';
const doc=DOCUMENTS[new URLSearchParams(location.search).get('doc')];
const el=id=>document.getElementById(id);
let page=0,zoom=100,textMode=false;
function show(){
 const data=doc.pages[page];el('page-image').src=data.image;el('page-image').alt=`${doc.title}, page ${page+1} of ${doc.pages.length}`;
 el('page-text').textContent=data.text.trim()||'This page consists of scanned text, imagery, or a map. Use the page image to view its content.';
 el('page-number').value=page+1;el('previous').disabled=page===0;el('next').disabled=page===doc.pages.length-1;
 el('status').textContent=`Page ${page+1} of ${doc.pages.length}`;
}
function setZoom(value){zoom=Math.max(50,Math.min(250,value));el('page-container').style.width=zoom+'%';el('page-container').style.maxWidth=zoom===100?'1100px':'none';el('zoom-level').textContent=zoom+'%';}
if(!doc){el('error').hidden=false;el('error').textContent='Document not found. Return to the portfolio and choose a project material.';document.querySelector('.controls').hidden=true;}else{
 document.title=doc.title+' · Document reader';el('document-title').textContent=doc.title;el('page-total').textContent='of '+doc.pages.length;el('page-number').max=doc.pages.length;el('pdf-link').href=encodeURI(doc.pdf);el('original-link').href=encodeURI(doc.original);
 el('previous').addEventListener('click',()=>{if(page>0){page--;show();}});el('next').addEventListener('click',()=>{if(page<doc.pages.length-1){page++;show();}});
 el('page-number').addEventListener('change',()=>{page=Math.max(0,Math.min(doc.pages.length-1,(parseInt(el('page-number').value,10)||1)-1));show();});
 el('zoom-in').addEventListener('click',()=>setZoom(zoom+25));el('zoom-out').addEventListener('click',()=>setZoom(zoom-25));el('fit').addEventListener('click',()=>setZoom(100));
 el('text-toggle').addEventListener('click',()=>{textMode=!textMode;el('page-image').hidden=textMode;el('page-text').hidden=!textMode;el('text-toggle').setAttribute('aria-pressed',String(textMode));el('text-toggle').textContent=textMode?'View page':'Read text';});
 document.addEventListener('keydown',e=>{if(['INPUT','BUTTON','A'].includes(e.target.tagName))return;if(e.key==='ArrowRight'&&page<doc.pages.length-1){page++;show();}if(e.key==='ArrowLeft'&&page>0){page--;show();}});show();
}
