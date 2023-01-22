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

// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
// solve([[1,2],[4],[5,6]]),4)
// solve([[1,2],[4,4],[5,6,6]]),4)
// solve([[1,2],[3,4],[5,6]]),8)
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)