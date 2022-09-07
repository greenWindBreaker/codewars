//solution152

//Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//ex: [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

function divisibleBy(arr, divisor){
    let newArr = []
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]%divisor === 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(divisibleBy([1,2,3,4,5,6], 3))//[3,6]