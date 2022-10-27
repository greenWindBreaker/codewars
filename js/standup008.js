//standup008
//given an array of integers, find the Nth smallest element in this array of integers
//notes: array/list size is at least 3
//arrays/lists numbers could be a mixture of positives, negatives, and zeros.
//repetition in array/lists numbers could occur, so dont remove duplications.

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

function nthSmallest(arr,n){
    //sort method.acts diffent depending on the environment u running on, on which browser you use.
    //sort arr
    //find nth num -> n - 1
    //return arr.sort((a,b)=> a-b)//lexigraphical sort, must know what sort is doing underneeath the hood, and lexicgra...
    return arr.sort((a,b)=> a-b)[n-1]
}

console.log(nthSmallest([3,1,2],2))//2
console.log(nthSmallest([15,20,7,10,4,3],3))//7
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92],5))//92
//hard part-> understanding the question becuase of verbage, verbage that shows up a lot, aim of these questions
//sort method comes up a lot