// Browser reconstruction from the current, graphics-only ZezOffice atlas.
// Retains source frame offsets, sole alignment and depth order. Demo navigation
// and staged meetings are independent of the private application's routines.
let assetPromise;
const ROOT = new URL('./casa/', import.meta.url);
const D4 = d => ['S','SE','SW'].includes(d) ? 'S' : ['N','NE','NW'].includes(d) ? 'N' : d;
const image = file => new Promise((resolve,reject) => {const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>reject(Error('Could not load '+file));im.src=new URL(file,ROOT);});
export async function assets(){
 if(!assetPromise) assetPromise=(async()=>{
  const response=await fetch(new URL('manifest.json',ROOT));if(!response.ok)throw Error('House manifest unavailable');const m=await response.json();
  const [floor,mask,...pages]=await Promise.all([image(m.floor),image(m.walk_mask),...m.atlas_paginas.map(image)]);
  const step=8,w=Math.ceil(m.size[0]/step),h=Math.ceil(m.size[1]/step),cv=document.createElement('canvas');cv.width=w;cv.height=h;
  const g=cv.getContext('2d',{willReadFrequently:true});g.imageSmoothingEnabled=false;g.drawImage(mask,0,0,w,h);const rgba=g.getImageData(0,0,w,h).data,grid=new Uint8Array(w*h);
  for(let i=0;i<grid.length;i++)grid[i]=rgba[i*4]>127?1:0;
  return {m,floor,pages,nav:new Navigation(w,h,step,grid)};
 })().catch(e=>{assetPromise=null;throw e;});
 return assetPromise;
}

class Heap{
 constructor(){this.a=[];}
 push(v){let i=this.a.length;this.a.push(v);while(i>0){let p=(i-1)>>1;if(this.a[p].f<=v.f)break;this.a[i]=this.a[p];i=p;}this.a[i]=v;}
 pop(){const a=this.a,first=a[0],last=a.pop();if(a.length){let i=0;while(i*2+1<a.length){let j=i*2+1;if(j+1<a.length&&a[j+1].f<a[j].f)j++;if(a[j].f>=last.f)break;a[i]=a[j];i=j;}a[i]=last;}return first;}
}
export class Navigation{
 constructor(w,h,step,grid){Object.assign(this,{w,h,step,grid});}
 free(x,y){return x>=0&&y>=0&&x<this.w&&y<this.h&&this.grid[y*this.w+x]===1;}
 nearest(px,py){const x=Math.round(px/this.step),y=Math.round(py/this.step);for(let r=0;r<=12;r++)for(let dy=-r;dy<=r;dy++)for(let dx=-r;dx<=r;dx++){if(Math.max(Math.abs(dx),Math.abs(dy))!==r)continue;if(this.free(x+dx,y+dy))return [x+dx,y+dy];}return null;}
 route(from,to){
  const s=this.nearest(...from),t=this.nearest(...to);if(!s||!t)return null;const start=s[1]*this.w+s[0],end=t[1]*this.w+t[0];
  const n=this.w*this.h,cost=new Float32Array(n).fill(Infinity),prev=new Int32Array(n).fill(-1),closed=new Uint8Array(n),heap=new Heap();cost[start]=0;heap.push({id:start,f:0});
  let count=0;while(heap.a.length&&count++<100000){const u=heap.pop().id;if(closed[u])continue;if(u===end){let p=end,path=[];while(p!==start){path.push([(p%this.w)*this.step,Math.floor(p/this.w)*this.step]);p=prev[p];if(p<0)return null;}return path.reverse();}closed[u]=1;const x=u%this.w,y=Math.floor(u/this.w);
   for(const [dx,dy]of [[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]]){const xx=x+dx,yy=y+dy;if(!this.free(xx,yy)||dx&&dy&&(!this.free(x+dx,y)||!this.free(x,y+dy)))continue;const v=yy*this.w+xx,c=cost[u]+(dx&&dy?1.414214:1);if(c>=cost[v])continue;cost[v]=c;prev[v]=u;heap.push({id:v,f:c+Math.hypot(t[0]-xx,t[1]-yy)});}
  }return null;
 }
}

