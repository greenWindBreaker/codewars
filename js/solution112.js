//solution112
//Write a simple function to check if the string contains the word hallo in different languages.
//you can assume the input is a string.
//function should be case insensitive to pass the tests

function validateHello(greetings){
    const hellos = {
        hello: 'english',
        ciao: 'itaian',
        salut:'french',
        hallo:'german',
        hola:'spanish',
        ahoj:'czech republic',
        czesc:'polish'
    }
    for (key in hellos){
        if(greetings.toLowerCase().includes(key)){
            return true
        }
    }
    return false
    
}

console.log(validateHello('meh'))