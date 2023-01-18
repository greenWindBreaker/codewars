//standup002
//Write a function that when giving a URL as a string, parses out just the domain name and returns it as a string. for ex:
//domainName("https://github.com/asesome-project/username") === 'github'
//notes: url trad no funny biz, str

function parseDomainName(url){
    return url.replace('https://','').replace('www.','').split('.')[0]
    //replace the stuff upfront
    
    //split grabbing the first value
}

console.log(parseDomainName('https://github.com/asesome-project/username'))//'github'
console.log(parseDomainName('https://www.xombie-bites.com'))//xombie-bites
console.log(parseDomainName('https://www.cnet.com'))//cnet


//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
//differnece b/t modulus and dividion: division operator on integer inputs gives an integer result. The modulus operator gives the remainder 
//10/12/22
function fizzBuzz(x){
    for(let i=1; i<=x;i++){
        if(i % 3===0 && i % 5===0){
            console.log('fizzbuzz');
        }else if(i%5===0){
            console.log('buzz')
        }else if(i%3===0){
            console.log('fizz')
        }else{
            console.log(i)
        }
    }
}
//console.log(fizzBuzz(50))

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
// 10.18.22

//DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods! 10.19.22