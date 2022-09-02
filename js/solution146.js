//solution146
//Complete the function that receives as input a string, and produces outputs according to the following table:
//Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer"
//Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

const drink = {
    'jabroni':'Patron Tequila',
    'school counselor':'Anything with Alcohol',
    'programmer':'Hipster Craft Beer',
    'bike gang member':'Moonshine',
    'politician':'Your tax dollars',
    'rapper':'Cristal',
}
const getDrinkByProfession = x => drink[x.toLowerCase()] || 'Beer'

console.log(getDrinkByProfession('proGrammer'))//Hipster Craft Beer
console.log(getDrinkByProfession('proGammer'))//Beer