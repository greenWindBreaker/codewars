//standup119
//Monday, 05-15-23, standup on discord @ 6pm
//looking for a new challenge  new oppurenity, never answer with 'im in it for bigger paycheck"
function findDifference(a,b){
    return Math.abs(a.reduce((a,c)=>a*c,1)-b.reduce((a,c)=>a*c,1))
}
console.log(findDifference([2,2,3],[5,4,1]))//true


function lol(){
    a=3
    b=4
    c=a+b
    a=2
    d=a-1
    console.log(c+d)
}
console.log(lol())