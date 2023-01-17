//solution201
//title=Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str){
    let newStr = str.toLowerCase();
    let x = 0;
    let o = 0;
    for(let i=0;i<newStr.length;i++){
        if(newStr[i]==='x'){
            x+=1;
                        
        }else if(newStr[i]==='o'){
            o+=1;
        }
    }
    if(!newStr.includes('x') && !newStr.includes('o')){
        return true
    }else if(x === o){
        return true
    }else if (x !== o){
        return false
    }
}
//another way to solve this is by using a .filter(x=> x ==='x').length and comparing that to .filter(x=>x==='o').length
console.log(XO('tomatoxx'))//true
console.log(XO('tomatoxxx'))//false
console.log(XO('ooxxx'))//false
console.log(XO('yippy'))//true