//solution126
//If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//Note: keep the original order of the names in the output.

function friend(x){
    let newArr = []
    for( let i = 0 ; i < x.length ; i++){
        if(x[i].length === 4 ){
            newArr.push(x[i])
        }
    }
    return newArr
}
//const friend = x => x.filter(n => n.length === 4)

console.log(friend(['asdf','utreq','jhgfn']))
console.log(friend(['asdf','utreq','jhgfn','gfds']))