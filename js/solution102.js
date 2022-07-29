//solution102
//write a function that detects the words and number: 'tree fiddy, three fifty, 3.50' from a randomly generated string
//if detected return true else false

function isLockNessMonster(s){
    return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"))//true
console.log(isLockNessMonster(" I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them"))//true