(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open);
  });}
  var box=document.getElementById('lightbox');
  if(!box||!box.showModal)return;
  var img=box.querySelector('img');
  function show(src,alt){img.src=src;img.alt=alt||'';box.showModal();}
  document.querySelectorAll('.masonry a.g').forEach(function(a){
    a.addEventListener('click',function(ev){ev.preventDefault();show(a.href,a.querySelector('img').alt);});
  });
  document.querySelectorAll('.rail .ph img').forEach(function(i){
    i.addEventListener('click',function(){show(i.src,i.alt);});
  });
  box.addEventListener('click',function(ev){if(ev.target===box||ev.target.className==='lb-close')box.close();});
})();
