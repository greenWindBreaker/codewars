//solution016
//Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included)
function pipeFix(numbers){
    let first = numbers[0];
    let last = numbers[numbers.length-1];

    let result = [];
    for(let i = first; i <= last; i++){
        result.push(i);
    }
    return result;
}
console.log(pipeFix([1,2,3,12]))//[1,2,3,4,5,6,7,8,9,10,11,12]