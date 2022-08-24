//solution132
//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
//example: 'aabacbaa' --> 'bbabcabb'

// function switcheroo(x){
//     //return x.replaceAll('a','b')//works but not what we want
//     let newArr = []
//     for(let i =0; i < x.length ; i++){
//         if(x[i]==='a'){
//             newArr.push('b')
//         }else if(x[i] === 'b'){
//             newArr.push('a')
//         }else{
//             newArr.push(x[i])
//         }
//     }
//     return String(newArr).replaceAll(',','')//String(newArr) will return 'b,b,c,c,a,a' string with commas. so to fix that we use replaceAll(',','') which removes all commas. the end result is 'bbccaa' 
// }

function switcheroo(x){
    let str = "";
    for (var i = 0; i < x.length; i++) {
        if (x[i] === 'a') {
          str += 'b';
        } else if (x[i] === 'b') {
          str += 'a';
        } else {
          str += x[i];
        }
    } return str;
  }

console.log(switcheroo('aaccbbaaddba'))//'bbccaabbddab'