(()=>{
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],rnd=a=>a[Math.random()*a.length|0];
const cam=$('#cam');
/* ---------- AUDIO (starts only after a click/key) ---------- */
let ac=null;
function sfx(kind){try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();
 const seq={ok:[[523,.08],[784,.12]],found:[[660,.07],[880,.07],[1320,.14]],bad:[[220,.12],[160,.2]],boom:[[90,.35]],power:[[330,.08],[440,.08],[660,.08],[990,.25]],slam:[[70,.4]],hum:[[110,.6]]}[kind]||[];
 let t=ac.currentTime;seq.forEach(([f,d])=>{const o=ac.createOscillator(),g=ac.createGain();o.type=kind=='boom'||kind=='slam'||kind=='hum'?'sawtooth':'square';o.frequency.value=f;g.gain.setValueAtTime(.06,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+d);t+=d*.8})}catch(e){}}
/* ---------- PARTICLES ---------- */
const cv=$('#fx'),cx=cv.getContext('2d');let P=[],W,H;
function size(){const d=devicePixelRatio||1;W=cv.width=innerWidth*d;H=cv.height=innerHeight*d;cx.setTransform(d,0,0,d,0,0)}size();addEventListener('resize',size);
function burst(x,y,n=30,cols=['#fff35c','#ff9d00','#fff'],sp=9,g=.25){for(let i=0;i<n;i++){const a=Math.random()*6.283,v=sp*(.3+Math.random());P.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-2,g,l:1,d:.018+Math.random()*.02,r:3+Math.random()*6,c:rnd(cols),s:Math.random()<.5?1:0})}}
function dust(x,y){for(let i=0;i<22;i++)P.push({x:x+(Math.random()-.5)*80,y,vx:(Math.random()-.5)*8,vy:-Math.random()*2,g:-.02,l:1,d:.02,r:10+Math.random()*16,c:'#e9d9b8',s:2})}
for(let i=0;i<55;i++)P.push({amb:1,x:Math.random()*innerWidth,y:Math.random()*innerHeight,vx:(Math.random()-.5)*.4,vy:-.2-Math.random()*.6,r:1+Math.random()*3,l:Math.random(),c:rnd(['#fff','#fff35c','#bfe9ff']),ph:Math.random()*6});
(function loop(){cx.clearRect(0,0,innerWidth,innerHeight);
 for(const p of P){p.x+=p.vx;p.y+=p.vy;
  if(p.amb){p.ph+=.04;cx.globalAlpha=.35+.35*Math.sin(p.ph);cx.fillStyle=p.c;cx.fillRect(p.x,p.y,p.r,p.r);if(p.y<-10){p.y=innerHeight+10;p.x=Math.random()*innerWidth}continue}
  p.vy+=p.g;p.l-=p.d;cx.globalAlpha=Math.max(p.l,0);cx.fillStyle=p.c;
  if(p.s==2){cx.beginPath();cx.arc(p.x,p.y,p.r*(2-p.l),0,6.3);cx.fill()}
  else if(p.s){cx.save();cx.translate(p.x,p.y);cx.rotate(p.l*8);cx.beginPath();for(let k=0;k<8;k++){const r=k%2?p.r*.4:p.r*1.4,a=k*Math.PI/4;cx.lineTo(Math.cos(a)*r,Math.sin(a)*r)}cx.fill();cx.restore()}
  else cx.fillRect(p.x,p.y,p.r,p.r*2.2)}
 P=P.filter(p=>p.amb||p.l>0);requestAnimationFrame(loop)})();
