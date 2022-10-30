//solution199
//OPPOSITIES ATTRACT... If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

/* function lovefunc(flower1, flower2){
    return flower1%2 ===0 && flower2%2===0 ? false 
    : flower1%2 ===1 && flower2%2===1? false : true;
}// moment of truth.. solved it! 67 points to 69 points currently 4-18-22. my solution
*/

// function loveFunc(f1, f2){
//     return f1 %2 !== f2 %2;
// }

//one line solution below:
const loveFunc = (f1,f2) => f1%2 !== f2 %2