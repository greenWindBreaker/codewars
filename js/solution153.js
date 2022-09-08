//solution153
//Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.
//ex: [4,3,9,7,2,1] -> [2,9,3,49,4,1]

function squareOrSquareRoot(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if((Math.sqrt(arr[i])).toFixed(2)**2 === arr[i]){
            newArr.push(Math.sqrt(arr[i]))
        }else{
            newArr.push(arr[i]**2)
        }
    }
    return newArr
}

//shorten and with map():
// function squareOrSquareRoot(array) {
//     return array.map(x => {
//       const r = Math.sqrt(x);
//       return (r % 1 == 0) ? r : (x*x);
//     });  
// }

console.log(squareOrSquareRoot([2,3,4,48,49]))//[4, 9, 2, 2304, 7]
console.log(Math.sqrt(49)**2 === 49)//true
console.log(Math.sqrt(48)**2 === 48)//false.. good! we will use this as our conditional
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]))
console.log(Math.sqrt(101))
console.log(10.04**2)//101 was giving us issues, so i brought in .toFixed(2) to help with that, seen on line10