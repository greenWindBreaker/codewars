//solution173
// task is to calculate how many successful shots you will be able to make given the available ammo and your aim score, then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. You will always shoot left to right.

function duckShoot(ammo,aim,ducks){
    //4, .64, 8, res=hits 2out8
    //8ducks-4 ammo= 4 ducks possible hit with perfect aim
    //4 ducks * aimrating of .64= 2.56 rounded down to 2
    //====
    //9ammo, .22, 2ducks, res=hits 1out2
    //9*.22=1.98 rounded down to 1
    
    for(let i = 0; i < Math.floor(ammo*aim); i++){
        ducks = ducks.replace('2','X')
    }
    return ducks;
}

console.log(duckShoot(22,.45,'|-----2----2---2---2-2----2222----22--2--2---22-|'))//|-----X----X---X---X-X----XXXX----22--2--2---22-|