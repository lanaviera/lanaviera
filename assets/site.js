(function(){
  // mobile menu
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',open);
  });}

  // horizontal sliders
  document.querySelectorAll('.slider').forEach(function(s){
    var track=s.querySelector('.sl-track');
    function go(dir){track.scrollBy({left:dir*track.clientWidth*0.8,behavior:'smooth'});}
    s.querySelector('.sl-prev').addEventListener('click',function(){go(-1);});
    s.querySelector('.sl-next').addEventListener('click',function(){go(1);});
  });

  // slideshows (Visitanos)
  document.querySelectorAll('.show').forEach(function(s){
    var imgs=s.querySelectorAll('.show-frame img'),count=s.querySelector('.sh-count'),i=0;
    function set(n){imgs[i].classList.remove('on');i=(n+imgs.length)%imgs.length;imgs[i].classList.add('on');
      if(imgs[i].loading==='lazy')imgs[i].loading='eager';count.textContent=(i+1)+'/'+imgs.length;}
    s.querySelector('.sh-prev').addEventListener('click',function(){set(i-1);});
    s.querySelector('.sh-next').addEventListener('click',function(){set(i+1);});
    var x0=null;
    s.addEventListener('touchstart',function(e){x0=e.touches[0].clientX;},{passive:true});
    s.addEventListener('touchend',function(e){if(x0===null)return;var dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>40)set(dx<0?i+1:i-1);x0=null;});
  });

  // lightbox
  var box=document.getElementById('lightbox');
  if(!box||!box.showModal)return;
  var img=box.querySelector('img');
  function show(src,alt){img.src=src;img.alt=alt||'';box.showModal();}
  document.querySelectorAll('.slider .slide:not([data-external])').forEach(function(a){
    a.addEventListener('click',function(ev){ev.preventDefault();show(a.href,a.querySelector('img').alt);});
  });
  document.querySelectorAll('.show-frame img').forEach(function(im){
    im.addEventListener('click',function(){show(im.src,im.alt);});
  });
  box.addEventListener('click',function(ev){if(ev.target===box||ev.target.className==='lb-close')box.close();});
})();
