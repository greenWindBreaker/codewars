//solution019
//Given an array of integers your solution should find the smallest integer
//supplied array will not be empty
class SmallestIntegerFinder {
    findSmallestInt(args){
        return Math.min(...args)//spread operator allows us to use an array inside Math.min()
    }
}
