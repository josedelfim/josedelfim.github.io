import {displayName} from './demo-language.mjs';
// Authored bilingual demo corpus. Selection follows the screen/action or the
// encounter outcome, never a random unrelated quote. No live AI or private lines.
const L=(en,pt)=>({en,pt});
export const openings={
 zbum:{
 welcome:L('Food first. The plan works better when there is food.','Comida primeiro. O plano funciona melhor com comida.'),
 hoje:L('Lunch is next. Let’s see what is already in the fridge.','O almoço é o próximo. Vamos ver o que já tem na geladeira.'),
 refeicoes:L('Tell me what went on the plate. I’ll handle the portions.','Diz o que foi pro prato. Eu cuido das porções.'),
 nota:L('A receipt is a very long way of saying we have groceries.','Nota fiscal é um jeito comprido de dizer que tem comida.'),
 mochila:L('Before another grocery run, let’s open the fridge.','Antes de outra ida ao mercado, vamos abrir a geladeira.'),
 loja:L('Bought a whole pack? We’ll count it in portions.','Comprou o pacote inteiro? Vamos contar em porções.'),
 cozinha:L('Ingredients go in. Ready meals come out. One stock, no doubles.','Entram ingredientes, saem pratos prontos. Um estoque só.'),
 marmita:L('A little work now. A lunch that is ready later.','Um trabalho agora. Um almoço pronto depois.'),
 rotulos:L('Let’s check the serving size before trusting that number.','Vamos olhar a porção antes de confiar nesse número.'),
 nutrientes:L('These totals come from the meals you actually logged.','Essa conta vem das refeições que você registrou.'),
 pedidos:L('Delivery counts as dinner too. Let’s record what arrived.','Delivery também é janta. Vamos registrar o que chegou.'),
 medidas:L('Step on. A stable reading is enough; no typing required.','Pode subir. Com a leitura estável, não precisa digitar.'),
 sono:L('Checking the time at night doesn’t mean the night is over.','Olhar a hora de madrugada não quer dizer que a noite acabou.'),
 remedios:L('A dose logged, one less tablet in stock. Both stay in step.','Dose registrada, um comprimido a menos. Tudo junto.'),
 semana:L('Let’s review the days we recorded, including the gaps.','Vamos olhar os dias registrados, sem preencher as lacunas.')
 },
 cifrao:{
 welcome:L('Before you spend it, let’s see how much is already spoken for.','Antes de gastar, vamos ver quanto já tem dono.'),
 ficha:L('Cash is health. The budget is mana. Neither is infinite.','Dinheiro é vida. Orçamento é mana. Nenhum é infinito.'),
 categorizar:L('A mystery charge. My least favourite kind of suspense.','Uma compra misteriosa. Meu tipo menos favorito de suspense.'),
 fim:L('Meet Duezilla. Every unpaid bill feeds the final boss.','O Fim do Mês chegou. Cada conta pendente alimenta o chefão.'),
 cartoes:L('Lil’ Debt and Big Debt. Small names, very real bills.','Nuzinho e Nuzão. O diminutivo não diminui a fatura.'),
 cartao:L('The limit is not income. Shall we look at the bill?','O limite não é renda. Vamos olhar a fatura?'),
 maldicoes:L('Past-you bought it. Present-you has the next instalment.','Você do passado comprou. Você de agora ficou com a parcela.'),
 cronicas:L('The month ended. The receipts have not forgotten.','O mês acabou. As notas não esqueceram.'),
 dano:L('Let’s find where the money went before blaming the coffee.','Vamos achar por onde saiu antes de culpar o cafezinho.'),
 missoes:L('A mission clears when the records say it is done.','A missão termina quando os registros mostram que terminou.'),
 pergaminho:L('No enchantment here. Just every number in one place.','Sem feitiço aqui. Só os números no mesmo lugar.'),
 verba:L('Production money has its own shield. Keep it out of your wallet.','Verba de produção tem escudo próprio. Não mistura na carteira.'),
 vozes:L('Try a purchase. I’ll respond to what happens, not a random slogan.','Teste uma compra. Eu respondo ao que acontece, não ao acaso.')
 },
 trampo:{
 welcome:L('Two documents agree. A third would like a word.','Dois documentos concordam. Um terceiro pediu a palavra.'),
 hoje:L('Start with what needs a decision. The rest can wait its turn.','Comece pelo que precisa de decisão. O resto espera a vez.'),
 lista:L('Give it a name and a deadline. Now we can stop remembering it.','Dê um nome e um prazo. Agora dá para parar de lembrar disso.'),
 busca:L('An order, a supplier, a demand. One search beats three tabs.','Uma OC, um fornecedor, uma demanda. Melhor que três abas.'),
 nfs:L('Read the invoice, match the order, then ask for approval.','Lê a nota, cruza com a OC e aí pede aprovação.'),
 terc:L('A supplier cost belongs to its project. Let’s link the two.','Custo de fornecedor tem projeto. Vamos juntar os dois.'),
 reemb:L('Paid on behalf of production? Keep the evidence with the request.','Pagou pela produção? Deixa a prova junto do pedido.'),
 fat:L('The sheet says two. The order says one. We should settle that.','A planilha diz dois. A OC diz um. Melhor resolver isso.'),
 comp:L('Find the evidence first. Attach it to the right project second.','Acha a prova primeiro. Vincula ao projeto certo depois.'),
 paineis:L('Pending, approved, prepared. Three different things.','Pendente, aprovado, preparado. Três coisas diferentes.')
 },
 zehauze:{
 welcome:L('A house is a collection of things that will need doing again.','Uma casa é um conjunto de coisas que vão precisar ser feitas de novo.'),
 hoje:L('The overdue tasks are up front. They have waited long enough.','As atrasadas vêm primeiro. Já esperaram bastante.'),
 tarefas:L('Done today? The next due date follows the task’s own interval.','Fez hoje? A próxima data segue o intervalo da tarefa.'),
 plantas:L('A photo starts the check. The watering date keeps it going.','A foto começa a avaliação. A data da rega dá continuidade.'),
 lista:L('Low supplies become a shopping list. No second list to remember.','Material acabando vira lista de compras. Sem outra lista para lembrar.'),
 materiais:L('Full, half, low, empty. Close enough to plan the next purchase.','Cheio, metade, pouco, acabou. Dá para planejar a próxima compra.'),
 robo:L('I can check the robot. The start button still belongs to its app.','Eu consulto o robô. O botão de ligar continua no app dele.'),
 gatos:L('Two residents who do not care how well the dashboard works.','Dois moradores que não estão nem aí para o painel.'),
 racao:L('Let’s buy before the bowl becomes a formal complaint.','Vamos comprar antes que o pote vire uma reclamação formal.'),
 contas:L('These are Mr Zero’s numbers. One house, one set of bills.','Essas contas vêm do Cifrão. Uma casa, uma conta só.'),
 ajustes:L('A weekly task and a monthly task need different clocks.','Uma tarefa semanal e uma mensal precisam de relógios diferentes.')
 },
 zezen:{
 welcome:L('We can make the next step small enough to begin.','Podemos deixar o próximo passo pequeno o bastante para começar.'),
 temas:L('Choose what you want to change. Start with one honest record.','Escolha o que quer mudar. Comece com um registro honesto.'),
 humor:L('How was today? A short answer is enough.','Como foi hoje? Uma resposta curta já serve.'),
 terapia:L('Let’s keep a place for the next session.','Vamos reservar um espaço para a próxima sessão.'),
 conversa:L('We can start with the moment that felt difficult.','Podemos começar pelo momento que foi difícil.'),
 entrevista:L('One question at a time. You can pause.','Uma pergunta por vez. Você pode fazer uma pausa.'),
 codigos:L('Use a word that makes sense to you. You choose when to explain it.','Use uma palavra que faça sentido para você. Você decide quando explicar.'),
 vontades:L('An urge can be recorded even when you do not act on it.','Dá para registrar a vontade sem ter feito nada.'),
 planos:L('When this happens, what small thing could you do next?','Quando isso acontecer, qual pequena ação pode vir depois?'),
 hist:L('A record is a way to notice a pattern, not a grade.','Um registro ajuda a perceber um padrão. Não é uma nota.'),
 gastos:L('Spending can add context. It does not explain everything.','Os gastos podem dar contexto. Não explicam tudo.'),
 ajustes:L('The goal should fit what you are trying to change.','A meta precisa combinar com o que você quer mudar.')
 }
};
export const events={
 readSample:L('Items found. Check the quantities before we put anything away.','Achei os itens. Confere as quantidades antes de guardar.'),
 storeSample:L('Groceries put away. The pantry has the new quantities.','Compras guardadas. A despensa já está com as quantidades novas.'),
 'data-consume':L('One less in stock. That is one less thing to count later.','Uma unidade a menos. Uma coisa a menos para contar depois.'),
 'data-food-add':L('One portion added. It is available for the next meal.','Uma porção a mais. Já aparece para a próxima refeição.'),
 logMeal:L('Meal logged. The same portions came out of the pantry.','Refeição registrada. As mesmas porções saíram da despensa.'),
 'data-undo-meal':L('Undone. Those portions are back in stock.','Desfeito. As porções voltaram para o estoque.'),
 makeRecipe:L('Ingredients out, prepared food in. No double-counting.','Saíram ingredientes, entrou comida pronta. Sem contar duas vezes.'),
 newFood:L('New food saved. Now it can join a meal or a recipe.','Alimento salvo. Agora pode entrar na refeição ou na receita.'),
 saveLabel:L('Serving checked. These are the values we will use.','Porção conferida. São esses os valores que vamos usar.'),
 receiveWeighIn:L('Reading saved. The scale did the typing this time.','Leitura salva. A balança digitou dessa vez.'),
 saveMeasurement:L('Check-in saved. We have a new point to compare.','Medição salva. Temos um novo ponto para comparar.'),
 calculateSleep:L('The brief night check stays inside the same night.','A olhada rápida continua dentro da mesma noite.'),
 sleepNoCheck:L('From the last screen-off to morning use: one sleep window.','Da última tela apagada ao uso de manhã: uma janela de sono.'),
 takeSampleTablet:L('The dose and the stock now agree.','O registro da dose e o estoque estão de acordo.'),
 saveMedicineStock:L('Stock corrected. The next reminder uses this quantity.','Estoque corrigido. O próximo lembrete usa essa quantidade.'),
 'data-delivery':L('Order marked as registered in this sample.','Pedido marcado como registrado neste exemplo.'),
 processPurchase:L('Groceries. The description finally gave us something to work with.','Supermercado. A descrição finalmente colaborou.'),
 purchaseManual:L('Your choice takes priority. Even I respect an explicit instruction.','Sua escolha tem prioridade. Até eu respeito uma ordem explícita.'),
 purchaseReview:L('Still unclear. We ask before giving a mystery a category.','Ainda está ambíguo. Perguntar vem antes de inventar categoria.'),
 purchaseFood:L('Food. Dinner has found its place in the ledger.','Alimentação. A janta achou seu lugar no extrato.'),
 purchaseHome:L('Home purchase. That expense belongs with the house.','Compra de casa. Esse gasto fica com as contas da casa.'),
 'data-card':L('There it is. The bill, rather than the reassuring little limit.','Aí está. A fatura, em vez daquele limite tão tranquilizador.'),
 sampleCard:L('Different minion. Same rule: the bill still needs paying.','Outro lacaio. A regra é a mesma: a fatura precisa ser paga.'),
 assignPotExpense:L('Charged to production funds. Your own cash is separate.','Vinculado à verba. O dinheiro próprio fica separado.'),
 closePot:L('Accounted for. This pot is closed to new expenses.','Verba prestada. Esse pote não recebe novos gastos.'),
 checkSampleOrder:L('One mismatch found. Approval waits for the quantities to agree.','Uma divergência. A aprovação espera as quantidades baterem.'),
 billingMatch:L('The quantities match. Now the approval button has a reason to exist.','As quantidades batem. Agora o botão de aprovar faz sentido.'),
 fixSampleOrder:L('Quantities aligned. Ready for your approval.','Quantidades alinhadas. Pronto para sua aprovação.'),
 approveSampleOrder:L('Approved. Next comes a draft, not a sent payment request.','Aprovado. Agora vem um rascunho do pedido de pagamento.'),
 draftSampleOrder:L('Draft prepared. Nothing has been sent.','Rascunho preparado. Nada foi enviado.'),
 addDemand:L('Name, deadline, record. We can stop keeping it in our heads.','Nome, prazo, registro. Já pode sair da cabeça.'),
 'data-demand':L('Status changed. The list now reflects that decision.','Situação alterada. A lista já reflete a decisão.'),
 addInvoice:L('Invoice read. The next step is a person’s approval.','Nota lida. A próxima etapa é a aprovação de uma pessoa.'),
 'data-approve-invoice':L('Approval recorded. The payment request is prepared for review.','Aprovação registrada. Pedido de pagamento pronto para revisão.'),
 prepareProjectOrder:L('Draft saved with the project. It has not been submitted.','Rascunho salvo no projeto. Ainda não foi enviado.'),
 checkEvidence:L('Evidence found. Confirm the project before linking it.','Prova encontrada. Confirme o projeto antes de vincular.'),
 linkEvidence:L('Linked to the project. One fewer loose file.','Vinculado ao projeto. Um arquivo solto a menos.'),
 saveWatering:L('Next watering date saved. The calendar can remember this one.','Próxima rega salva. Essa o calendário pode lembrar.'),
 'data-task-done':L('Task updated. The house’s care log follows along.','Tarefa atualizada. O acompanhamento da casa vai junto.'),
 'data-task-skip':L('Skipped for this round. That is different from done.','Pulada nesta rodada. É diferente de concluída.'),
 addHouseTask:L('Task added with its own interval.','Tarefa criada com seu próprio intervalo.'),
 'data-material-empty':L('Empty. It is now on the house shopping list.','Acabou. Já está na lista de compras da casa.'),
 'data-material-open':L('New unit opened. Stock is full again.','Unidade nova aberta. O estoque está cheio de novo.'),
 'data-material-buy':L('Replenished. It no longer needs buying.','Reposto. Não precisa mais comprar esse item.'),
 addShopping:L('On the list. No need to remember it on the way to the shop.','Está na lista. Não precisa lembrar no caminho do mercado.'),
 'data-shopping':L('Purchase status updated on the list.','Situação da compra atualizada na lista.'),
 saveMaterial:L('Supply saved with its current stock level.','Material salvo com o nível atual do estoque.'),
 'data-cat-care':L('Care record updated. The residents remain unimpressed.','Cuidado atualizado. Os moradores seguem pouco impressionados.'),
 buyCatFood:L('Food added. The bowls have some breathing room.','Ração somada. Os potes ganharam uma folga.'),
 themeUsed:L('Recorded. We can look at what came before it without erasing today.','Registrado. Podemos olhar o que veio antes sem apagar o dia.'),
 themeFree:L('A day without it, recorded. No need to make it a bigger promise.','Um dia sem, registrado. Não precisa virar uma promessa maior.'),
 'data-mood':L('Today’s check-in is saved. You can change it if the day changes.','O registro de hoje está salvo. Dá para mudar se o dia mudar.'),
 scheduleTherapy:L('Session scheduled. It has a place in the week now.','Sessão marcada. Agora ela tem um espaço na semana.'),
 recordTherapy:L('Attendance recorded.','Presença registrada.'),
 logUrge:L('Urge recorded. Noticing it is useful on its own.','Vontade registrada. Perceber já é uma informação útil.'),
 urgePassed:L('It passed. Let’s keep that in the record too.','Passou. Vamos guardar isso no registro também.'),
 savePlan:L('Plan saved beside the trigger. It will be there when you need it.','Plano salvo junto do gatilho. Fica ali quando precisar.'),
 interviewNext:L('What would you like to do differently in that moment?','O que você gostaria de fazer diferente nesse momento?'),
 playZenChat:L('A short pause is enough to begin. Decide the next step afterwards.','Uma pausa curta já é um começo. Depois você decide o próximo passo.'),
 toggleCodes:L('You choose whether to show the meaning in this sample.','Você escolhe se o significado aparece neste exemplo.'),
 saveZenSettings:L('Settings saved. The goal can change as you learn about it.','Ajustes salvos. A meta pode mudar conforme você entende melhor.'),
 error:L('Check the quantities and available stock. Nothing was changed.','Confira as quantidades e o estoque. Nada foi alterado.'),
 noReceipt:L('I couldn’t find items in that text. Try a quantity, a food and a price.','Não achei itens nesse texto. Tente quantidade, alimento e preço.'),
 invalidWatering:L('I need a valid date and an interval from one to ninety days.','Preciso de uma data válida e de um intervalo entre um e noventa dias.')
};
export function demoLine(module,feature,event,lang='en'){
 return (events[event]||openings[module]?.[feature]||openings[module]?.welcome)?.[lang]||'';
}
const openers={
 cifrao:{chat:L('Before dinner, what can we use without buying more?','Antes da janta, o que dá para usar sem comprar mais?'),help:L('I’ll check the budget. Pick something we already have.','Eu confiro o orçamento. Escolhe algo que já temos.'),tease:L('A free evening. How did it acquire a shopping list?','Uma noite livre. Como ela ganhou uma lista de compras?'),discuss:L('No new expense tonight. Let’s work with what is here.','Hoje não entra gasto novo. Vamos usar o que já tem.')},
 zbum:{chat:L('Dinner first? There is rice and chicken in the pantry.','Janta primeiro? Tem arroz e frango na despensa.'),help:L('I’ll make dinner. Can you take the other task?','Eu faço a janta. Você pega a outra tarefa?'),tease:L('We have planned the whole evening. Did anyone plan dinner?','Planejamos a noite toda. Alguém planejou a janta?'),discuss:L('I need dinner and some rest before another task.','Preciso jantar e descansar antes de outra tarefa.')},
 zept:{chat:L('One evening, several requests. Which one actually comes first?','Uma noite, vários pedidos. Qual vem primeiro de verdade?'),help:L('I’ll clear the pending check. Keep dinner simple.','Eu resolvo a conferência pendente. Deixa a janta simples.'),tease:L('The evening is free. Apparently the calendar disagrees.','A noite está livre. Pelo visto a agenda discorda.'),discuss:L('I’m not adding another priority until this one is finished.','Não vou acrescentar prioridade antes de terminar essa.')},
 zehauze:{chat:L('The kitchen needs a little attention before dinner.','A cozinha precisa de um cuidado antes da janta.'),help:L('I’ll clear the kitchen. You can handle the next step.','Eu organizo a cozinha. Você cuida do próximo passo.'),tease:L('The plan is tidy. The kitchen would like a turn.','O plano está organizado. A cozinha pediu a vez.'),discuss:L('The overdue chore needs doing before we add another one.','A tarefa atrasada vem antes de acrescentar outra.')},
 zezen:{chat:L('What would leave us a little room to rest tonight?','O que deixaria um espaço para descansar hoje?'),help:L('Let’s choose one small task and leave a stopping point.','Vamos escolher uma tarefa pequena e um ponto para parar.'),tease:L('Our free evening seems to have been hired for a second shift.','Nossa noite livre parece ter arranjado um segundo turno.'),discuss:L('Rest needs a place in this plan too.','O descanso também precisa entrar nesse plano.')}
};
// Each directed pair answers the first speaker's proposal, in the same outcome.
const replies={
 'cifrao:zbum':[L('Rice and chicken. I can make that work.','Arroz e frango. Eu resolvo com isso.'),L('I’ll cook from stock. No order needed.','Faço com o estoque. Sem pedir delivery.'),L('I said dinner, not a supermarket expedition.','Eu falei janta, não expedição ao mercado.'),L('Fine. I still need to eat; the pantry will do.','Tá. Ainda preciso comer; a despensa resolve.')],
 'cifrao:zept':[L('I’ll check the pending items before we spend.','Confiro as pendências antes de gastar.'),L('I’ll keep the task inside that budget.','Mantenho a tarefa dentro desse orçamento.'),L('The list was free. Completing it is the problem.','A lista saiu de graça. O problema é cumprir.'),L('No new expense. I’ll close what is pending.','Sem gasto novo. Vou fechar o que está pendente.')],
 'cifrao:zehauze':[L('The pantry and the supplies list can answer that.','A despensa e a lista de materiais respondem.'),L('I’ll check what is already in the house.','Vou conferir o que já tem em casa.'),L('The list is what stops us buying things twice.','A lista é o que impede comprar duas vezes.'),L('Agreed. I’ll check the cupboards first.','Combinado. Confiro os armários primeiro.')],
 'cifrao:zezen':[L('Using what we have sounds like one less decision.','Usar o que temos parece uma decisão a menos.'),L('Then let’s keep the evening simple too.','Então vamos deixar a noite simples também.'),L('We can take one thing off the list.','Podemos tirar uma coisa dessa lista.'),L('We can respect that limit and still leave room to rest.','Dá para respeitar esse limite e deixar espaço para parar.')],
 'zbum:cifrao':[L('Pantry dinner. At last, a proposal with no new charge.','Janta da despensa. Enfim uma proposta sem cobrança nova.'),L('I’ll check the bills while you cook.','Confiro as faturas enquanto você cozinha.'),L('I planned the budget. Your rice is within it.','Planejei o orçamento. Seu arroz está dentro dele.'),L('Eat what is there. Rest has no delivery fee.','Come o que tem. Descanso não cobra entrega.')],
 'zbum:zept':[L('Dinner first. Then one pending check.','Janta primeiro. Depois uma conferência pendente.'),L('I’ll handle the document check while you cook.','Cuido dos documentos enquanto você cozinha.'),L('Dinner has been promoted to priority one.','A janta foi promovida à prioridade um.'),L('Then the next task can wait until after dinner.','Então a próxima tarefa espera a janta.')],
 'zbum:zehauze':[L('I’ll clear some counter space.','Vou liberar um espaço na bancada.'),L('I’ll sort the kitchen before you start.','Organizo a cozinha antes de você começar.'),L('The ingredients are there. The clean pan is the challenge.','Os ingredientes estão lá. O desafio é a panela limpa.'),L('Eat first. I’ll keep the chore list short.','Come primeiro. Vou deixar a lista curta.')],
 'zbum:zezen':[L('Dinner sounds like a sensible place to start.','A janta parece um bom começo.'),L('I’ll keep the next step small.','Vou deixar o próximo passo pequeno.'),L('We can stop planning long enough to eat.','Dá para parar de planejar e comer.'),L('That sounds like a clear limit. Let’s keep it.','É um limite claro. Vamos respeitar.')],
 'zept:cifrao':[L('The due bill. It has a deadline with teeth.','A fatura vencendo. Ela tem um prazo com dentes.'),L('I’ll hold off new spending while you check.','Seguro os gastos novos enquanto você confere.'),L('The calendar has expensive taste.','A agenda tem gosto caro.'),L('Close that one. I’m not funding a fourth priority.','Fecha essa. Não vou bancar uma quarta prioridade.')],
 'zept:zbum':[L('Dinner. Nobody checks quantities well while hungry.','Janta. Ninguém confere quantidade com fome.'),L('I’ll cook while you finish that check.','Vou cozinhar enquanto você termina a conferência.'),L('My stomach has filed a request too.','Meu estômago abriu um pedido também.'),L('Finish it. I’ll get the food ready.','Termina. Eu deixo a comida pronta.')],
 'zept:zehauze':[L('Clear the counter, then dinner. Two small steps.','Liberar a bancada e jantar. Duas etapas pequenas.'),L('I’ll keep the kitchen ready while you check.','Deixo a cozinha pronta enquanto você confere.'),L('The calendar did not wash the dishes either.','A agenda também não lavou a louça.'),L('I’ll keep the new chores off the list for now.','Seguro as tarefas novas por enquanto.')],
 'zept:zezen':[L('Whichever lets us finish one thing and stop.','A que permite terminar uma coisa e parar.'),L('Then let’s agree where you can stop afterwards.','Então vamos combinar onde dá para parar depois.'),L('We can decline that calendar invitation.','Dá para recusar esse convite da agenda.'),L('One priority is enough for this stretch.','Uma prioridade basta por agora.')],
 'zehauze:cifrao':[L('Clear it using the supplies we have.','Organiza com os materiais que já temos.'),L('I’ll check the budget while you sort the kitchen.','Confiro o orçamento enquanto você cuida da cozinha.'),L('A tidy kitchen is an excellent free activity.','Cozinha arrumada é uma ótima atividade grátis.'),L('Finish the old chore. No new supplies without checking.','Termina a antiga. Sem comprar material antes de conferir.')],
 'zehauze:zbum':[L('Clear a pan and I’ll take over dinner.','Libera uma panela que eu cuido da janta.'),L('Once the counter is clear, I’ll cook.','Assim que liberar a bancada, eu cozinho.'),L('The kitchen gets a turn. Then the stove gets mine.','A cozinha ganha a vez. Depois eu pego o fogão.'),L('I’ll do the dishes before starting dinner.','Lavo a louça antes de começar a janta.')],
 'zehauze:zept':[L('Which task is blocking dinner? Start there.','Qual tarefa está travando a janta? Começa por ela.'),L('I’ll close the check while you clear the kitchen.','Fecho a conferência enquanto você organiza a cozinha.'),L('The kitchen can join the queue. A short one, ideally.','A cozinha entra na fila. Curta, de preferência.'),L('One old task before a new one. I support the policy.','Uma antiga antes da nova. Apoio a regra.')],
 'zehauze:zezen':[L('A little attention is enough. We can stop there.','Um pouco de cuidado basta. Podemos parar por aí.'),L('Then let’s leave the rest for another time.','Então vamos deixar o resto para outra hora.'),L('We can tidy one corner without giving the whole night away.','Dá para arrumar um canto sem entregar a noite toda.'),L('Let’s do that one chore and leave a stopping point.','Vamos fazer essa e deixar um ponto para parar.')],
 'zezen:cifrao':[L('A pantry dinner. Fewer choices and no new bill.','Janta da despensa. Menos escolhas e nenhuma conta nova.'),L('One small task is within the budget.','Uma tarefa pequena cabe no orçamento.'),L('I refuse to pay overtime to a free evening.','Não vou pagar hora extra para uma noite livre.'),L('Agreed. Rest is the only item here with no price rise.','Certo. Descanso é o único item sem aumento de preço.')],
 'zezen:zbum':[L('Dinner ready early. Then we can actually sit down.','Janta pronta cedo. Aí dá para sentar de verdade.'),L('I’ll make a simple dinner. We can stop after that.','Faço uma janta simples. Dá para parar depois.'),L('Then I’m claiming the dinner break.','Então vou pedir o intervalo da janta.'),L('Yes. Recovery is part of the plan.','É. Descanso faz parte do plano.')],
 'zezen:zept':[L('Finish one pending check. Leave the other tabs closed.','Fechar uma conferência. Deixar as outras abas fechadas.'),L('One task, one stopping point. Very reasonable scope.','Uma tarefa, um ponto final. Escopo bem razoável.'),L('I’ll cancel the second shift before it becomes recurring.','Cancelo o segundo turno antes que vire recorrente.'),L('Then the deadline includes a time to stop.','Então o prazo inclui a hora de parar.')],
 'zezen:zehauze':[L('One clear counter. The rest can wait until tomorrow.','Uma bancada livre. O resto espera até amanhã.'),L('I’ll choose one chore instead of the whole room.','Escolho uma tarefa em vez do cômodo inteiro.'),L('The house can survive an evening without a renovation.','A casa sobrevive a uma noite sem reforma.'),L('I’ll keep the chores inside that limit.','Mantenho as tarefas dentro desse limite.')]
};
const kinds=['chat','help','tease','discuss'];
const canonical=id=>id==='trampo'?'zept':id;
export function encounterLines(from,to,outcome,lang='en'){
 from=canonical(from);to=canonical(to);
 const index=kinds.indexOf(outcome),a=openers[from]?.[outcome],b=replies[`${from}:${to}`]?.[index];
 if(!a||!b)throw Error('Missing directed demo dialogue');
 return [{id:from,name:displayName(from,lang),text:a[lang]},{id:to,name:displayName(to,lang),text:b[lang]}];
}
export const corpusStats={screenOpenings:56,welcomeLines:5,actionResponses:Object.keys(events).length,directedPairs:Object.keys(replies).length,encounterScripts:Object.keys(replies).length*4};
