//solution060
//Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

function fizzbuzz(x){
    let newArr = []
    for(let i = 1; i <= x; i++){
        if(i%3===0 && i%5===0){
            newArr.push('fizzbuzz')
        }else if(i%5===0){
            newArr.push('buzz')
        }else if(i%3===0){
            newArr.push('fizz')
        }else{
            newArr.push(i)
        }
    }
    return newArr   //this will give array
}

console.log(fizzbuzz(100))

function fizzbuzzAlt(){
for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
        b = i % 5 == 0;

    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
  }
}
fizzbuzzAlt()//this will not give array


