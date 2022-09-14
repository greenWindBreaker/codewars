//solution159
//HOW GOOD ARE YOU REALLY?...You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!

function betterThanAverage(peers, me){
    return me > peers.reduce((acc ,c)=> acc + c,0)/peers.length;
}

console.log(betterThanAverage([90,80,75],85))//true