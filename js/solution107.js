//solution107
//ABBREVIATE TWO STRING NAME... Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them. ex: 'baki hamna' => B.H

function abbrevName(name){
    let newArray = name.split(' ')
    return (newArray[0][0]+'.'+newArray[1][0]).toUpperCase()
}

console.log(abbrevName('Ains Gown'))//A.G