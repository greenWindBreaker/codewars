//solution053
//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1

function correct(str){
    let s = str.split('')
    for(let i = 0; i < s.length; i++){
        if(s[i]==='5'){
            s[i] = 'S'
        }else if(s[i]==='0'){
            s[i]==='O'
        }else if(s[i]=== '1'){
            s[i] ='I'
        }
    }
    return s.join('') 
}

console.log(correct('L0nd0n'))// 'LOndOn'