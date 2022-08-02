//solution106
//CENTURY FROM YEAR...  given a year, return the century it is in. ex: 1705 --> 18, 1601 --> 17, 1900 --> 19

function century(year){
    return Math.ceil(year/100) // using Math.ceil() to round up to nearest century 
}

console.log(century(2022))//21