// Visible feature families; every module feature belongs to exactly one group.
export const groups = {
  zbum:[
    {"id":"daily-meals","en":"Meals for the day","pt":"Refeições do dia","icon":"coqueteleira","preview":"meal","features":["hoje","refeicoes","nutrientes","pedidos","semana"]},
    {"id":"pantry","en":"Pantry & purchases","pt":"Despensa e compras","icon":"mochila","preview":"inventory","features":["nota","mochila","loja","rotulos"]},
    {"id":"cooking","en":"Cook & pack","pt":"Cozinhar e montar","icon":"frigideira","preview":"meal","features":["cozinha","marmita"]},
    {"id":"body-rest","en":"Body & rest","pt":"Corpo e descanso","icon":"medidas","preview":"body","features":["medidas","sono","remedios"]}
  ],
  cifrao:[
    {"id":"daily-budget","en":"Today's budget","pt":"Dinheiro do dia","icon":"vida","preview":"finance","features":["ficha","categorizar","missoes","vozes"]},
    {"id":"commitments","en":"Bills & installments","pt":"Faturas e parcelas","icon":"cartao","preview":"cards","features":["fim","cartoes","cartao","maldicoes"]},
    {"id":"money-trail","en":"Where it went","pt":"Para onde foi","icon":"relatorio","preview":"history","features":["cronicas","dano","pergaminho"]},
    {"id":"production-funds","en":"Production funds","pt":"Verba de produção","icon":"escudo","preview":"finance","features":["verba"]}
  ],
  trampo:[
    {"id":"workday","en":"Workday","pt":"Dia de trabalho","icon":"missoes","preview":"work","features":["hoje","lista","busca"]},
    {"id":"supplier-documents","en":"Invoices & orders","pt":"Notas e ordens","icon":"fatura","preview":"invoices","features":["nfs","terc","reemb"]},
    {"id":"monthly-closing","en":"Monthly closing","pt":"Fechamento do mês","icon":"relatorio","preview":"work","features":["fat","comp","paineis"]}
  ],
  zehauze:[
    {"id":"house-routine","en":"House in order","pt":"Casa em dia","icon":"missoes","preview":"home","features":["hoje","tarefas","robo","contas","ajustes"]},
    {"id":"plants","en":"Plant care","pt":"Cuidar das plantas","icon":"alface","preview":"plants","features":["plantas"]},
    {"id":"supplies","en":"Supplies & shopping","pt":"Materiais e compras","icon":"inventario","preview":"inventory","features":["lista","materiais"]},
    {"id":"cats","en":"Cat care","pt":"Cuidar dos gatos","icon":"jogador","preview":"cats","features":["gatos","racao"]}
  ],
  zezen:[
    {"id":"goals-patterns","en":"Goals & patterns","pt":"Metas e padrões","icon":"clareza","preview":"zen","features":["temas","vontades","planos","gastos","ajustes"]},
    {"id":"mood-care","en":"Mood & care","pt":"Humor e cuidado","icon":"neutro","preview":"mood","features":["humor","terapia","hist"]},
    {"id":"private-space","en":"Private space","pt":"Espaço reservado","icon":"escudo","preview":"chat","features":["conversa","entrevista","codigos"]}
  ]
};

