// Browser adaptations of selected ZezOffice rules. All fixtures here are invented.
export const clamp=(v,min,max)=>Math.max(min,Math.min(max,Number(v)));
export function weights(calm,warmth,relationship){
 const fuse=(10-clamp(calm,0,10))/5,kind=clamp(warmth,0,10)/5;
 const raw=relationship>=40?{chat:5,help:3*kind,tease:2,discuss:.5*fuse}:relationship>-20?{chat:4,tease:3.5,help:1.5*kind,discuss:fuse}:{discuss:5*fuse,tease:4,chat:1};
 const sum=Object.values(raw).reduce((a,b)=>a+b,0);return Object.fromEntries(Object.entries(raw).map(([k,v])=>[k,v/sum]));
}
export function chooseEncounter(calm,warmth,relationship,random=Math.random){const w=weights(calm,warmth,relationship);let r=random();for(const[k,v]of Object.entries(w)){r-=v;if(r<=0)return k}return'chat'}
export function compare(items){return items.flatMap(i=>{const d=[];if(!i.present)d.push({code:i.code,type:'missing'});else{if(i.sheetQty!==i.orderQty||Math.abs(i.sheetQty*i.unit-i.orderQty*i.orderUnit)>.01)d.push({code:i.code,type:'value'});if(i.complexity!==i.orderComplexity)d.push({code:i.code,type:'complexity'})}return d});}
export function sleepWindow(events,now){let start=null,out=[];const E=events.map(e=>({...e,t:new Date(e.t).getTime()}));for(let i=0;i<E.length;i++){const{t,e}=E[i];if(e==='off'){if(start===null)start=t;continue}if(start===null)continue;const next=E.slice(i+1).find(x=>x.e==='off')?.t;if((next!==undefined&&next-t<120000)||(next===undefined&&now-t<120000))continue;const hour=new Date(start).getUTCHours();if(t-start>=10800000&&(hour>=19||hour<7))out.push({start,end:t,minutes:(t-start)/60000});start=null}return out.sort((a,b)=>b.minutes-a.minutes)[0]||null;}
export function parseReceipt(text){const rows=[];for(const line of text.split('\n')){const m=line.trim().match(/^(\d{1,2})\s*[xX×]?\s+(.{2,65}?)\s+(?:R\$\s*)?(\d+(?:[.,]\d{2}))$/);if(m&&!/total|taxa|entrega|desconto|subtotal/i.test(m[2]))rows.push({name:m[2].trim(),qty:Number(m[1]),price:Number(m[3].replace(',','.'))});}return rows;}
export function addInventory(inventory,items){const next={...inventory};for(const i of items){if(i.qty<=0||i.qty>500||!i.name)throw Error('Invalid inventory quantity');next[i.name]=(next[i.name]||0)+i.qty}return next;}
export function nextWatering(date,interval){const d=new Date(date+'T12:00:00Z');d.setUTCDate(d.getUTCDate()+interval);return d.toISOString().slice(0,10)}
export const originalFixtureItems=()=>[{code:'9.18',name:'Short video',pt:'Vídeo curto',sheetQty:2,unit:500,orderQty:1,orderUnit:500,complexity:'BAIXA',orderComplexity:'BAIXA',present:true},{code:'3.4',name:'Content planning',pt:'Planejamento de conteúdo',sheetQty:1,unit:750,orderQty:1,orderUnit:750,complexity:'NA',orderComplexity:'NA',present:true}];
