const menu=document.querySelector('#menu');const nav=document.querySelector('#navlinks');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b===btn));document.querySelectorAll('.work-card').forEach(card=>{card.hidden=btn.dataset.filter!=='all'&&card.dataset.category!==btn.dataset.filter})}));const dialog=document.querySelector('#lightbox');document.querySelectorAll('.work-card').forEach(card=>{const workImage=card.querySelector('.work-image');if(!workImage)return;workImage.addEventListener('click',()=>{const src=card.dataset.src;const media=document.querySelector('#modal-media');media.replaceChildren();if(src){const element=document.createElement(/\.(mp4|webm)$/i.test(src)?'video':'img');element.src=src;if(element.tagName==='VIDEO'){element.controls=true;element.autoplay=true}element.alt=card.dataset.title;media.append(element)}else{const message=document.createElement('p');message.textContent='ここに作品画像や動画を追加できます。';media.append(message)}dialog.showModal()})});document.querySelector('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

/* Cycle through the finished AI visual and its two supporting images on click. */
(()=>{const button=document.querySelector('.ai-image-next');const img=document.querySelector('#ai-image-current');const counter=document.querySelector('#ai-image-count');const caption=document.querySelector('#ai-image-caption');if(!button||!img)return;const slides=[{src:'assets/107-2.png',alt:'Kate Spade風のAIファッション広告作品',caption:'完成作品'},{src:'assets/model-sheet.png',alt:'人物の表情・ポーズ・ディテールをまとめたモデルシート',caption:'モデルシート'},{src:'assets/ai-prompt.png',alt:'AI画像制作の指示内容のスクリーンショット',caption:'制作指示'}];let current=0;const card=button.closest('.ai-image-card');const advance=()=>{current=(current+1)%slides.length;const slide=slides[current];img.src=slide.src;img.alt=slide.alt;counter.textContent=String(current+1).padStart(2,'0')+' / 03';caption.textContent=slide.caption;card.classList.toggle('is-model-sheet',current===1);card.classList.toggle('is-prompt',current===2);button.setAttribute('aria-label','次のAI画像を表示（現在：'+slide.caption+'）');};button.addEventListener('click',advance)})();

/* Sparkle at changing locations, never the same star twice in succession. */
(()=>{const stars=Array.from(document.querySelectorAll('.hero .hero-sparkle')).filter(el=>getComputedStyle(el).display!=='none');if(!stars.length||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;let previous=-1;let stopped=false;const choose=()=>{if(stopped)return;const available=stars.filter((el,i)=>i!==previous&&getComputedStyle(el).display!=='none');if(!available.length)return;const star=available[Math.floor(Math.random()*available.length)];previous=stars.indexOf(star);star.classList.remove('is-twinkling');void star.offsetWidth;star.classList.add('is-twinkling');setTimeout(()=>star.classList.remove('is-twinkling'),720);};choose();const timer=setInterval(()=>{if(!document.hidden)choose()},1050);window.addEventListener('pagehide',()=>{stopped=true;clearInterval(timer)},{once:true})})();

/* Delayed hover preview keeps the initial Tokyo image easy to open. */
(()=>{
 const modal=document.querySelector('#lightbox');
 const media=document.querySelector('#modal-media');
 const next=document.querySelector('#lightbox-next');
 let slides=null,index=0;
 const showSlide=()=>{
  if(!slides)return;
  const slide=slides[index];
  const img=document.createElement('img');
  img.src=slide.currentSrc||slide.src;
  img.alt=slide.alt;
  img.decoding='async';
  media.replaceChildren(img);
 };
 const openSlides=(images,initial)=>{
  slides=images;index=initial;showSlide();
  next.hidden=images.length<2;
  modal.showModal();
 };
 next.addEventListener('click',()=>{if(!slides)return;index=(index+1)%slides.length;showSlide()});
 modal.addEventListener('close',()=>{slides=null;next.hidden=true});
 const setups=[
  {selector:'.ai-neon-stack',counter:'.ai-neon-counter',caption:'.ai-image-caption',first:'ネオンの街並み',second:'青いネオンの飲食店'},
  {selector:'.ai-travel-stack',counter:'.ai-travel-counter',caption:'.ai-travel-caption',first:'TOKYO',second:'TONAMI'}
 ];
 setups.forEach(({selector,counter,caption,first,second})=>{
  const stack=document.querySelector(selector);
  if(!stack)return;
  const card=stack.closest('.ai-image-card');
  const count=card.querySelector(counter);
  const note=card.querySelector(caption);
  const images=[stack.querySelector('.ai-travel-front, .ai-neon-front'),stack.querySelector('.ai-travel-back, .ai-neon-back')];
  let swapped=false,hoverTimer=null;
  const setSwapped=(value)=>{
   swapped=value;stack.classList.toggle('is-swapped',swapped);
   if(count)count.textContent=swapped?'02 / 02':'01 / 02';
   if(note)note.textContent=(swapped?second:first)+' · マウスを重ねると画像が切り替わります';
   stack.setAttribute('aria-label','表示中の'+(swapped?second:first)+'の画像を拡大して見る');
  };
  stack.addEventListener('pointerenter',e=>{
   if(e.pointerType!=='mouse'&&e.pointerType!=='pen')return;
   clearTimeout(hoverTimer);
   hoverTimer=setTimeout(()=>setSwapped(true),1300);
  });
  stack.addEventListener('pointerleave',e=>{
   if(e.pointerType!=='mouse'&&e.pointerType!=='pen')return;
   clearTimeout(hoverTimer);setSwapped(false);
  });
  stack.addEventListener('click',()=>{
   clearTimeout(hoverTimer);
   openSlides(images,swapped?1:0);
  });
 });
})();
