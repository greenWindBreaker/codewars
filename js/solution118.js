//solution118
//a function that converts the following potentially harmful characters:
//'<' --> &lt;
//'>' --> &gt;
//" --> &quot;
//& --> &amp;

function htmlspecialchars(x){
    let result = ''
    for (let i = 0 ; i < x.length ; i++){
        if(x[i] === '<'){
            result += '&lt;'
        }else if (x[i] === '>'){
            result += '&gt;'
        }else if(x[i] === '"'){
            result += '&quot;'
        }else if(x[i] === '&'){
            result += '&amp;'
        }else{
            result += x[i]
        }
    }
    return result
}

console.log(htmlspecialchars('fsfda<fsdf>'))//fsfda&lt;fsdf&gt;