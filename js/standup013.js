//standup013
//was moved to 11/09/22 because 11/08 was a mid term elections, class got cancelled as well
// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

function arrayDiff(a,b){
    //if(a.length ===0 || b.length === 0){return a} //thinking about constant time
    //return a.filter(function(x) {return b.indexOf(x)== -1; })// a quadraditc solution, a loop inside of a loop
    //when tryn to find value that are unique, use Set, a Set is like an array that cant have have duplicates and has built-in methods.
    let newSet = new Set(b)// this set happens in linear complexicity 
    return a.filter(n => !newSet.has(n))//never seen has.() before haha, its a property of Set! has.() is happening in constant time
    //make sure you know all about Set, comes up in modern problems
    //need to remove duplicates = use Set
}

console.log(arrayDiff([1,2],[1]))//[2]
console.log(arrayDiff([1,2,2,2,3],[2]))//[1,3]
console.log(arrayDiff([3,4], [3]))//[4]