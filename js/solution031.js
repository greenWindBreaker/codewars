//solution031
//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 
const setAlarm = (e,v) => e === true && v === true? false :
    e === false && v === true? false :
    e === false && v === false? false:
    true

    console.log(setAlarm(false,true))//false