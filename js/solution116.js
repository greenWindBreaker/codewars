//solution116
//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

function mango(q,p){
    let freeMangos = Math.floor(q/3)
    return (q-freeMangos)*p 
}   

console.log(mango(3,3))//6
console.log(mango(9,5))//30