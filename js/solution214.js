//solution214
function ave(x){
    return (x.reduce(el=>el+el)/x.length)*.8
}
console.log(ave([369
    ,450
    ,236
    ,359,222]))