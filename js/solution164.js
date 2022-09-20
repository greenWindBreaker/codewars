//solution164
//TOTAL AMOUNT OF POINTS... an array with 10 things inside. write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match: if x>y : 3 points, if x < y: 0 point, if x = y: 1 point.

const points = games => games.reduce((acc,c) => {
    return acc += c[0] > c[2]? 3 : c[0] === c[2]? 1 : 0;
},0) 