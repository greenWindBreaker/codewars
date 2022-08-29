//solution140

function fireFights(s){
    let divvy = s.split(' ')
    let result = ''
    for(let i = 0; i < divvy.length; i++){
        //result += s[i]
        if(divvy[i] === 'Fire'){
            result += '~~ '
        }else{
            result += divvy[i]+' '
        }
    }
    return result.trim()//trim() removes white space from both ends of string 
    //return s.replaceAll('Fire','~~')  this works too but fails on codewars 
}

console.log(fireFights('Mast Deck Engine Water Fire'))//Mast Deck Engine Water ~~
console.log(fireFights('Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain'))//~~ Deck Engine Sail Deck ~~ ~~ ~~ Rudder ~~ Boat ~~ ~~ Captain