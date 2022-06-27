//solution052
//your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where x > 0

function howMuchILoveYou(x){
    let phrase = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'
    ]
    return phrase[(x-1)% phrase.length]
}

console.log(howMuchILoveYou(6))//'not at all'