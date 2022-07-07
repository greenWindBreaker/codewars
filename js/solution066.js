//solution066
//check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
    
     if(x.filter(x => x === 'good').length === 1 || x.filter(x => x === 'good').length === 2){
         return 'Publish!'
     }else if(x.filter(x => x === 'good').length > 2){
         return "I smell a series!"
     }else{
         return 'Fail!'
     }
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))//publish