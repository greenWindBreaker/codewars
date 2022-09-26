//solution170
// The Array's reverse() method has gone missing! Re-write it, quick-sharp!
// When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Array.prototype.reverse = function(){
    for(let i =0, j=this.length-1; i<j; i++, j--){
        let tmp = this[i]
        this[i] = this[j]
        this[j] = tmp
    }
    return this
}

console.log(Array.prototype.reverse([1,23,4,5]))
//https://www.codewars.com/kata/53b2ff49b82af296ce001139/solutions