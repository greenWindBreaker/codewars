//solution015
function removeEveryOther(arr){
    let newArr = []
    for(let i = 0; i <= arr.length ; i+=2 ){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(removeEveryOther(['asft','asdes','ytunb','oiyn','dfog']))//['asft','ytunb','dfog']

function removeEveryOtherX(arr){
    return arr.filter(function(elem,index){
        return index % 2 ===0;    
    })
}
console.log(removeEveryOtherX([true,false,false,false,true]))//[true,false,true]