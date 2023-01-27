//standup002
//Write a function that when giving a URL as a string, parses out just the domain name and returns it as a string. for ex:
//domainName("https://github.com/asesome-project/username") === 'github'
//notes: url trad no funny biz, str

const parseDomainName = url => url.replace('https://','').replace('www.','').split('.')[0]
console.log(parseDomainName('https://github.com/asesome-project/username'))//'github'
console.log(parseDomainName('https://www.xombie-bites.com'))//xombie-bites
console.log(parseDomainName('https://www.cnet.com'))//cnet

//---------------------------
const getAverage=arr=>Math.floor(arr.reduce((a,c)=> a + c,0)/arr.length);
console.log(getAverage([2,2,2,2]))//2
console.log(getAverage([1,2,3,4,5]))//3
//--------------------------
const repeats = arr => arr.filter((n)=> arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c)=> a+c,0)
console.log(repeats([4,5,7,5,4,8]))//15
//---------------------------
const myFunc=(arr,x)=>arr.filter(e=>e%2===0).slice(-x);
console.log(myFunc([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))// [4,6,8]
console.log(myFunc([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))// [-8,26]
//---------------------------
// Return the number of unique arrays that can be formed by picking exactly one element from each subarray. standup010
function solve(arr){
    
}
//console.log(solve([[1,2],[4,4],[5,6,6]]))//[1,2],[4],[5,6]]
//------------------------------
//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. standup011
function last(str){

}
console.log(last('man i need a taxi up to ubud'))

// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"