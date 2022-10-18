//solution190
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//ex: "www.codewars.com#about" --> "www.codewars.com"
//ex: "www.codewars.com?page=1" -->"www.codewars.com?page=1"

const removeUrlAnchor = url => url.replace('#',' ').split(' ')[0]
//const removeUrlAnchor = url => url.split('#')[0]

console.log(removeUrlAnchor("www.codewars.com#about"))//checks out
console.log(removeUrlAnchor('www.codewars.com?page=1'))//checks out