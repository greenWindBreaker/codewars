//solution165

//COUNT POSITIVES & SUM OF NEGATIVES...Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array. ex: [1,2,3,4,-1,-2,-3] -> [4, -6]

function countPositivesSumNegas(input){
    if(input === null || input.length === 0)
        return [];
    
    let positive = 0
    let negative = 0

    for(let i = 0, j=input.length; i<j; ++i){
        if(input[i] > 0){
            ++ positive;
        }else{
            negative += input[i];
        }
    }
    return [positive, negative];
}

console.log(countPositivesSumNegas([1,2,3,4,-1,-2,-3]))//([4,-6])