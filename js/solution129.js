//solution129
//In this kata, you are asked to square every digit of a number and concatenate them.
//example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer

function squareDigits(num){
    let x = String(num).split('')//['1','2','3','4']
    let a = []
    for(let i = 0; i < x.length;i++){
        a.push(x[i]**2)
    }
    return Number(a.join(''))
}

console.log(squareDigits(2345))//491625