//Q24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings


// i-Tests for equality and inequality with strings
console.log("Equality test with strings :","computer"==="computer");


// Tests for equality and inequality with strings
console.log("Inequality test with strings :",("computer" as string)!="Mobile");

//Tests using the lower case function
console.log("Lower case function test:","Hello world".toLowerCase() === "hello world");

//Numerical tests involving equality
console.log("Equality test with numbers :", 26 === 26);

//Numerical tests involving inequality
console.log("Inequality test with numbers :", (26 as number) != 27);


//greater than test
console.log( "Greater than test :" , 10> 5);

//less than test
console.log( "Less than test :" , 2< 5);



// greater than or equal to
console.log("Greater than or equal to test" , 5 >= 5);

//less than or equal to
console.log("Less than or equal to test" , 5 <= 6);

//Tests using "and" operators

console.log("And operator test:",2===2 && 8 > 5);

//Tests using  "or" operators
console.log("Or operator test:",2===2 || 8 < 5);

//Test whether an item is in a array

const fruits :string[] =["Apple","Orange","Banana","Pear"];
console.log('Test "Banana" in the array:' ,fruits.includes("Banana"));

//Test whether an item is not in a array
console.log( 'Testing "Naspati" is not in this array:' ,!fruits.includes("Naspati"));