/* ---------- CAMERA / FX HELPERS ---------- */
const flash=()=>{const f=$('#flash');f.classList.remove('on');void f.offsetWidth;f.classList.add('on')};
const shake=()=>{cam.classList.remove('shake');void cam.offsetWidth;cam.classList.add('shake')};
const speed=()=>{const s=$('#speed');s.classList.remove('on');void s.offsetWidth;s.classList.add('on')};
const bolt=()=>{const b=$('#bolt');b.classList.remove('on');void b.offsetWidth;b.classList.add('on')};
const impact=()=>{flash();speed();setTimeout(shake,90);sfx('boom')};
function big(t){const e=$('#title3');e.textContent=t;e.classList.remove('on');void e.offsetWidth;e.classList.add('on')}
addEventListener('mousemove',e=>{$('#sky').style.transform=`scale(1.08) translate(${(e.clientX/innerWidth-.5)*-18}px,${(e.clientY/innerHeight-.5)*-12}px)`});
setInterval(()=>{if($('#game').classList.contains('on')&&Math.random()<.5)speed()},9000);
/* ---------- SCREENS ---------- */
const show=id=>{$$('.screen').forEach(s=>{if(!s.classList.contains('modal'))s.classList.toggle('on',s.id==id)})};
const modal=(id,on)=>$('#'+id).classList.toggle('on',on);
/* ---------- INTRO ---------- */
let slammed=false;
function slam(){if(slammed)return;slammed=true;$('#intro').classList.add('slam');impact();sfx('slam');burst(innerWidth/2,innerHeight*.4,70,['#fff35c','#ff5a1f','#fff'],14)}
setTimeout(()=>{burst(innerWidth/2,innerHeight*.7,40,['#ffd23a','#fff'],4,-.05)},1500);
setTimeout(slam,5600);
$('#intro').addEventListener('pointerdown',()=>{sfx('hum');if(!slammed)slam()},{once:true});
$('#bStart').onclick=()=>{sfx('ok');startLevel(0,true)};
$('#bHow').onclick=()=>modal('how',true);
$('#bLv').onclick=()=>modal('lv',true);
$$('[data-close]').forEach(b=>b.onclick=()=>b.closest('.modal').classList.remove('on'));
LEVELS.forEach((l,i)=>{const b=document.createElement('button');b.className='gbtn sm '+['red','blue','yellow'][i];b.textContent=`${i+1}. ${l.name}`;b.onclick=()=>{modal('lv',false);startLevel(i,true)};$('#lvBtns').appendChild(b)});
/* ---------- DIALOGUE ---------- */
const LINES={
goku:{intro:["HEY! THINK YOU CAN SOLVE THIS?"],found:["NICE EYES!","You spotted it!"],ok:["Awesome!","YES!! THAT'S IT!"],bad:["Almost! Look again!","Uhhh... try again."],s3:["NOW YOU'RE GETTING SERIOUS!"],s5:["You're getting stronger!"],s10:["THIS POWER IS INSANE!!"],max:["POWER UP!!!"],win:["Awesome! You found them all!"]},
vegeta:{intro:["Hmph. Show me what you've got."],found:["Hmph. Sharp eyes."],ok:["Hmph. Acceptable."],bad:["That's your answer?","You're guessing, aren't you?"],s3:["Hmph. Not bad."],s5:["...Impressive power."],s10:["IMPOSSIBLE!! Your power level!"],max:["THAT POWER!!"],win:["Not bad."]},
piccolo:{intro:["Look carefully. The answer is in front of you."],found:["Good observation."],ok:["Good observation."],bad:["Slow down. Look carefully."],s3:["Your focus is improving."],s5:["Excellent. Keep that focus."],s10:["Remarkable. Truly."],max:["Your power surges!"],win:["Well done. Training complete."]},
krillin:{win:["Nice one!"]}};
let bt;function say(c,k){const t=rnd(LINES[c][k]||LINES.goku[k]),b=$('#bubbleWrap');$('#say').textContent=t;b.classList.remove('on');void b.offsetWidth;b.classList.add('on')}
function act(cls,ms=800){const a=$('#actor');a.className='';void a.offsetWidth;a.className=cls;if(ms)setTimeout(()=>{if(a.className==cls)a.className=''},ms)}
function aimg(el,c){el.onerror=()=>{el.onerror=null;el.src=`assets/characters/${c}.svg`};el.src=`assets/characters/${c}.png`}
/* ---------- STATE ---------- */
let li=0,L,score=0,combo=0,power=0,cur=-1,solved=new Set,unl=new Set,grid=[],cells={};
const chr=()=>L.char;
function hud(){$('#score').textContent=score;const c=$('#combo');c.textContent='COMBO ×'+combo;c.classList.remove('hit');if(combo>=2){void c.offsetWidth;c.classList.add('hit')}
 $('#pfill').style.width=power+'%';$('#power').classList.toggle('max',power>=90);
 $('#aura').className=combo>=10?'t3':combo>=5?'t2':combo>=3?'t1':''}
function startLevel(i,fromMenu){
 li=i;L=LEVELS[i];solved=new Set;unl=new Set;cur=-1;if(fromMenu){score=0;combo=0;power=0}
 flash();speed();big('LEVEL '+(i+1));sfx('power');
 setTimeout(()=>{show('game');modal('win',false);$('#sky').style.filter=`hue-rotate(${[0,-40,80][i]}deg)`;
  $('#lvTitle').textContent=`LEVEL ${i+1}: ${L.name.toUpperCase()}`;
  $('#scene').innerHTML=SCENES[L.scene];$('#scene svg').style.transformOrigin='50% 50%';
  buildCW();hud();
  const a=$('#actor');aimg(a,L.char);a.className='';void a.offsetWidth;a.className=L.enter;
  setTimeout(()=>{const r=a.getBoundingClientRect();dust(r.left+r.width/2,r.bottom-6);shake();sfx('boom');say(L.char,'intro');setTimeout(()=>act('point',1000),900)},i==1?800:950);
  setTimeout(()=>pickNext(),2200)},650)}
