//solution098

function billboard(name,price = 30){
    
    let x = 0
  
    for(let i = 0; i <= name.length ; i++){
        x += price
    }
    return x
}
console.log(billboard('Hadufuns John'))//420
console.log(billboard('Trixie Lunamoon'))//480