//solution180

//ABBREVIATE TWO STRING NAME... Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them. ex: 'baki hamna' => B.H

function abbrevName(name){
    let nameArr = name.split(' ');
        return (nameArr[0][0]+'.'+nameArr[1][0]).toUpperCase();
}
console.log(abbrevName('asuka langley'))