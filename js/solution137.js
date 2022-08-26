//solution137
// you are given a string of space separated numbers, and have to return the highest and lowest number.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.
//ex-> ("1 2 3 4 5");  return "5 1"
//ex-> ("1 9 3 4 -5");  return "9 -5"

function highAndLow(numbers){
    let divvy = numbers.split(' ') //step 1
    return `${Math.max(...divvy)} ${Math.min(...divvy)}`
}

console.log(highAndLow('5 7 2 8 1'))//'8 1'