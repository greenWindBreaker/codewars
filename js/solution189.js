//solution189

//string reversal algorithm using for...of:
function reverseString(text){
    let result = ''
    for(let char of text){
        result = char + result
        //1st loop: '' = d + ''
        //2nd loop: d = a + d
        //3rd: ad = t + ad
        //tad = a + tad
        //atad = b + atad
        //batad = a + batad
        //abatad = s + abatad
        //final loop: sabatad = e + sabatad
        // result now = esabatad
    }
    return result
}
console.log(reverseString('database'))//esabatad

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str){
    let x = [...str].reduce((acc, curr)=> curr + acc)
    return x.split(' ').reverse().join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
console.log(reverseWords('This is an example!'))//sihT si na !elpmaxe