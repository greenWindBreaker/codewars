//solution069
//Make a function that receive age, and return what they drink.
//Children under 14 old = drink toddy
//teens under 18 = coke
//young under 21 = beer
//adults have 21 or more = whisky

const peopleWithAgeDrink = x => x<14? 'drink toddy' : x<18? 'drink coke' : x<21? 'drink beer' : 'drink whisky'

console.log(peopleWithAgeDrink(16))//'drink coke'