/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let jesus = [1,2,3,4,5,6,7];
let result = jesus.filter(num => num % 2 !==0).map(num=>num);

//export result
module.exports = result;