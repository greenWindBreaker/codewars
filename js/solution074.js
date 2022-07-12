//solution074

function hello(name){
    let nameArr = name.split('')

    if(name === undefined || name === ''){
        return 'Hello, World!'
    }else{
        //return `Hello, ${name.toLowerCase().toUpperCase()}!`
        return `Hello, ${(name[0]).toUpperCase()+name.slice(1).toLowerCase()}!`
    } 
}

console.log(hello('mItch'))//Hello, Mitch!