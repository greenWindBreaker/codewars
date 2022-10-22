//solution194
//REVERSED WORDS... reverses all words within a string. ex: "Look! A pink cow!" = "cow! pink A Look!"

function reverseWords(str){
    return String(str).split(' ').reverse().join(' ');
}

console.log(reverseWords('qwe sgdf hfg jgh kuy rtyd'))