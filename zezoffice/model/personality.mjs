import model from './model-data.mjs';
export {model};
const byId=new Map(model.personas.map(p=>[p.id,p]));
export function relation(from,to){const i=model.ids.indexOf(from),j=model.ids.indexOf(to);if(i<0||j<0||i===j)throw new Error('Choose two different residents');return model.relationship.initialMatrix[i][j];}
export function analyzePair(from,to,{badMood=false,quantile=.9}={}){
 const a=byId.get(from),b=byId.get(to);if(!a||!b||from===to)throw new Error('Choose two different residents');
 const mean=id=>(a.traits[id]+b.traits[id])/2,ab=relation(from,to),ba=relation(to,from),r=(ab+ba)/2;
 const calm=mean('calma'),warmth=mean('afabilidade'),fuse=(10-calm)/5,kind=warmth/5,bad=badMood?1:0;
 const weights=r>=40?{chat:5,help:3*kind,tease:2+2*bad,discuss:(.5+bad)*fuse}:r> -20?{chat:4,tease:3.5,help:1.5*kind,discuss:(1+2*bad)*fuse}:{discuss:5*fuse,tease:4,chat:1};
 const total=Object.values(weights).reduce((n,v)=>n+v,0),probabilities=Object.fromEntries(Object.entries(weights).map(([k,w])=>[k,w/total]));
 let remaining=Math.max(0,Math.min(.999999,Number.isFinite(quantile)?quantile:.9)),outcome=Object.keys(weights).at(-1);
 for(const[k,p]of Object.entries(probabilities)){remaining-=p;if(remaining<0){outcome=k;break;}}
 return {from,to,ab,ba,relationship:r,calm,warmth,extroversion:mean('extroversao'),opportunityMultiplier:mean('extroversao')/5,badMood,weights,probabilities,outcome,knownDelta:outcome==='tease'&&r>=60?1:null};
}
export function directedEdges(){return model.ids.flatMap(from=>model.ids.filter(to=>to!==from).map(to=>({from,to,value:relation(from,to)})));}
export function moodCells(id){const p=byId.get(id);if(!p)throw new Error('Unknown resident');return Object.entries(p.moods).map(([key,name])=>({key,name,origin:key===p.moodOrigin}));}
