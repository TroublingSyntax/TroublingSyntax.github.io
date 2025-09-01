(() => {
  const overlay=document.createElement('div');
  overlay.id='lb-overlay';
  const content=document.createElement('div');
  content.className='lb-content';
  overlay.appendChild(content);
  document.body.appendChild(overlay);

  function openWith(node){
    content.innerHTML='';
    let el;
    if(node.tagName.toLowerCase()==='img'){
      el=new Image();
      el.src=node.currentSrc||node.src;
      el.alt=node.alt||'';
    }else if(node.tagName.toLowerCase()==='iframe'){
      el=document.createElement('iframe');
      el.src=node.src;
      el.setAttribute('frameborder','0');
      el.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
      el.setAttribute('allowfullscreen','');
    }
    if(!el)return;
    content.appendChild(el);
    overlay.classList.add('active');
    document.documentElement.style.overflow='hidden';
  }

  function close(){
    overlay.classList.remove('active');
    content.innerHTML='';
    document.documentElement.style.overflow='';
  }

  overlay.addEventListener('click',close);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});

  document.querySelectorAll('img').forEach(img=>{
    img.addEventListener('click',()=>openWith(img));
  });

  document.querySelectorAll('iframe').forEach(fr=>{
    const wrapper=document.createElement('div');
    wrapper.className='lb-has-iframe';
    fr.parentNode.insertBefore(wrapper,fr);
    wrapper.appendChild(fr);
    const cover=document.createElement('div');
    cover.className='lb-iframe-cover';
    wrapper.appendChild(cover);
    cover.addEventListener('click',()=>openWith(fr));
  });
})();