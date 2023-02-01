//standup054
// Wednesday, 02/01/23 standup on remo.co @ 6pm

//tonight solution using recursion and the Euclidean Algorithm
//Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

function mygcd(a,b){
    //a=b * q + r
    //30 = 12 * q +r
    //30=12 * 2 + 6
    //12 =6 *2 + 0
    //6= 0 <- the base case of 0
    //how would you know to do this in an interview? you memorize it - Leon
    //the problems from here on out, do not need to land a job but are just door openers
   if(b===0){//base case, if we get all the way down to 0 return a
    return a
   }
   return mygcd(b, a%b)
}

console.log(mygcd(30,12))