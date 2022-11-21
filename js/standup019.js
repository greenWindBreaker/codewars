//standup019
//for monday, 11/21/22
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function removeDupeWords(str){
    //remove something from something -> usually will use filter()
    //will take a str, and split(" ") and then filter()
    return str.split(' ').filter((w,i,a)=> w != a[i-1]).join(' ')
}