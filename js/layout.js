// Greedy crossword auto-layout: places each word crossing an already-placed one.
function layoutWords(words){
  const g={},placed=[],at=(r,c)=>g[r+','+c];
  const fits=(w,r,c,down)=>{
    for(let k=0;k<w.length;k++){
      const rr=r+(down?k:0),cc=c+(down?0:k),ex=at(rr,cc);
      if(ex&&ex!==w[k])return false;
      if(!ex&&(down?(at(rr,cc-1)||at(rr,cc+1)):(at(rr-1,cc)||at(rr+1,cc))))return false;
    }
    return !at(r-(down?1:0),c-(down?0:1))&&!at(r+(down?w.length:0),c+(down?0:w.length));
  };
  const put=(w,r,c,down)=>{for(let k=0;k<w.length;k++)g[(r+(down?k:0))+','+(c+(down?0:k))]=w[k];placed.push({a:w,r,c,down})};
  put(words[0],0,0,false);
  for(const w of words.slice(1)){
    let ok=false;
    for(const p of placed){
      for(let i=0;i<w.length&&!ok;i++)for(let j=0;j<p.a.length&&!ok;j++){
        if(w[i]!==p.a[j])continue;
        const down=!p.down,r=p.down?p.r+j:p.r-i,c=p.down?p.c-i:p.c+j;
        if(fits(w,r,c,down)){put(w,r,c,down);ok=true}
      }
      if(ok)break;
    }
    if(!ok)return null;
  }
  const mr=Math.min(...placed.map(p=>p.r)),mc=Math.min(...placed.map(p=>p.c));
  placed.forEach(p=>{p.r-=mr;p.c-=mc});
  return placed;
}
if(typeof module!=='undefined')module.exports=layoutWords;
