//string cleaning
//clean out all numberic characters 
//return string with spacing and special characters all intact

function stringClean(s){
    return s.split('').filter((n) => n != parseInt(n)).join('');
}
console.log(stringClean('tr2 >tr 45 hay5'))