/* ---------- CROSSWORD ---------- */
function buildCW(){
 const pl=layoutWords(L.words.map(w=>w.a));L.words.forEach(w=>{const p=pl.find(x=>x.a==w.a);w.r=p.r;w.c=p.c;w.down=p.down});
 const R=Math.max(...L.words.map(w=>w.r+(w.down?w.a.length:1))),C=Math.max(...L.words.map(w=>w.c+(w.down?1:w.a.length)));
 const el=$('#cw');el.innerHTML='';el.style.gridTemplateColumns=`repeat(${C},1fr)`;cells={};
 for(let r=0;r<R;r++)for(let c=0;c<C;c++){const d=document.createElement('div');el.appendChild(d);d.className='cell';d.style.visibility='hidden';cells[r+','+c]={el:d,ws:[],ch:''}}
 L.words.forEach((w,i)=>{for(let k=0;k<w.a.length;k++){const cc=cells[(w.r+(w.down?k:0))+','+(w.c+(w.down?0:k))];cc.ws.push(i);cc.ch=w.a[k];cc.el.style.visibility='visible'}
  const s=cells[w.r+','+w.c].el;s.insertAdjacentHTML('afterbegin',`<i>${i+1}</i>`)});
 Object.values(cells).forEach(cc=>{cc.el.insertAdjacentHTML('beforeend','<b></b>');cc.el.onclick=()=>{const i=cc.ws.find(j=>!solved.has(j));if(i!=null)select(i)}});
 const ch=$('#chips');ch.innerHTML='';L.words.forEach((w,i)=>{const b=document.createElement('button');b.className='chip';b.id='chip'+i;b.textContent=`${i+1}${w.down?'↓':'→'}`;b.onclick=()=>{if(!solved.has(i))select(i)};ch.appendChild(b)});
}
function wcells(i){const w=L.words[i];return[...w.a].map((_,k)=>cells[(w.r+(w.down?k:0))+','+(w.c+(w.down?0:k))])}
function select(i){cur=i;const w=L.words[i];Object.values(cells).forEach(c=>c.el.classList.remove('sel'));wcells(i).forEach(c=>c.el.classList.add('sel'));
 $$('.chip').forEach((c,j)=>c.classList.toggle('on',j==i));
 $('#mission').textContent=unl.has(i)?'SPELL IT!':'FIND IT!';
 $('#clueTxt').innerHTML=`<b>${i+1}${w.down?'↓':'→'}</b> ${w.q} <small>(${w.a.length} letters)</small>`;
 const a=$('#ans');a.value='';a.disabled=!unl.has(i);a.maxLength=w.a.length;a.placeholder=unl.has(i)?'TYPE IT!':'FIND IT FIRST!';preview('');if(unl.has(i))a.focus();act('point',900)}
function pickNext(){const n=L.words.findIndex((_,i)=>!solved.has(i)&&!unl.has(i)),m=L.words.findIndex((_,i)=>!solved.has(i));if(n>=0)select(n);else if(m>=0)select(m)}
function preview(v){if(cur<0)return;wcells(cur).forEach((c,k)=>{if(c.el.classList.contains('done'))return;const b=c.el.querySelector('b');c.el.classList.toggle('prev',!!v[k]);if(b.textContent!=(v[k]||'')){b.textContent=v[k]||'';b.classList.remove('pop');void b.offsetWidth;if(v[k])b.classList.add('pop')}})}
$('#ans').addEventListener('input',e=>{e.target.value=e.target.value.toUpperCase().replace(/[^A-Z]/g,'');preview(e.target.value)});
$('#ans').addEventListener('keydown',e=>{if(e.key=='Enter')submit()});$('#go').onclick=submit;
addEventListener('keydown',e=>{if(/^[a-z]$/i.test(e.key)&&$('#game').classList.contains('on')&&document.activeElement!=$('#ans')&&!$('#ans').disabled&&!e.ctrlKey)$('#ans').focus()});
/* ---------- GAME EVENTS ---------- */
function good(kind,pts){combo++;power=Math.min(100,power+14);score+=pts+combo*5;
 if(combo==3){say(chr(),'s3');}else if(combo==5){say(chr(),'s5');bolt();shake();burst(innerWidth/2,innerHeight/2,60,['#fff35c','#fff','#6ec8ff'],13)}
 else if(combo==10){say(chr(),'s10');impact();bolt()}else say(chr(),kind);
 if(combo==3||combo==5||combo==10)big('COMBO ×'+combo);
 act('jump',650);hud();
 if(power>=100){setTimeout(()=>{big('POWER UP!!!');say(chr(),'max');impact();bolt();sfx('power');score+=500;power=0;burst(innerWidth/2,innerHeight/2,120,['#fff','#fff35c','#ff9d00'],18);hud()},700)}}
