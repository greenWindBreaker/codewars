//solution084
//By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
//The number of dogs will always be a number and there will always be at least 1 dog.

function howManyDalmatians(x){
    if(x === 101){
        return '101 DALMATIANS!!!'
    }else if(x > 50){
        return `Woah that's a lot of dogs!`
    }else if(x > 10){
        return 'More than a handful!'
    }else{
        return 'Hardly any'
    }
}

console.log(howManyDalmatians(61))// Woah that's a lot of dogs!