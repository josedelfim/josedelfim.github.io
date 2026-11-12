const labels={narrator:['Narrator','Narração'],cifrao:['Mr Zero','Cifrão'],zept:['Zept','Zept'],zbum:['ZBum','ZBum'],zehauze:['ZeHouse','Zehauze']};
const copy=(en,pt,lang)=>lang==='pt'?pt:en;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const podcastScenes=[
 {id:'microphone',title:['A microphone moves in','Um microfone se muda para a casa'],subtitle:['Why the podcast belongs in this portfolio.','Por que o podcast entrou neste portfólio.'],lines:[
  ['narrator','A podcast has appeared in the house. Mr Zero would like to know whether we are charging rent.','Um podcast apareceu na casa. Cifrão gostaria de saber se estamos cobrando aluguel.'],
  ['cifrao','The microphone is occupying valuable floor space.','O microfone está ocupando um espaço financeiramente relevante.'],
  ['zept','It uses the same cast as the app, and the app feeds it. Episode twelve was briefed with a dossier of two days of decisions made in this house.','Ele usa o mesmo elenco do app, e o app alimenta o podcast. O episódio doze foi pautado por um dossiê de dois dias de decisões tomadas nesta casa.'],
  ['zbum','Finally. Something to listen to while cooking, instead of another screen telling me to cook.','Finalmente. Alguma coisa para ouvir enquanto cozinho, em vez de outra tela mandando cozinhar.'],
  ['narrator','José created the tools and developed the characters as parts of the same project. In the app, they help organise everyday tasks. In the podcast, they turn a subject into a scene.','José criou as ferramentas e desenvolveu os personagens como partes do mesmo projeto. No app, eles ajudam a organizar tarefas. No podcast, transformam um assunto em cena.'],
  ['zept','Same cast. Different job.','Mesmo elenco. Outro trabalho.'],
  ['narrator','This short scene was written for the portfolio.','Esta cena curta foi escrita para o portfólio.'],
  ['cifrao','Excellent. A public appearance with no disclosure of my accounts.','Excelente. Uma aparição pública sem divulgação das minhas contas.']
 ]},
 {id:'decision',title:['Give the decision a voice','Dar voz à decisão'],subtitle:['The app shows the action. The podcast tells the story.','O app mostra a ação. O podcast conta a história.'],lines:[
  ['narrator','The house is preparing a demonstration.','A casa está preparando uma demonstração.'],
  ['zehauze','I have arranged the food icons. They are now tidier than the actual kitchen.','Organizei os ícones dos alimentos. Agora estão mais arrumados que a cozinha de verdade.'],
  ['zept','A receipt becomes items to review. Confirm them, and the pantry updates. No need to narrate every button.','Uma nota vira itens para conferir. Confirmou, a despensa atualiza. Não precisa narrar cada botão.'],
  ['cifrao','Explain who made the rules. Otherwise the software gets the credit.','Explique quem criou as regras. Senão o programa leva o crédito.'],
  ['narrator','José defines the problem, the characters and the review criteria. AI helps with implementation and drafts; he checks the result and asks for revisions.','José define o problema, os personagens e os critérios de revisão. A IA ajuda na implementação e nos rascunhos; ele confere o resultado e pede ajustes.'],
  ['zbum','If the egg disappears from the inventory, it had better have become lunch.','Se o ovo sumiu do estoque, é bom que tenha virado almoço.'],
  ['zept','That is a remarkably useful acceptance test.','Isso é um critério de aprovação surpreendentemente útil.'],
  ['narrator','The app can show the egg. Whether to buy the protein powder is a different conversation.','O app consegue mostrar o ovo. Comprar ou não o whey é outra conversa.'],
  ['zbum','Get the powder. Protein is not a luxury.','Compra o whey. Proteína não é luxo.'],
  ['cifrao','Then it can wait until the card bill clears.','Então pode esperar a fatura do cartão fechar.'],
  ['narrator','Same fact, two opinions, and José decides. The app makes the action visible. The podcast gives the decision a voice. Both start with the same question: what would make this useful in everyday life?','Mesmo fato, duas opiniões, e quem decide é o José. O aplicativo mostra a ação. O podcast dá voz à decisão. Os dois começam na mesma pergunta: o que tornaria isso útil no dia a dia?']
 ]}
];
let selected='microphone',dispose=()=>{};
export function stopPodcast(){dispose();dispose=()=>{};}
export function podcastView(lang){
 const scene=podcastScenes.find(s=>s.id===selected),l=lang==='pt'?1:0;
 return `<section class="podcast-page"><div class="eyebrow">${copy('PODCAST DO ZÉ / TWO PUBLIC SCENES','PODCAST DO ZÉ / DUAS CENAS PÚBLICAS',lang)}</div><h1>${copy('The house has a voice.','A casa tem voz.',lang)}</h1><p class="podcast-intro">${copy('I wanted something engaging to listen to while doing everyday tasks. I developed a chapter-based podcast, with research, narration and characters who question each other. The Zés run the app’s modules and react inside the episodes, and what happens in the project feeds the scripts.','Eu queria algo envolvente para ouvir enquanto fazia as tarefas do dia. Desenvolvi um podcast em capítulos, com pesquisa, narração e personagens que questionam uns aos outros. Os Zés cuidam dos módulos do app e reagem dentro dos episódios, e o que acontece no projeto alimenta os roteiros.',lang)}</p><div class="podcast-choices" role="group" aria-label="${copy('Choose a scene','Escolher uma cena',lang)}">${podcastScenes.map((s,i)=>`<button class="podcast-choice" data-podcast-scene="${s.id}" aria-pressed="${s.id===selected}"><span class="eyebrow">${copy('SCENE','CENA',lang)} ${i+1}</span><strong>${esc(s.title[l])}</strong><span>${esc(s.subtitle[l])}</span></button>`).join('')}</div><div class="podcast-stage panel"><div class="panel-bar"><span>${copy('ON THE AIR','NO AR',lang)}</span><span class="micro">${copy('WRITTEN FOR THIS PORTFOLIO','ESCRITO PARA ESTE PORTFÓLIO',lang)}</span></div><div class="podcast-now"><div class="podcast-reels" aria-hidden="true"><i></i><span>ZEZ / FM</span><i></i></div><div><h2>${esc(scene.title[l])}</h2><p>${esc(scene.subtitle[l])}</p></div></div><div class="podcast-controls"><button class="button-primary" id="podcastPlay">${copy('Listen','Ouvir',lang)} ▶</button><button id="podcastPause" disabled>${copy('Pause','Pausar',lang)}</button><button id="podcastStop" disabled>${copy('Restart','Recomeçar',lang)}</button><span id="podcastStatus" role="status">${copy('Ready · recorded voices','Pronto · voz do dispositivo',lang)}</span></div><p class="podcast-voice-note">${copy('Voices generated with Kokoro, an open-weight text-to-speech model that I ran on my own server. These are new public samples, not extracts from private episodes.','Leitura narrada com as vozes do navegador. Os nomes são anunciados. São amostras públicas novas, não trechos dos episódios privados.',lang)}</p><div class="podcast-script" aria-label="${copy('Scene script','Roteiro da cena',lang)}">${scene.lines.map(([id,en,pt],i)=>`<div class="podcast-line" data-podcast-line="${i}">${id!=='narrator'?`<img src="identity/${id}-retrato.png" alt="">`:'<span class="podcast-narrator" aria-hidden="true">◉</span>'}<div><strong>${labels[id][l]}</strong><p>${esc(l?pt:en)}</p></div></div>`).join('')}</div></div><div class="podcast-bridge"><p>${copy('My contribution: the format, research direction, chapter structure, character voices, feedback and revisions. AI assists with scripts and production. The app and podcast share a cast, and project decisions become episode material; the public samples are authored scenes.','Minha contribuição: formato, direção da pesquisa, estrutura dos capítulos, vozes dos personagens, feedback e revisão. A IA auxilia nos roteiros e na produção. App e podcast compartilham o elenco, e as decisões do projeto viram material dos episódios; as amostras públicas são cenas escritas.',lang)}</p><button data-page="app">${copy('Try the module demos','Abrir as demos dos módulos',lang)} ↗</button></div></section>`;
}
export function bindPodcast(lang,render){
 const synth=window.speechSynthesis,play=document.getElementById('podcastPlay'),pause=document.getElementById('podcastPause'),stop=document.getElementById('podcastStop'),status=document.getElementById('podcastStatus');
 const scene=podcastScenes.find(s=>s.id===selected),l=lang==='pt'?1:0;let active=false,paused=false,index=0,generation=0,current;
 const gravado=l===0,player=gravado?new Audio():null;let intervalo=0;if(player)player.preload='auto';
 const lineNodes=[...document.querySelectorAll('[data-podcast-line]')];
 const text=(en,pt)=>copy(en,pt,lang);
 const clear=()=>lineNodes.forEach(e=>{e.classList.remove('is-speaking');e.removeAttribute('aria-current');});
 const cancel=()=>{active=false;paused=false;generation++;clearTimeout(intervalo);if(player){player.onended=player.onerror=player.onplaying=null;player.pause();}else synth?.cancel();clear();play.disabled=false;pause.disabled=true;stop.disabled=true;pause.textContent=text('Pause','Pausar');};
 const mostra=(id,token)=>{if(token!==generation)return;clear();const node=lineNodes[index];node.classList.add('is-speaking');node.setAttribute('aria-current','true');node.scrollIntoView({block:'nearest',behavior:'smooth'});status.textContent=text('Speaking','Falando')+' · '+labels[id][l];};
 const falhou=()=>{cancel();status.textContent=text('Audio unavailable here. The full script is below.','Voz indisponível aqui. O roteiro completo está abaixo.');};
 const toca=token=>{
  if(!active||token!==generation)return;
  if(index>=scene.lines.length){cancel();status.textContent=text('Scene complete','Cena concluída');return;}
  const id=scene.lines[index][0];
  player.onplaying=()=>mostra(id,token);
  player.onended=()=>{if(token!==generation)return;index++;intervalo=setTimeout(()=>toca(token),280);};
  player.onerror=()=>{if(token===generation)falhou();};
  player.src=`podcast-audio/${scene.id}-${index}.mp3`;
  player.play().catch(()=>{if(token===generation)falhou();});
 };
 const say=token=>{
  if(!active||token!==generation)return;
  if(index>=scene.lines.length){cancel();status.textContent=text('Scene complete','Cena concluída');return;}
  const [id,en,pt]=scene.lines[index];current=new SpeechSynthesisUtterance(labels[id][l]+'. '+(l?pt:en));current.lang=l?'pt-BR':'en-GB';
  const voices=synth.getVoices().filter(v=>v.lang.toLowerCase().startsWith(l?'pt':'en'));
  if(voices.length)current.voice=voices[(id==='narrator'?0:id==='cifrao'?1:id==='zept'?2:3)%voices.length];
  current.rate=id==='zept'?1.02:0.96;current.pitch=id==='cifrao'?0.85:id==='zbum'?1.08:1;
  current.onstart=()=>{if(token!==generation)return;clear();const node=lineNodes[index];node.classList.add('is-speaking');node.setAttribute('aria-current','true');node.scrollIntoView({block:'nearest',behavior:'smooth'});status.textContent=text('Speaking','Falando')+' · '+labels[id][l];};
  current.onend=()=>{if(token===generation){index++;say(token);}};
  current.onerror=e=>{if(token!==generation||['canceled','interrupted'].includes(e.error))return;cancel();status.textContent=text('Voice unavailable here. The full script is below.','Voz indisponível aqui. O roteiro completo está abaixo.');};
  synth.speak(current);
 };
 play.onclick=()=>{if(!gravado&&!synth)return;cancel();active=true;index=0;play.disabled=true;pause.disabled=false;stop.disabled=false;status.textContent=text('Starting voice…','Iniciando voz…');if(gravado)toca(generation);else say(generation);};
 pause.onclick=()=>{if(!active)return;paused=!paused;if(gravado){if(paused)player.pause();else player.play().catch(falhou);}else if(paused)synth.pause();else synth.resume();pause.textContent=paused?text('Resume','Continuar'):text('Pause','Pausar');status.textContent=paused?text('Paused','Pausado'):text('Speaking','Falando');};
 stop.onclick=()=>{cancel();status.textContent=text('Ready · recorded voices','Pronto · voz do dispositivo');};
 document.querySelectorAll('[data-podcast-scene]').forEach(b=>b.onclick=()=>{selected=b.dataset.podcastScene;render();});
 const onHidden=()=>{if(document.hidden){cancel();status.textContent=text('Stopped when leaving the page','Leitura interrompida ao sair da página');}};
 document.addEventListener('visibilitychange',onHidden);
 if(!gravado&&(!synth||typeof SpeechSynthesisUtterance==='undefined')){play.disabled=true;status.textContent=text('Read the scene below · voice not supported','Leia a cena abaixo · voz não suportada');}
 dispose=()=>{cancel();document.removeEventListener('visibilitychange',onHidden);};
}
