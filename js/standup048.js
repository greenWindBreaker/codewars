//standup048
//Wednesday, 01/18/23, standup @ 6pm remo.co 
//Please use recursion! We'll identify the base cases and walk through a recursive solution together during standup!
// Factorial
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,
// 5! = 5 * 4 * 3 * 2 * 1 = 120.
// The factorial of 0! is 1.
// #Your task:
// You have to create the function factorial that receives n and returns n!. You have to use recursion.
//recursion-> thinking about our base case, 

function factorial(n){
    //base case = n less than 2. then return 1
    if(n < 2){
        return 1//would handle the num 1 and 0
    }
    return n * factorial(n-1)
    //weve seen this^ in the fibanoci sequence challenge 
    //5 * factorial(5-1) -> 4* factorial(4-1)-> 3 * factorial(3-1)-> 2 * factorial(2-1)-> since 2 is less than 1 -> 2*1 then we work our way up -> 1*2*3*4*5
}
//working our way down:
//5 * factorial(5-1)
//4 * factorial(4-1)
//3 * factorial(3-1)
//2 * factorial(2-1)
//then bubbling our way back up:
//5*4*3*2*1
//4*3*2*1 ^
//3*2*1 ^
//2*1 ^