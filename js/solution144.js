//solution144
//Get number from string
//Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

function getNumberFromString(s){
    //let newArr = []
    let str = ''
    let divvy = s.split('')
    for(let i = 0; i < divvy.length; i++){
        if(divvy[i]==='0'||divvy[i]==='1'||divvy[i]==='2'||divvy[i]==='3'||divvy[i]==='4'||divvy[i]==='5'||divvy[i]==='6'||divvy[i]==='7'||divvy[i]==='8'||divvy[i]==='9'){
            //newArr.push(divvy[i])
            str += divvy[i]
        }
    }
    return Number(str)
}

console.log(getNumberFromString('gterb7fdkj9'))//79