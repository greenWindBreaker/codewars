//solution148
//Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
//ex: Test.assertSimilar(whoIsPaying("Mexico"),["Mexico", "Me"]);
//ex: Test.assertSimilar(whoIsPaying("Me"),["Me"]);

function whoIsPaying(name){
    if(name.length < 1){
        return ['']
    }else if(name.length <2){
        return [name[0]]
    }else if(name.length < 3){
        return [name[0]+name[1]]
    }else{
        return [name].concat([name[0]+name[1]])
    }
}

console.log(whoIsPaying('babygirl'))//['babygirl', 'ba']
console.log(whoIsPaying('b'))//['b']
console.log(whoIsPaying(''))//['']
console.log(whoIsPaying('go'))//['go']