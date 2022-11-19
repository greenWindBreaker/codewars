//standup020
//test-assment for codility
//sample test, 'missing integar'
function solution(A) {
    //given array A
    //A can contain negative nums
    //if all negative nums return 1, never 0
    // return smallest positive integar not in the array, not 0
    //not negative
    //return Math.max(...A)//retuns 3
    //return Math.max(...A)+1
    //let sorted = [...new Set(A.sort((a,b)=> a-b))]
   A.sort(function(a,b) {return a-b})
   let count = 0
   for(let i =0; i < A.length; i++){
    if(A[i] > 0){
        if(A[i] != count) count++;
        if(A[i] == count) continue
        return count
    }
   }
   count++
   return count
}//this works but doin it my way does not, it returns 1 everytime. 
console.log(solution([1,2,3]))//4 
console.log(solution([1, 3, 6, 4, 1, 2]))//5
console.log(solution([1, 3, 10, 4, 1, 2]))//5
console.log(solution([-1, -3, -10, -4, -1, -2]))

//real Codility test
