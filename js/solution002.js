//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
//example: [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
//the '...' called 'spread operator' :which unpacks arguments. In this instance it unpacks all the items from list which serves as multiple arguments in the Math.min/Math.max function. It allows all values to be compared individually instead of trying to find the max/min of an array (which can't be done).
