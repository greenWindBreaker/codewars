//standup007
//common interview problem, common math problem
// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

//function solve(arr){
    //set -> uni values
    //set will be inside a map, -> 2,1,2 for the 1st test case
    //reduce -> 2*1*2
    //return arr.map(sa=> [...new Set(sa)].length)//speareding the set to remove duplicates
    //set a speacial data structure under the hood, O1.. comes with properties baked in. into more below:
    //return arr.map(sA=> new Set(sA).size)//size is a property of Set
    //return arr.map(sA=> new Set(sA).size).reducec((a,c)=> a*c,1)//done
    //at this point ask, " do want a one liner?"
//}
const solve = arr => arr.reduce((a,c)=> a* new Set(c).size, 1)

console.log(solve([[1,2],[4,4],[5,6,6]]))//4
console.log(solve([[1,2],[3,4],[5,6]]))//8

//fair market rate for a developer of my experience
//what have you budgeted for this position