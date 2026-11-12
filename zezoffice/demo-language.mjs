// Presentation aliases only; source IDs, artwork and the private app stay intact.
export const aliases={
 cifrao:{en:'Mr Zero',pt:'Cifrão'},zbum:{en:'ZBum',pt:'ZBum'},
 zept:{en:'Zept',pt:'Zept'},trampo:{en:'Zept',pt:'Zept'},
 zehauze:{en:'ZeHouse',pt:'Zehauze'},zezen:{en:'Zezen',pt:'Zezen'}
};
export const displayName=(id,lang='en')=>aliases[id]?.[lang]||id;
export const cardName=(index,lang='en')=>(lang==='en'?['Lil’ Debt','Big Debt']:['Nuzinho','Nuzão'])[index];
export const bossName=(lang='en')=>lang==='en'?'Duezilla':'Fim do Mês';
export function localizeCopy(value,lang='en'){
 if(lang!=='en')return value;
 return String(value).replace(/CIFRÃO/g,'MR ZERO').replace(/Cifrão/g,'Mr Zero').replace(/Zehauze/g,'ZeHouse').replace(/Nuzinho/g,'Lil’ Debt').replace(/Nuzão/g,'Big Debt').replace(/Sacola Faminta/g,'Snackbag');
}
