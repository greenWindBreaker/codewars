//solution101
//Remove an exclamation mark from the end of a string

function remove(string){
    return string.endsWith('!') ? string.slice(0,-1) : string
}

console.log(remove('twili!'))//twili