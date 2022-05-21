//Abbreviate a two word name
function abbrevName(name){
    let newArr = name.split(' ')
    return (newArr[0][0]+'.'+newArr[1][0]).toUpperCase();
  }
console.log(abbrevName('asuka langley'))// A.L

//define a card suit
//You get any card as an argument. Your task is to return the suit of this card (in lowercase).
function defineSuit(card) { 
    let newCard = card.split('')
    return newCard[1]=== '♣' ? 'clubs'
    : newCard[1]=== '♠' ? 'spades'
    : newCard[1]=== "♦" ? 'diamonds'
    : 'hearts'
  }
console.log(defineSuit('2♠'))//'spades' 

//best practices
function defineSuitFromCard(card){
    const c = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
    }
    return c[card.charAt(card.length - 1)]
}
console.log(defineSuitFromCard('K♣'))//'clubs'