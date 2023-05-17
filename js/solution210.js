//solution210
function twoSort(s){
    return s.sort()[0].split('').join('***')
}
console.log(twoSort(["BTC","Bitcoin","Bitcoin","Bitcoin","Bitcoin","DarkCoin","Dash","Dogecoin","Lisk","Lisk","Lisk","Lisk","LiteCoin","Mine","Mine","ProofOfStake","ProofOfStake"]))
function squareOrSquareRoot(arr){
    return arr.map((el)=>Math.sqrt(el))
}
console.log(squareOrSquareRoot([9,5,7,4,10,144,25,44,36,88]))