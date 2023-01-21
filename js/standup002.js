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
// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
function myFunc(arr,x){
    //return arr.filter((e)=> e%2 ===0);//filters out all non even numbers and returns a copy of the arr with only even nums in it
    return arr.filter((e)=> e%2 ===0).slice(-x);
}
console.log(myFunc([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))// [4,6,8]
console.log(myFunc([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))// [-8,26]