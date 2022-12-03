//standup025
//special standup on friday, (usually fridays are for TeaSpills), 12/02/2022 @ 6pm, remo.co
//Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

function reverseString(str){
    //we somehow have to do this -> str.split('').reverse().join('')
    //but without using the reverse() method
    //we will use the new for ( of ) loop
    // leon to noel - empty str -> loop add each char
    let reverseStr = ''
    for(let char of str){
        reverseStr = char + reverseStr
    }
    return reverseStr
}
console.log(reverseString('leon'))//noel