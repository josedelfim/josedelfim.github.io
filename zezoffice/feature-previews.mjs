import {cardName} from './demo-language.mjs';
// Compact illustrations of fictional demo state, never a live account reading.
export function preview(group,c){
 const {t,icon,data,extras,foodName,esc}=c;
 const stat=(iconId,value,label)=>`<span class="glance-stat">${icon(iconId)}<span><b>${value}</b><small>${label}</small></span></span>`;
 const bar=(value,color='')=>`<span class="glance-bar"><i style="width:${Math.min(100,Math.max(0,value))}%;${color?'background:'+color:''}"></i></span>`;
 const food=id=>`<span class="glance-food">${icon(({Eggs:'ovo',Rice:'arroz',Yogurt:'iogurte'})[id])}<b>${data.pantry[id]||0}</b><small>${esc(foodName(id))}</small></span>`;
 if(group.preview==='inventory')return c.module==='zbum'?`<span class="glance-foods">${['Eggs','Rice','Yogurt'].map(food).join('')}</span>`:stat('faxina',extras.materials.filter(x=>['low','empty'].includes(x.level)).length,t('to restock','para repor'))+bar(65);
 if(group.preview==='meal'){
  if(group.id==='cooking')return `<span class="glance-flow">${icon('arroz')}${icon('sassami')}<b>→</b>${icon('panela')}<b>→</b>${icon('marmita')}</span><small>${extras.recipes.length} ${t('preparations in this demo','preparos nesta demo')}</small>`;
  const grams=extras.meals.reduce((n,m)=>n+m.protein,0);return stat('coqueteleira',grams+' g',t('protein logged','proteína registrada'))+bar(grams);
 }
 if(group.preview==='body')return stat('peso',data.reading?data.reading.kg.toFixed(1)+' kg':t('78.4 kg','78,4 kg'),t('sample weigh-in','pesagem de exemplo'))+`<span class="glance-inline">${icon('sono')} ${data.sleep?Math.floor(data.sleep.minutes/60)+'h '+data.sleep.minutes%60+'m':t('Sleep & daily care','Sono e cuidado diário')}</span>`;
 if(group.preview==='finance'){
  if(group.id==='production-funds'){const n=extras.pot.received-extras.pot.expenses.reduce((a,b)=>a+b,0);return stat('escudo','R$ '+n,t('sample pot balance','saldo do pote de exemplo'));}
  return stat('vida',t('R$ 2,400','R$ 2.400'),t('sample cash','caixa de exemplo'))+bar(65,'#e5484d');
 }
 if(group.preview==='cards')return `<span class="glance-inline">${icon('cartao')} ${cardName(0,c.en?'en':'pt')} <b>R$ 550</b></span><span class="glance-inline">${icon('corte')} ${t('Bills + installments','Faturas + parcelas')}</span>`;
 if(group.preview==='history')return `<span class="glance-chart">${[45,74,56,89,62,78].map((v,i)=>`<i style="height:${v}%;background:${['#5fd38d','#ffcc4d','#e0603f'][i%3]}"></i>`).join('')}</span><small>${t('Categories · monthly comparison','Categorias · comparação mensal')}</small>`;
 if(group.preview==='invoices')return `<span class="glance-flow">${icon('documento')}<b>→</b>${icon('ordem_compra')}<b>→</b>${icon('pedido_producao')}</span><small>${extras.invoices.length} ${t('sample invoices reviewed','NFs de exemplo lidas')}</small>`;
 if(group.preview==='work')return group.id==='monthly-closing'?`<span class="glance-comparison"><span>${t('SHEET','PLANILHA')}<b>2</b></span><strong>${data.items[0].orderQty===2?'=':'≠'}</strong><span>${t('ORDER','OC')}<b>${data.items[0].orderQty}</b></span></span>`:stat('missoes',extras.demands.filter(x=>!x.done).length,t('open demo tasks','demandas da demo'))+`<span class="glance-inline">${icon('pasta')} ${t('Search · due dates · queue','Busca · prazos · fila')}</span>`;
 if(group.preview==='home'){const n=extras.tasks.filter(x=>!x.done).length;return stat('relogio',n,t('sample tasks pending','tarefas de exemplo'))+`<span class="glance-inline">${icon('aspirador_robo')} ${t('Robot status','Estado do robô')}</span>`;}
 if(group.preview==='plants')return `<span class="glance-flow">${icon('alface')}<b>→</b>${icon('regar')}<b>${data.watering?data.watering.slice(8,10)+'/'+data.watering.slice(5,7):'7d'}</b></span><small>${t('Photo · care · next watering','Foto · cuidado · próxima rega')}</small>`;
 if(group.preview==='cats')return `<span class="glance-cats"><img src="evolution/media/severino-idle.png" alt=""><img src="evolution/media/haroldo-idle.png" alt="">${icon('racao')}</span><small>Severino + Haroldo</small>`;
 if(group.preview==='zen')return `<span class="glance-flow">${icon('clareza')}<b>${t('If…','Se…')}</b><b>→</b>${icon('cha')}<b>${t('then…','então…')}</b></span><small>${t('Goals · triggers · plans','Metas · gatilhos · planos')}</small>`;
 if(group.preview==='mood')return `<span class="glance-moods">${['feliz','neutro','preocupado'].map(icon).join('')}</span><small>${t('Check-in · therapy · history','Check-in · terapia · histórico')}</small>`;
 return `<span class="glance-flow">${icon('vozes')}<span class="glance-bubble">…</span>${icon('chave')}</span><small>${t('Conversation · interview · codes','Conversa · entrevista · códigos')}</small>`;
}
