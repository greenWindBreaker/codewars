//standup053
//Tuesday, 01/31/23 standup on remo.co @ 6pm

//Try without recursion first and then get fancy. This problem really needs to be written out. Grab some paper! 
//Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

function mygcd(x,y){
    for(let i=Math.min(x,y); i> 0; i--){//the smaller number becuase the larger num cant be the common demoninator
        if(x % i ===0 && y % i ===0){
            return i 
        }
    }
}
//the answer above without recursion. 