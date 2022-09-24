//solution168
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    let isLessThanOr = x => x <= limit
    return a.every(isLessThanOr)
    // Hallelujah! Hallelujah! Hallelujah! Hallelujah! Hallelujah! Hallelujah! Hallelujah! Hallelujah! Hallelujah! Hallelujah! For the Lord God Omnipotent reigneth Hallelujah!
    //was about to give up until i remebered about .every() and read the doc on mdn
}

console.log(smallEnough([66,101], 200))// true
console.log(smallEnough([66,201,201], 200))// false
console.log(smallEnough([7,2,6,6,7,7,7,2,9], 8))//false