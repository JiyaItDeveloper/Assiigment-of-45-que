//Q23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
//test 1
console.log("Is car =='subaru'?I predict True.");
console.log(car == 'subaru');
//test 2
console.log("Is car =='Toyota'?I predict False.");
console.log(car == 'Toyota');
//test 3
console.log("Is car ==='subaru'?I predict True.");
console.log(car === 'subaru');
//test 4
console.log("Is car ==='subaru'?I predict False.");
console.log(car === 'subaru');
//test 5
console.log("Is car !='Toyota'?I predict True.");
console.log(car != 'Toyota');
//test 6
console.log("Is car !=='subaru'?I predict False.");
console.log(car !== 'subaru');
//test 7
console.log("Is car !==='subaru'?I predict True.");
console.log(car !== 'subaru');
//test 8
console.log("Is car.startsWith('sub')?I predict True.");
console.log(car.startsWith('sub'));
//test 9
console.log("Is car.includes('bar')?I predict True.");
console.log(car.includes('bar'));
//test 10
console.log("Is car.length > 5?I predict False.");
console.log(car.length > 5);
