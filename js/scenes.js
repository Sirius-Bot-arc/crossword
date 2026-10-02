// Illustrated, hand-drawn SVG scenes. Each clickable object is <g class="o" data-id="...">.
const O=(id,inner)=>`<g class="o" data-id="${id}">${inner}</g>`;
const SK='stroke="#2a1a14" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';
const star=(x,y,r,f)=>`<polygon fill="${f}" points="${[0,1,2,3,4,5,6,7,8,9].map(i=>{const a=i*Math.PI/5-Math.PI/2,d=i%2?r*.45:r;return (x+Math.cos(a)*d).toFixed(0)+','+(y+Math.sin(a)*d).toFixed(0)}).join(' ')}"/>`;
const SCENES={
bedroom:`<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="bw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe4b0"/><stop offset="1" stop-color="#ffc98a"/></linearGradient><linearGradient id="bs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd0ff"/><stop offset="1" stop-color="#ffd6a0"/></linearGradient></defs>
<g ${SK}><rect width="800" height="320" fill="url(#bw)" stroke="none"/><rect y="320" width="800" height="130" fill="#b9783f"/><path d="M0 350H800M0 385H800M0 420H800" stroke-width="2" opacity=".4" fill="none"/><path d="M0 320H800" stroke-width="6"/>
<rect x="540" y="40" width="190" height="150" fill="url(#bs)"/><path d="M635 40V190M540 115H730" fill="none"/><path d="M570 150q10-22 34-14 12-20 40-6 24-6 30 20z" fill="#fff" stroke-width="2"/>
<rect x="95" y="45" width="100" height="120" fill="#6a4cc9" transform="rotate(-3 145 105)"/>${star(145,105,38,'#ffd23a')}
<ellipse cx="400" cy="400" rx="170" ry="34" fill="#e5484d" opacity=".85"/>
<rect x="30" y="215" width="14" height="120" fill="#7a4a22"/><rect x="30" y="250" width="310" height="82" fill="#5aa0ff"/><path d="M30 275H340M30 300H340" stroke-width="2" opacity=".35" fill="none"/><rect x="40" y="224" width="100" height="40" rx="18" fill="#fff"/><rect x="326" y="230" width="14" height="105" fill="#7a4a22"/>
<rect x="490" y="262" width="270" height="18" fill="#9b5f2b"/><path d="M510 280V400M740 280V400" stroke-width="12" fill="none"/>
<g><rect x="715" y="218" width="30" height="44" fill="#d9703a"/><path d="M730 218q-28-30-14-52M730 218q4-44 30-48M730 218q30-18 44 4" fill="none" stroke="#2f9e44" stroke-width="7"/></g>
<path d="M200 365q-4-30 26-34 20-2 30 10l18 20-14 30-50 4z" fill="#8e5bd8"/><path d="M215 372h40" fill="none" stroke-width="2"/><rect x="208" y="352" width="30" height="20" rx="4" fill="#6b3fb8"/>
<circle cx="300" cy="400" r="22" fill="#ff8a1f"/><path d="M278 400q22-12 44 0M300 378v44" fill="none" stroke-width="2"/></g>
${O('clock',`<g ${SK}><circle cx="300" cy="105" r="48" fill="#fff"/><circle cx="300" cy="105" r="38" fill="#e3f2ff" stroke-width="1.5"/><circle cx="268" cy="64" r="11" fill="#e5484d"/><circle cx="332" cy="64" r="11" fill="#e5484d"/><path d="M300 105V78M300 105l20 12M300 72v4M300 134v4M266 105h4M330 105h4" stroke-width="4" fill="none"/><circle cx="300" cy="105" r="5" fill="#2a1a14"/></g>`)}
${O('lamp',`<g ${SK}><ellipse cx="560" cy="262" rx="36" ry="9" fill="#555"/><path d="M560 258V196l32-26" stroke-width="7" fill="none"/><path d="M572 140l62 36-22 38z" fill="#ffd23a"/><path d="M584 154l30 18" stroke="#fff" stroke-width="3" fill="none"/><circle cx="620" cy="196" r="7" fill="#fff8a8" stroke-width="1.5"/></g>`)}
${O('pencil',`<g ${SK} transform="rotate(-9 650 250)"><rect x="590" y="244" width="94" height="14" fill="#ffc400"/><path d="M684 244l24 7-24 7z" fill="#f2cf9b"/><path d="M700 249l8 2-8 2z" fill="#2a1a14"/><rect x="580" y="244" width="12" height="14" fill="#ff7aa8"/><rect x="590" y="244" width="8" height="14" fill="#bbb"/></g>`)}
${O('cup',`<g ${SK}><path d="M668 214h46l-6 48h-34z" fill="#3ccfc0"/><path d="M714 224q22 2 14 22-4 8-18 8" fill="none" stroke-width="5"/><ellipse cx="691" cy="214" rx="23" ry="6" fill="#2b9d92"/><path d="M680 232l20 0" stroke="#fff" stroke-width="3" fill="none"/></g>`)}
${O('book',`<g ${SK} transform="rotate(-12 420 385)"><rect x="372" y="365" width="110" height="46" fill="#e5484d"/><rect x="380" y="406" width="100" height="10" fill="#fff"/><path d="M392 380h58M392 392h38" stroke="#ffd23a" stroke-width="4" fill="none"/></g>`)}
${O('shoe',`<g ${SK}><path d="M500 392q-6-34 20-38l22 4q8 12 24 14 20 4 22 22z" fill="#38b26b"/><path d="M494 410h104v-14H494z" fill="#fff"/><path d="M522 366l8 8M534 362l8 8" stroke-width="3" fill="none"/></g>`)}
</svg>`,
kitchen:`<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice"><defs><pattern id="tl" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#fff2d0"/><path d="M0 0H40V40" fill="none" stroke="#e8cf9a" stroke-width="2"/></pattern></defs>
<g ${SK}><rect width="800" height="300" fill="url(#tl)" stroke="none"/><rect y="300" width="800" height="150" fill="#6fa0c9"/><path d="M0 345H800M0 390H800" stroke-width="2" opacity=".3" fill="none"/>
<rect x="30" y="30" width="250" height="110" fill="#3b9d8e"/><path d="M155 30V140" fill="none"/><circle cx="140" cy="86" r="6" fill="#ffd23a"/><circle cx="170" cy="86" r="6" fill="#ffd23a"/><rect x="520" y="40" width="220" height="130" fill="#8ad4ff"/><path d="M630 40V170M520 105H740" fill="none"/><circle cx="700" cy="76" r="18" fill="#ffe14a" stroke-width="2"/>
<path d="M330 40v60M360 40v50M390 40v70" fill="none" stroke-width="4"/><path d="M322 100h16l-4 14h-8zM352 90h16v26h-16zM382 110h16l-3 16h-10z" fill="#aaa"/>
<rect x="40" y="288" width="720" height="38" fill="#e6a35a"/><rect x="60" y="326" width="16" height="110" fill="#b97a35"/><rect x="724" y="326" width="16" height="110" fill="#b97a35"/>
<path d="M40 288h720v12H40z" fill="#fff" opacity=".5" stroke="none"/><path d="M80 288v38M120 288v38M160 288v38M200 288v38M240 288v38M280 288v38M320 288v38M360 288v38M400 288v38M440 288v38M480 288v38M520 288v38M560 288v38M600 288v38M640 288v38M680 288v38M720 288v38" stroke="#e5484d" stroke-width="3" opacity=".25" fill="none"/>
<ellipse cx="400" cy="395" rx="150" ry="22" fill="#000" opacity=".12" stroke="none"/></g>
${O('plate',`<g ${SK}><ellipse cx="330" cy="290" rx="82" ry="20" fill="#fff"/><ellipse cx="330" cy="288" rx="56" ry="12" fill="#e3f0ff" stroke-width="1.5"/></g>`)}
${O('fork',`<g ${SK}><rect x="190" y="262" width="12" height="50" rx="5" fill="#d8dde6"/><path d="M186 262v-24M194 262v-24M202 262v-24M210 262v-24M186 262h28" stroke-width="3" fill="none"/></g>`)}
${O('knife',`<g ${SK}><path d="M426 312V232q16 6 18 40l-4 6v34z" fill="#e5eaf2"/><rect x="426" y="284" width="18" height="36" rx="4" fill="#5a3b24"/></g>`)}
${O('spoon',`<g ${SK}><ellipse cx="480" cy="246" rx="14" ry="22" fill="#d8dde6"/><rect x="474" y="266" width="12" height="50" rx="5" fill="#d8dde6"/></g>`)}
${O('cup',`<g ${SK}><path d="M540 250h44l-6 44h-32z" fill="#ff7a1f"/><path d="M584 260q20 2 14 20-4 8-16 8" fill="none" stroke-width="5"/><ellipse cx="562" cy="250" rx="22" ry="6" fill="#c25a12"/><path d="M552 268h20" stroke="#fff" stroke-width="3" fill="none"/></g>`)}
${O('toaster',`<g ${SK}><rect x="620" y="236" width="110" height="58" rx="14" fill="#c9d3e0"/><path d="M640 236h26M684 236h26" stroke-width="8" fill="none"/><rect x="710" y="262" width="12" height="20" fill="#e5484d"/><path d="M634 250l22 0" stroke="#fff" stroke-width="4" fill="none"/></g>`)}
${O('apple',`<g ${SK}><circle cx="120" cy="272" r="22" fill="#e5262d"/><path d="M120 252q2-10 10-12" fill="none"/><path d="M120 252q-12-6-16 0 10 6 16 0z" fill="#38b26b"/></g>`)}
${O('bottle',`<g ${SK}><path d="M240 214h24v22l10 12v46h-44v-46l10-12z" fill="#ff4d4d"/><rect x="242" y="204" width="20" height="12" fill="#fff"/></g>`)}
${O('banana',`<g ${SK}><path d="M50 262q40 50 100 18-30 22-80-24z" fill="#ffd93a"/></g>`)}
</svg>`,
park:`<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="ps" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4aa8ff"/><stop offset="1" stop-color="#bfe9ff"/></linearGradient></defs>
<g ${SK}><rect width="800" height="450" fill="url(#ps)" stroke="none"/><circle cx="90" cy="80" r="42" fill="#ffe14a"/><path d="M-10 290Q150 190 320 280T640 270T820 280V450H-10z" fill="#5cc45a"/><path d="M-10 340Q200 290 420 340T820 330V450H-10z" fill="#3fa84a"/>
<path d="M200 80q10-22 36-14 14-18 42-4 24-4 28 18z" fill="#fff" stroke-width="2"/><path d="M520 130q10-20 34-12 12-16 38-4 22-4 26 16z" fill="#fff" stroke-width="2"/>
<path d="M0 360H800" opacity="0"/><path d="M60 392l8-26 8 26M80 396l6-20 6 20" fill="none" stroke="#e5262d" stroke-width="3"/><circle cx="68" cy="364" r="7" fill="#ff7aa8"/><circle cx="86" cy="376" r="6" fill="#ffd23a"/>
<path d="M0 330h800" stroke="#fff" stroke-width="0"/>
<rect x="640" y="300" width="14" height="60" fill="#c98a4b"/><rect x="700" y="300" width="14" height="60" fill="#c98a4b"/><path d="M630 312H800M630 340H800" stroke-width="6" fill="none"/></g>
${O('tree',`<g ${SK}><path d="M168 400l8-130h34l8 130z" fill="#8a5a2b"/><circle cx="190" cy="200" r="64" fill="#2f9e44"/><circle cx="140" cy="236" r="46" fill="#38b24f"/><circle cx="240" cy="232" r="48" fill="#2f9e44"/><circle cx="196" cy="150" r="42" fill="#46c25e"/><circle cx="168" cy="190" r="9" fill="#e5262d"/><circle cx="224" cy="226" r="9" fill="#e5262d"/></g>`)}
${O('bench',`<g ${SK}><rect x="330" y="318" width="170" height="16" fill="#c98a4b"/><rect x="330" y="288" width="170" height="14" fill="#d79a58"/><rect x="342" y="334" width="12" height="44" fill="#444"/><rect x="476" y="334" width="12" height="44" fill="#444"/><path d="M342 302v16M488 302v16" stroke-width="8" fill="none"/></g>`)}
${O('kite',`<g ${SK}><path d="M520 40l44 52-44 66-44-66z" fill="#e5262d"/><path d="M520 40V158M476 92H564" fill="none" stroke-width="2"/><path d="M520 40l44 52H520z" fill="#ffd23a" stroke="none"/><path d="M520 158q-20 40 10 70t-14 70" fill="none" stroke-width="2"/><path d="M522 190l16-10-4 18zM516 238l-16-8 4 18z" fill="#3b82f6"/></g>`)}
${O('bike',`<g ${SK}><circle cx="608" cy="388" r="34" fill="none" stroke-width="6"/><circle cx="738" cy="388" r="34" fill="none" stroke-width="6"/><path d="M608 388l36-70h66M644 318l30 70h64M710 318l-12-30h-24M644 318l-6-18h-16" fill="none" stroke="#e5262d" stroke-width="6"/><circle cx="674" cy="388" r="8" fill="#ffd23a"/></g>`)}
${O('ball',`<g ${SK}><circle cx="420" cy="400" r="26" fill="#fff"/><path d="M420 374v52M394 400h52M402 382q18 18 36 0M402 418q18-18 36 0" fill="none" stroke-width="2.5"/><path d="M420 374q-22 26 0 52" fill="#3b82f6" opacity=".8" stroke="none"/></g>`)}
${O('hat',`<g ${SK}><ellipse cx="270" cy="392" rx="52" ry="14" fill="#f2cf6b"/><path d="M240 388q0-34 30-34t30 34z" fill="#f2cf6b"/><path d="M242 380q28 8 56 0" fill="none" stroke="#e5262d" stroke-width="6"/></g>`)}
</svg>`};
const LEVELS=[
{name:'Messy Bedroom',char:'goku',enter:'enter-l',scene:'bedroom',words:[
 {a:'BOOK',id:'book',q:'You read stories in this.',h:'It is red, and it landed on the floor.'},
 {a:'SHOE',id:'shoe',q:'You wear this on your foot.',h:'A green sneaker is hiding near the desk.'},
 {a:'CLOCK',id:'clock',q:'You look at this to tell the time.',h:'It hangs on the wall and has two hands.'},
 {a:'PENCIL',id:'pencil',q:'You write and draw with this.',h:'Yellow, with a pink eraser. Check the desk.'},
 {a:'LAMP',id:'lamp',q:'This gives light on your desk.',h:'It has a bright yellow shade.'},
 {a:'CUP',id:'cup',q:'You drink from this.',h:'A teal cup, standing on the desk.'}]},
{name:'Kitchen Table',char:'vegeta',enter:'enter-t',scene:'kitchen',words:[
 {a:'FORK',id:'fork',q:'You use this to poke your food. It has prongs.',h:'Look to the left of the plate.'},
 {a:'KNIFE',id:'knife',q:'You use this to cut your food.',h:'It lies to the right of the plate.'},
 {a:'SPOON',id:'spoon',q:'You eat soup with this.',h:'Round at the top. It sits next to the knife.'},
 {a:'PLATE',id:'plate',q:'You put your food on this.',h:'It is round, white, and in the middle.'},
 {a:'CUP',id:'cup',q:'You drink hot chocolate from this.',h:'An orange cup with a handle.'},
 {a:'TOASTER',id:'toaster',q:'This machine makes bread crunchy and warm.',h:'Silver, with two slots on top.'}]},
{name:'Sunny Park',char:'piccolo',enter:'enter-r',scene:'park',words:[
 {a:'TREE',id:'tree',q:'Birds build nests in this tall plant.',h:'It has red apples and a big green top.'},
 {a:'BENCH',id:'bench',q:'You sit on this in the park.',h:'Wooden, in the middle of the picture.'},
 {a:'KITE',id:'kite',q:'This flies high on a string.',h:'Look up in the sky. It has a tail.'},
 {a:'BIKE',id:'bike',q:'You ride this. It has two wheels and pedals.',h:'It is on the right side.'},
 {a:'BALL',id:'ball',q:'You throw and kick this round toy.',h:'Blue and white, on the grass.'},
 {a:'HAT',id:'hat',q:'You wear this on your head in the sun.',h:'A straw hat lying on the grass.'}]}];
