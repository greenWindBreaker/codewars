//solution122
//Finish the uefaEuro2016() function so it return string just like in the example below:
//uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"

const uefaEuro2016 = (teams, scores) => scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : scores[0] < scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` : `At match ${teams[0]} - ${teams[1]}, teams played draw.`

console.log(uefaEuro2016(['Italy','Spain'],[0,1]))//At match Italy - Spain, Spain won!