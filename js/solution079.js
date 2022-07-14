//solution079
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//y is not considered a vowel for this kata
function shortcut(string){
    let s = string.split('')
    for(let i = 0; i < s.length; i++){
        if(s[i]==='a'){
            s[i] = ''
        }else if(s[i]==='e'){
            s[i]=''
        }else if(s[i]=== 'i'){
            s[i] =''
        }else if(s[i]=== 'o'){
            s[i] = ''
        }else if(s[i]==='u'){
            s[i] = ''
        }
    }
    return s.join('') 
}

console.log(shortcut('hello'))//'hll'
console.log(shortcut('ROCKY'))//"ROCKY"