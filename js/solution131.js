//solution131
//Write a class Block that creates a block
//The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

class Block{
    constructor(data){//the data used will come in an array
        this.w = data[0];
        this.l = data[1];
        this.h = data[2];
    }
    getWidth(){
        return this.w
    }
    getLength(){
        return this.l
    }
    getHeight(){
        return this.h
    }
    getVolume(){
        return this.w * this.l * this.h
    }
    getSurfaceArea(){
        return (2*this.w*this.h)+(2*this.h*this.l)+(2*this.w*this.l)
    }
}

let nox = new Block([2,4,6])