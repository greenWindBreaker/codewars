//Name shuffler
//Write a function that returns a string in which firstname is swapped with last name.
/*
function nameShuffler(str){
    return String(str).split(' ').reverse().join(' ');
}*///checks out, now to clean it

const nameShuffler = str => String(str).split(' ').reverse().join(' ');

console.log(nameShuffler('asuka langley'))// 'langley asuka'