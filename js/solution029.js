//solution029
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1,s2,s3){
    let ave = (s1+s2+s3)/3
    if(ave < 60){
        return 'F'
    }else if(ave < 70){
        return 'D'
    }else if(ave < 80){
        return 'C'
    }else if(ave < 90){
        return 'B'
    }else{
        return 'A'
    }
}

console.log(getGrade(45,45,90))//'D'