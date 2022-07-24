//solution096
//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//sayHello(['John', 'Smith'], 'Phoenix', 'Arizona') ->Hello, John Smith! Welcome to Phoenix, Arizona!

const sayHello = (name,city,state)=> `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
// function sayHello(name,city,state){
//     if(name.length > 3){
//         return `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}!`
//     }else if(name.length > 2){
//         return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`
//     }else{
//         return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`
//     }
// }

console.log(sayHello(['Trixie', 'Lunamoon'],'afas','va'))
console.log(sayHello(['Trixie', 'Lunamoon','fireheart'],'afas','va'))
console.log(sayHello(['Trixie', 'Lunamoon','fireheart','jr'],'afas','va'))
