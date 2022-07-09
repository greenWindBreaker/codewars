//solution068
//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
//The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(birds){
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(x=> !geese.includes(x))
}

console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested",'African']))//["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
