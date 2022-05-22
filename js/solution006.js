//cat years, dog years
//I have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears]
//notes: humanYears >= 1
// humanYears are whole numbers only
//cat years-> 15 first year,+9 second year, +4 each year after that
//dog years-> 15 first year,+9 second year, + 5 each year after that
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0
    let dogYears = 0

    for(let i = 1; i <= humanYears; i++){
        if(i === 1){
            catYears += 15;
            dogYears += 15;
        }else if(i === 2){
            catYears += 9;
            dogYears += 9;
        }else{
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears,catYears,dogYears];
}
console.log(humanYearsCatYearsDogYears(5))// 5,36,39
console.log(humanYearsCatYearsDogYears(10))// 10,56,64