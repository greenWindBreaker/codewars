//solution183

// KEEP HYDRATED...You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time){ // my answer worked! passed all 40 test.
    return Math.floor(time * 0.5);
}

console.log(litres(15))//7