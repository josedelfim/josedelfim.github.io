// Small browser-only stock operations. Invented fixtures; never touches the app.
export function transferStock(stock,ingredients,output,yieldQty){
 if(!output||!Number.isInteger(yieldQty)||yieldQty<1||yieldQty>50||!ingredients.length)throw Error('Invalid recipe');
 const required={};for(const [id,n]of ingredients){if(!Number.isFinite(n)||n<=0)throw Error('Invalid quantity');required[id]=(required[id]||0)+n;}
 for(const [id,n]of Object.entries(required))if((stock[id]||0)<n)throw Error('Insufficient stock');
 const next={...stock};for(const [id,n]of Object.entries(required))next[id]-=n;next[output]=(next[output]||0)+yieldQty;return next;
}
export function mealStock(stock,foods){const next={...stock};if(!foods.length)throw Error('No foods');for(const id of foods){if((next[id]||0)<1)throw Error('Insufficient stock');next[id]-=1;}return next;}
export function restoreMeal(stock,foods){const next={...stock};for(const id of foods)next[id]=(next[id]||0)+1;return next;}
export function reserveBalance(received,expenses){return received-expenses.reduce((sum,x)=>sum+x,0);}
