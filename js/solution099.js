//solution099
//Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

const aspectRatio = (x,y) => [Math.ceil(y*16/9),y]

console.log(aspectRatio(200,480))//[854,480]