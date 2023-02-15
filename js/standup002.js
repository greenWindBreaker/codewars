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
//find dircs for this
const myFunc=(arr,x)=>arr.filter(e=>e%2===0).slice(-x);
console.log(myFunc([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))// [4,6,8]
console.log(myFunc([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))// [-8,26]
//---------------------------
// Return the number of unique arrays that can be formed by picking exactly one element from each subarray. standup007
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
console.log("starts here:")
function solve(arr){

}
console.log(solve([[1,2],[4,4],[5,6,6]]))//4
console.log(solve([[1,2],[4,4,6],[5,7,6]]))//2*2*4=12
//------------------------------
//Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each. standup011
function last(str){
    
}
console.log(last('man i need a taxi up to ubud'))// ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
console.log(last('the wheels on the bus go round n round'))//['round', 'round', 'the', 'the', 'on', 'n', 'go', 'wheels', 'bus']
// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]
// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"
// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"
// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"
function arrayDiff(arr,arrTwo){

}
console.log(arrayDiff([1,2,2,2,3],[2]))//[1,3]
console.log(arrayDiff([], [4,5]))//[]

//You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers.
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.
// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