export class HouseScene{
 constructor(canvas,{onActor=()=>{},onReady=()=>{},onError=()=>{}}={}){
  this.canvas=canvas;this.g=canvas.getContext('2d');this.onActor=onActor;this.paused=matchMedia('(prefers-reduced-motion: reduce)').matches;this.focused='central';this.bubbles=[];this.camera={cx:1680,cy:400,w:1050,h:850};this.time=0;this.frames=0;this.width=1;this.height=1;this.scale=1;
  this.resize=new ResizeObserver(()=>this.fit());this.resize.observe(canvas.parentElement);this.fit();
  let pointer;canvas.addEventListener('pointerdown',e=>{pointer={x:e.clientX,y:e.clientY,moved:false};canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointermove',e=>{if(!pointer)return;const dx=e.clientX-pointer.x,dy=e.clientY-pointer.y;if(Math.abs(dx)+Math.abs(dy)>3)pointer.moved=true;this.camera.cx-=dx/this.scale;this.camera.cy-=dy/this.scale;pointer.x=e.clientX;pointer.y=e.clientY;});
  canvas.addEventListener('pointerup',e=>{if(pointer&&!pointer.moved&&this.actors){const r=canvas.getBoundingClientRect(),p=this.world(e.clientX-r.left,e.clientY-r.top);const a=this.actors.find(a=>Math.abs(a.x-p[0])<80&&p[1]<a.y&&p[1]>a.y-240);if(a)this.onActor(a.name);}pointer=null;});
  canvas.addEventListener('pointercancel',()=>pointer=null);
  this.ready=assets().then(data=>{if(this.dead)return;Object.assign(this,data);this.actors=data.m.actors.map(a=>({...a,x:a.position[0],y:a.position[1],state:'idle',elapsed:0,next:Infinity,path:[]}));onReady(this);this.last=performance.now();this.loop(this.last);}).catch(e=>{canvas.dataset.state='error';onError(e);});
 }
 fit(){const r=this.canvas.parentElement.getBoundingClientRect(),dpr=Math.min(1.5,window.devicePixelRatio||1);this.width=Math.max(1,r.width);this.height=Math.max(1,r.height);this.canvas.width=Math.round(this.width*dpr);this.canvas.height=Math.round(this.height*dpr);this.dpr=dpr;}
 transform(){const c=this.camera;this.scale=Math.min(this.width/c.w,this.height/c.h);this.ox=this.width/2-c.cx*this.scale;this.oy=this.height/2-c.cy*this.scale;}
 world(x,y){return [(x-this.ox)/this.scale,(y-this.oy)/this.scale];}
 screen(x,y){return [x*this.scale+this.ox,y*this.scale+this.oy];}
 focus(room='central'){this.focused=room;if(room==='all'){this.camera={cx:1684,cy:1654,w:3460,h:3400};return;}const r=this.m?.rooms.find(r=>r.id===room);if(!r)return;const xs=r.polygon.map(p=>p[0]),ys=r.polygon.map(p=>p[1]),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);this.camera={cx:(minX+maxX)/2,cy:(minY+maxY)/2-100,w:maxX-minX+180,h:maxY-minY+430};}
 zoom(factor){this.camera.w=Math.max(500,Math.min(4200,this.camera.w/factor));this.camera.h=Math.max(450,Math.min(4200,this.camera.h/factor));}
 actor(name){return this.actors?.find(a=>a.name===name);}
 move(a,to,onArrival){const path=this.nav.route([a.x,a.y],to);if(!path)return false;a.path=path;a.state=path.length?'walk':'idle';a.elapsed=0;a.arrive=onArrival;if(!path.length)onArrival?.();return true;}
 roam(a){const room=this.m.rooms.find(r=>r.id===a.room);if(!room)return false;const poly=room.polygon;const minX=Math.min(...poly.map(p=>p[0]))+50,maxX=Math.max(...poly.map(p=>p[0]))-50,minY=Math.min(...poly.map(p=>p[1]))+40,maxY=Math.max(...poly.map(p=>p[1]))-25;for(let i=0;i<5;i++){const target=[minX+Math.random()*(maxX-minX),minY+Math.random()*(maxY-minY)];if(this.move(a,target))return true;}return false;}
 walk(name){const a=this.actor(name);if(!a)return false;if(a.state==='sentar')this.stand(name);a.next=this.time+12000;return this.roam(a);}
 sit(name){const a=this.actor(name);if(!a?.poses.sentar)return false;const room=this.m.rooms.find(r=>r.id===a.room);const seat=room?.use_points.find(p=>p.action==='sentar'&&p.senta);if(!seat)return false;a.next=Infinity;return this.move(a,seat.xy,()=>{a.seatApproach=seat.xy.slice();[a.x,a.y]=seat.senta;a.state='sentar';a.dir=seat.facing;a.elapsed=0;});}
 stand(name){const a=this.actor(name);if(!a)return;if(a.seatApproach){[a.x,a.y]=a.seatApproach;a.seatApproach=null;}a.path=[];a.arrive=null;a.state='idle';a.elapsed=0;a.next=Infinity;}
 setDirection(name,d){const a=this.actor(name);if(a){a.dir=d;if(a.state!=='walk')a.elapsed=0;}}
 async meet(names){
  await this.ready;if(this.dead)return false;this.meetingResolve?.(false);this.bubbles.forEach(b=>b.el.remove());this.bubbles=[];this.focus('central');this.paused=false;
  for(const a of this.actors)a.next=Infinity;
  let completed=0;return new Promise(resolve=>{this.meetingResolve=resolve;const done=()=>{if(++completed===2){this.meetingResolve=null;resolve(true);}};
   names.forEach((name,i)=>{const a=this.actor(name),start=this.nav.nearest(...(i?[1980,700]:[1730,660]));if(!a||!start){done();return;}a.room='central';a.x=start[0]*8;a.y=start[1]*8;a.dir=i?'W':'E';a.state='idle';const target=i?[1920,700]:[1770,660];if(!this.move(a,target,()=>{a.dir=i?'W':'E';done();}))done();});
  });
 }
 speak(lines){this.bubbles.forEach(b=>b.el.remove());this.bubbles=lines.map((line,i)=>{const el=document.createElement('div');el.className='speech';el.setAttribute('aria-hidden','true');this.canvas.parentElement.append(el);return {...line,el,start:this.time+i*2200};});}
 frame(a){const walking=a.state==='walk',seq=walking?a.walk:a.poses[a.state]||a.poses.idle;let dir=walking?a.dir:D4(a.dir);if(!seq?.dirs[dir])dir=Object.keys(seq?.dirs||{})[0];const cfg=seq?.dirs[dir];if(!cfg)return null;let i;
  if(seq.ms_quadros&&seq.loop){let t=a.elapsed%seq.ms_quadros.reduce((s,v)=>s+v,0);i=0;while(i<seq.frames-1&&t>=seq.ms_quadros[i])t-=seq.ms_quadros[i++];}
  else {const f=Math.floor(a.elapsed/(seq.frame_ms||120));i=seq.loop||walking?f%seq.frames:Math.min(f,seq.frames-1);}
  return {pac:cfg.pac[i],x:a.x-seq.pivot[0],y:a.y-(cfg.sole_y?.[i]??seq.pivot[1])};
 }
 sprite(pac,x,y){const [p,sx,sy,w,h,dx,dy]=pac;this.g.drawImage(this.pages[p],sx,sy,w,h,Math.round(x+dx),Math.round(y+dy),w,h);}
 update(dt){this.time+=dt;for(const a of this.actors){a.elapsed+=dt;if(a.state==='walk'){let remaining=(a.vel||90)*dt/1000;while(remaining>0&&a.path.length){const [x,y]=a.path[0],dx=x-a.x,dy=y-a.y,d=Math.hypot(dx,dy),angle=(Math.round(Math.atan2(dy,dx)/(Math.PI/4))+8)%8;a.dir=['E','SE','S','SW','W','NW','N','NE'][angle];if(d<=remaining){a.x=x;a.y=y;remaining-=d;a.path.shift();}else{a.x+=dx/d*remaining;a.y+=dy/d*remaining;remaining=0;}}if(!a.path.length){a.state='idle';a.elapsed=0;a.next=this.time+6000+Math.random()*6000;const fn=a.arrive;a.arrive=null;fn?.();}}
   else if(a.state==='idle'&&this.time>a.next){a.next=this.time+9000+Math.random()*7000;if(!this.meetingResolve&&!this.bubbles.length)this.roam(a);}
  }}
 draw(){const g=this.g;this.transform();g.setTransform(this.dpr,0,0,this.dpr,0,0);g.fillStyle='#191c23';g.fillRect(0,0,this.width,this.height);g.translate(this.ox,this.oy);g.scale(this.scale,this.scale);g.imageSmoothingEnabled=false;g.drawImage(this.floor,0,0);for(const stage of ['ground','shadow','floor','wall'])for(const l of this.m.layers)if(l.stage===stage&&l.enabled!==false)this.sprite(l.pac,...l.crop);
  const stack=this.m.layers.filter(l=>l.stage==='depth'&&l.enabled!==false).map(l=>({y:l.depth_y,draw:()=>this.sprite(l.pac,...l.crop)}));
  for(const a of this.actors)stack.push({y:a.y,draw:()=>{const frame=this.frame(a);if(frame)this.sprite(frame.pac,frame.x,frame.y);}});stack.sort((a,b)=>a.y-b.y);for(const x of stack)x.draw();
  for(let i=0;i<this.bubbles.length;i++){const b=this.bubbles[i],a=this.actor(b.name),p=this.screen(a.x,a.y-255),age=this.time-b.start;b.el.hidden=age<0;const text=b.text.slice(0,Math.max(0,Math.floor(age/22)));if(b.el.textContent!==text)b.el.textContent=text;b.el.style.left=Math.min(this.width-120,Math.max(120,p[0]+(i?25:-65)))+'px';b.el.style.top=Math.max(12,p[1]-80+i*75)+'px';}
  this.canvas.dataset.state='ready';this.canvas.dataset.frame=String(++this.frames);this.canvas.dataset.walking=String(this.actors.filter(a=>a.state==='walk').length);this.canvas.dataset.poses=this.actors.map(a=>a.name+':'+a.state).join(',');
 }
 loop(now){if(this.dead)return;this.raf=requestAnimationFrame(t=>this.loop(t));if(now-this.last<32)return;const dt=Math.min(1000,now-this.last);this.last=now;if(!this.paused)this.update(dt);this.draw();}
 destroy(){this.dead=true;cancelAnimationFrame(this.raf);this.resize.disconnect();this.meetingResolve?.(false);this.bubbles.forEach(b=>b.el.remove());}
}
