//solution012
//write a function that determine the number of magazines that every soldier has to have in his bag.
//You will receive the weapon and the number of streets that they have to cross.
//1 street = 3 bullets used
//PT92 - 17 bullets in one magazine
//M4A1 - 30 bullets
//M16A2 - 30 bullets
//PSG1 - 5 bullets
magNumber = info => Math.ceil(info[1]*3/ {PT92: 17, M4A1:30, M16A2:30, PSG1:5}[info[0]])

console.log(magNumber('PT92',6))
console.log(magNumber('PSG1',5))
console.log(magNumber('M4A1',6))

/*
function magNumber(gun,street){
    
    let psgOne = (street*3)/5
    let result1 = Math.ceil(psgOne)

    let ptNineTwo = (street*3)/17
    let result2 = Math.ceil(ptNineTwo)

    let mFourAndmSixteen = (street*3)/30
    let result3 = Math.ceil(mFourAndmSixteen)

    return gun === 'PT92' ? result2 
    : gun === 'PSG1' ? result1 : result3  
}
*/