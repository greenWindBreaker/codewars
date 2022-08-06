//solution111
//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
//Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
//"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.

function calculateAge(birth,x){
    if(birth === x){
        return `You were born this very year!`
    }else if(x - birth === 1){
        return `You are 1 year old.`
    }else if(birth - x === 1){
        return `You will be born in 1 year.`
    }else if(x > birth && x - birth !== 1){
        return `You are ${x-birth} years old.`
    }else if(birth > x && birth -x !== 1){
        return `You will be born in ${birth-x} years.`
    }
}

console.log(calculateAge(2000,2000))//You were born this very year!
console.log(calculateAge(2001,2002))//You are 1 year old.
console.log(calculateAge(2001,2000))//You will be born in 1 year.
console.log(calculateAge(2000,2010))//You are 10 years old.
console.log(calculateAge(2010,2000))//You will be born in 10 years.