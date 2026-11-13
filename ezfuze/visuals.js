const baseRender=render;
const originalRender=()=>{baseRender();renderStory()};
function renderStory(){
 const en=language==='en';
 let story=document.querySelector('#problem');
 if(!story){story=document.createElement('section');story.id='problem';document.querySelector('#workflow').before(story)}
 const paragraphs=en?[
  'The releases arrived without a face attached. Photos and videos showing the person arrived elsewhere, with a name in a filename, a caption or an introduction. Connecting those sources was a manual job.',
  'A PDF filename did not always identify the signer. When necessary, the app reads the name inside the form and looks for the corresponding media. Starting from identified media, the workflow also looks for the matching release in the batch.',
  'The solution combines clues across sources to automate the association. When one source is unclear, another can supply the missing information. Unresolved cases remain visible for review.'
 ]:[
  'Os termos chegavam sem uma foto que identificasse o rosto da pessoa. Fotos e vídeos vinham por outras fontes, com o nome no arquivo, na legenda ou na apresentação. Cruzar essas informações era um trabalho manual.',
  'O nome do arquivo PDF nem sempre identificava quem assinou. Quando necessário, o app lê o nome dentro do termo e procura a mídia correspondente. Partindo de uma mídia identificada, o fluxo também busca o termo da pessoa no lote.',
  'A solução cruza pistas entre as fontes para automatizar a associação. Quando uma fonte não é clara, outra pode completar a informação. O que continuar incerto fica visível para revisão.'
 ];
 story.replaceChildren(textNode('p',en?'THE STARTING PROBLEM':'O PROBLEMA DE ORIGEM','eyebrow'),textNode('h2',en?'The form was in one place. The face was in another.':'O termo vinha de um lado. O rosto vinha de outro.'));
 const layout=document.createElement('div');layout.className='story-layout';
 const problem=document.createElement('div');problem.append(textNode('h3',en?'Before: connect everything by hand':'Antes: conectar tudo à mão'),textNode('p',paragraphs[0]));
 const solution=document.createElement('div');solution.append(textNode('h3',en?'The solution: cross-reference the sources':'A solução: cruzar as fontes'),textNode('p',paragraphs[1]),textNode('p',paragraphs[2]));layout.append(problem,solution);story.append(layout);
 const routes=document.createElement('div');routes.className='story-routes';routes.append(textNode('p',en?'Form → read the name → find the photo or video':'Termo → ler o nome → buscar a foto ou vídeo'),textNode('p',en?'Identified photo or video → find the matching form':'Foto ou vídeo identificado → buscar o termo correspondente'));story.append(routes);
 copy[language].intro=en?'Image releases without a face attached. People’s photos and names arriving through other sources. EzFuze cross-references them to automate a job once done by hand.':'Termos sem identificação facial. Fotos e nomes chegando por outras fontes. O EzFuze cruza essas informações para automatizar um trabalho antes feito à mão.';
 document.querySelector('[data-t="intro"]').textContent=copy[language].intro;
 const batch=document.createElement('div');batch.className='batch-story';
 batch.append(textNode('h3',en?'One batch pass. Only uncertain cases come back to you.':'Uma rodada no lote. Só as dúvidas voltam para você.'),textNode('p',en?'The app cross-references the whole batch in both directions, comparing forms with identified media and media with the available forms. It resolves supported associations together and leaves uncertain cases for human review.':'O app cruza o lote inteiro nos dois sentidos: dos termos para as mídias identificadas e das mídias para os termos disponíveis. Resolve as associações com evidência em conjunto e separa os casos incertos para revisão humana.'));
 const sources=document.createElement('div');sources.className='batch-sources';
 for(const label of en?['Google Drive links','Local folder','WhatsApp ZIP']:['Links do Google Drive','Pasta local','ZIP do WhatsApp'])sources.append(textNode('span',label));batch.append(sources);
 for(const after of [false,true]){
  const row=document.createElement('div');row.className='comparison-row';
  row.append(textNode('h4',en?(after?'AFTER EZFUZE':'BEFORE EZFUZE'):(after?'DEPOIS DO EZFUZE':'ANTES DO EZFUZE')),
   textNode('p',en?(after?'Most automated. A few to do manually.':'Everything done manually.'):(after?'A maioria automatizada. Poucos casos para fazer à mão.':'Tudo feito manualmente.')));
  const blocks=document.createElement('div');blocks.className='batch-blocks';blocks.setAttribute('role','img');blocks.setAttribute('aria-label',en?(after?'Most items automated; a few for manual review':'All items require manual work'):(after?'Maioria automatizada; poucos itens para revisão manual':'Todos os itens exigem trabalho manual'));
  for(let i=0;i<40;i++){const tile=document.createElement('span');tile.className=after&&i<35?'resolved':'review';tile.setAttribute('aria-hidden','true');blocks.append(tile)}
  row.append(blocks);batch.append(row)
 }
 const logic=document.createElement('div');logic.className='matching-logic';
 logic.append(textNode('h3',en?'Each confirmed match narrows the remaining search.':'Cada par confirmado reduz as opções restantes.'),textNode('p',en?'The candidate pools are mutually exclusive: once a person and a form are securely matched, they leave the unresolved pool. Each pass compares the remaining evidence with fewer candidates, making other associations clearer. Exclusion helps narrow the search; conflicting information still goes to review.':'As bases de candidatos são autoexcludentes: quando uma pessoa e um termo formam um par seguro, saem do conjunto ainda sem associação. A cada passada, as pistas restantes são comparadas com menos candidatos e outros cruzamentos ficam mais evidentes. A exclusão reduz o cerco; informações conflitantes continuam para revisão.'));
 const blockers=document.createElement('div');blockers.className='review-reasons';
 for(const [title,body] of en?[
  ['Illegible handwriting','The name cannot be read reliably.'],['Missing form or identified photo','One side has no matching source or clear identification.'],['Inconsistent information','Names or other clues disagree across the sources.']
 ]:[['Letra ilegível','O nome não pode ser lido com segurança.'],['Termo ou foto identificada ausente','Falta a fonte correspondente ou uma identificação clara de um dos lados.'],['Informação inconsistente','Nomes ou outras pistas divergem entre as fontes.']]){const item=document.createElement('article');item.append(textNode('h4',title),textNode('p',body));blockers.append(item)}
 logic.append(textNode('h3',en?'What still needs your attention':'O que ainda precisa da sua atenção'),blockers);batch.append(logic);story.append(batch);
 document.querySelector('[data-t="sourceNote"]')?.remove();
}
const casePortraits=['assets/fictional-portrait.png','assets/fictional-davi.png','assets/fictional-higo.png'];
function portraitImage(){const img=document.createElement('img');img.src=casePortraits[example];img.dataset.person=copy[language].names[example];img.alt=(language==='en'?'Fictional portrait for the example: ':'Retrato fictício para o exemplo: ')+copy[language].names[example];return img}
function textNode(tag,text,className=''){const el=document.createElement(tag);el.textContent=text;el.className=className;return el}
function portrait(){const figure=document.createElement('figure');figure.className='person-media';figure.append(portraitImage(),textNode('figcaption',copy[language].names[example]+' · '+(language==='en'?'fictional portrait':'retrato fictício')));return figure}
function documentPreview(withPhoto=false){
 const paper=document.createElement('div');paper.className='document-preview';
 paper.append(textNode('small',language==='en'?'RELEASE FORM · RECONSTRUCTION':'TERMO DE AUTORIZAÇÃO · RECONSTRUÇÃO'));
 if(withPhoto){const img=portraitImage();img.className='inserted-photo';paper.append(img)}
 paper.append(textNode('h4','TERMO DE AUTORIZAÇÃO DE USO DE IMAGEM'),textNode('p','Pelo presente instrumento, eu'));
 if(example===0){const img=document.createElement('img');img.src='assets/real-name-field.png';img.className='manuscript';img.alt='Agostinho Nunes Jesus — campo manuscrito real';paper.append(img)}
 else paper.append(textNode('div',copy[language].names[example],'written-name'));
 paper.append(textNode('p',language==='en'?'Name field highlighted for reading':'Campo de nome destacado para leitura','field-caption'));
 for(let i=0;i<5;i++)paper.append(textNode('div','','document-line'));
 paper.append(textNode('p',language==='en'?'Illustrative document · not valid for authorization':'Documento ilustrativo · sem validade para autorização','paper-note'));return paper
}
render=function(){originalRender();const en=language==='en',visual=$('#visual');visual.classList.add('photo-workflow');visual.replaceChildren();const name=copy[language].names[example];const personLabel=example===1?'Davi Prates':name;if(step===0){const pair=document.createElement('div');pair.className='input-pair';if(example!==2){const source=document.createElement('div');source.className='document-source';source.append(documentPreview(),textNode('span',example===1?'David Alves.pdf':'17-25-55_original.png','asset-name'));pair.append(source)}const media=document.createElement('div');media.className='media-source';media.append(portrait(),textNode('span',example===0?personLabel:example===1?'Davi Prates.MOV':'IMG_1082.MOV','asset-name'));if(example!==0)media.append(textNode('span','▶ 00:03','video-marker'));pair.append(media);visual.append(pair)}else if(step===1){if(example===0)visual.append(documentPreview());else{const band=document.createElement('div');band.className='reading-band';band.append(portrait(),file(en?'NAME EVIDENCE':'PISTA DE NOME',name));visual.append(band)}}else if(step===2){const pair=document.createElement('div');pair.className='matching-pair';pair.append(portrait());const connection=document.createElement('div');connection.className='connection';connection.append(textNode('strong',example===2?'?':'✓'),textNode('span',en?(example===2?'No form found':'Name evidence matched'):(example===2?'Termo não encontrado':'Pistas de nome associadas')));const term=document.createElement('div');term.className='matched-form';if(example===2){term.append(textNode('strong',en?'Missing release':'Termo ausente'),textNode('p',name))}else term.append(documentPreview());pair.append(connection,term);visual.append(pair)}else if(example===2){const audit=document.createElement('div');audit.className='audit-person';audit.append(portrait(),file(en?'UNLINKED PERSON':'PESSOA SEM TERMO',name,en?'Locate the missing release':'Localizar o termo ausente'));visual.append(audit)}else{visual.append(documentPreview(true),textNode('span',name+'.pdf','export-name'),textNode('span',en?'Photo inserted + named PDF':'Foto inserida + PDF nomeado','export-status'))}const notice=textNode('p',en?'Illustrative portrait, not the real person named in the source files. Document layouts are reconstructed.':'Retrato ilustrativo, não é a pessoa real citada nos arquivos. O layout dos documentos foi reconstruído.','identity-note');visual.append(notice)};
const styles=document.createElement('link');styles.rel='stylesheet';styles.href='visuals.css';document.head.append(styles);render();
