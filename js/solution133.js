//solution133
//String template - bug fixing #5
//fix the function below:

// function buildString(...template){
//     return `I like #{template.join(',')}!`;
//   }

// function buildString(...template){
//     return `I like ${template.join(', ')}!`
// }

const buildString = (...template) => `I like ${template.join(', ')}!` 

console.log(buildString('grape','apples','jeans'))//'I like grape, apples, jeans!'
console.log(buildString('winter'))//'I like winter!'