function bad(el){combo=0;power=Math.max(0,power-8);hud();sfx('bad');say(chr(),'bad');act('shy',800);const s=$('#sweat');s.classList.remove('on');void s.offsetWidth;s.classList.add('on');if(el){el.classList.remove('miss');void el.getBoundingClientRect();el.classList.add('miss')}}
$('#scene').addEventListener('click',e=>{const o=e.target.closest('.o');if(!o||cur<0||unl.has(cur)||solved.has(cur))return;
 const w=L.words[cur];if(o.dataset.id!==w.id){bad(o);return}
 unl.add(cur);o.classList.add('ok');$('#chip'+cur).classList.add('unl');
 const sc=$('#scene'),sr=sc.getBoundingClientRect(),r=o.getBoundingClientRect(),px=r.left+r.width/2-sr.left,py=r.top+r.height/2-sr.top,svg=sc.querySelector('svg');
 svg.style.transformOrigin=`${px/sr.width*100}% ${py/sr.height*100}%`;svg.style.transform='scale(1.7)';setTimeout(()=>svg.style.transform='',950);
 const ring=document.createElement('div');ring.className='ring';ring.style.left=px+'px';ring.style.top=py+'px';sc.appendChild(ring);setTimeout(()=>ring.remove(),800);
 burst(r.left+r.width/2,r.top+r.height/2,36);sfx('found');const f=$('#found');f.classList.remove('on');void f.offsetWidth;f.classList.add('on');
 good('found',100);select(cur)});
function submit(){if(cur<0||!unl.has(cur))return;const v=$('#ans').value,w=L.words[cur];if(v.length<w.a.length)return bad();
 if(v!=w.a){bad();$('#cw').animate([{transform:'translateX(-8px)'},{transform:'translateX(8px)'},{transform:'none'}],{duration:260});return}
 const i=cur;solved.add(i);$('#chip'+i).classList.add('done');$('#ans').value='';$('#ans').disabled=true;
 wcells(i).forEach((c,k)=>setTimeout(()=>{const b=c.el.querySelector('b');c.el.classList.remove('prev');c.el.classList.add('done','glow');b.textContent=w.a[k];b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');sfx('ok');const r=c.el.getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,10)},k*120));
 setTimeout(()=>{const r=$('#cwCol').getBoundingClientRect();burst(r.left+r.width/2,r.top+r.height/2,50,['#fff35c','#ff5a1f','#fff'],12);impact()},w.a.length*120+60);
 good('ok',200);
 if(solved.size==L.words.length)setTimeout(finish,w.a.length*120+1400);else setTimeout(pickNext,w.a.length*120+500)}
function finish(){impact();bolt();sfx('power');say(chr(),'win');
 const last=li==LEVELS.length-1;$('#winT').textContent=last?'WORD LEGEND!':'SUPER SOLVER!';
 $('#winP').innerHTML=`Level ${li+1} cleared! Score: <b>${score}</b>`;$('#next').textContent=last?'PLAY AGAIN ⚡':'NEXT LEVEL ⚡';
 $$('.cameo').forEach(c=>c.remove());const k=document.createElement('img');k.className='cameo';k.style.cssText='position:absolute;right:4%;bottom:0;height:46%;animation:enR 1s cubic-bezier(.2,1.5,.4,1)';aimg(k,'krillin');$('#win').appendChild(k);
 setTimeout(()=>{modal('win',true);burst(innerWidth/2,innerHeight/2,140,['#fff','#fff35c','#ff9d00','#e5262d'],18);setTimeout(()=>{$('#bubbleWrap').classList.remove('on')},50)},900)}
$('#next').onclick=()=>{$$('.cameo').forEach(c=>c.remove());sfx('ok');if(li==LEVELS.length-1){startLevel(0,true)}else startLevel(li+1,false)};
document.addEventListener('pointerdown',()=>{try{ac=ac||new(window.AudioContext||window.webkitAudioContext)()}catch(e){}},{once:true});
})();
