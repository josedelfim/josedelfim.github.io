/* Retained condition/action kernel from ZezOffice financial-rules.js.
Adapted there from Actual Budget. MIT, Copyright James Long.
See ../LICENSE-actual.txt. */
(function(){
const normalize=x=>String(x??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function condition(t,c){const value=t[c.field];switch(c.op){case'is':return value===c.value;case'isNot':return value!==c.value;case'contains':return normalize(value).includes(normalize(c.value));case'doesNotContain':return !normalize(value).includes(normalize(c.value));case'matches':return typeof c.value==='string'&&c.value.length<=500&&new RegExp(c.value,'i').test(String(value??''));case'lt':return typeof value==='number'&&value<c.value;case'lte':return typeof value==='number'&&value<=c.value;case'gt':return typeof value==='number'&&value>c.value;case'gte':return typeof value==='number'&&value>=c.value;case'isapprox':return typeof value==='number'&&typeof c.value==='number'&&Math.abs(value-c.value)<=Math.abs(c.value)*.1;case'isbetween':return typeof value==='number'&&Number.isFinite(c.value?.num1)&&Number.isFinite(c.value?.num2)&&value>=Math.min(c.value.num1,c.value.num2)&&value<=Math.max(c.value.num1,c.value.num2);case'oneOf':return Array.isArray(c.value)&&c.value.includes(value);case'notOneOf':return Array.isArray(c.value)&&!c.value.includes(value);default:return false}}
function run(t,list){if(t.manual||t.userEdited||t.closedUnidentified||t.review)return t;let out={...t};const rank={pre:0,default:1,post:2};for(const r of list.map((r,i)=>({...r,_order:i})).sort((a,b)=>(rank[a.stage||'default']??1)-(rank[b.stage||'default']??1)||a._order-b._order)){if(!matches(out,r))continue;for(const action of r.actions||[]){if(action.op!=='set'||!['title','category','classification','purpose'].includes(action.field))throw Error('A regra tentou alterar um campo financeiro protegido');if(action.field==='title'){out.originalTitle=out.originalTitle||out.title;out.title=String(action.value)}else{if(action.field==='classification'&&!['expense','income','refund','transfer','cardPayment','unidentified'].includes(action.value))throw Error('Natureza inválida');out.review={...out.review,[action.field]:String(action.value),ruleId:r.id}}}}
 if(out.review?.classification==='expense'&&out.cents>=0||out.review?.classification==='income'&&out.cents<=0)throw Error('Natureza incompatível com o lançamento');return out;
}

function matches(t,rule){if(!rule.conditions?.length)return false;const method=rule.conditionsOp==='or'?'some':'every';return rule.conditions[method](c=>condition(t,c))}

window.DemoRuleKernel={run,matches};
})();
