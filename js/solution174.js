//solution174
//You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

function pattern(n){
    var output="";
      for (var i=1;i<=n;i++){
          for (var j=0;j<i;j++){
            output += i;
          }
          if (i === n) break;
          output += "\n";
      }
    return output;
}

console.log(pattern(2))//1\n22
console.log(pattern(1))//1