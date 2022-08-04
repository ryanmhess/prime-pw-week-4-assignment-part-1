console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

///////////////////////////////////////////////////////////////////////////

// 1. Function to return 'Hello World!'
//    Call the function to test

function hello() {
  return 'Hello World!';
} //  end hello

console.log('Test - should say "Hello World!"', hello());
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
//    Remember to call the function to test

let person = prompt( 'What is your name?');

function helloName( name ) {
  console.log('When meeting someone new, an appropriate greeting is:');
  return `Hello, ${ name }!`;
} //  end helloName

console.log( helloName( person ) );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 3. Function to add two numbers together & return the result
//    return firstNumber + secondNumber;

function addNumbers( num1, num2) {
  console.log( `When we add ${num1} and ${num2} we get:` );
  let result = num1 + num2;
  return result;
} // end addNumbers

console.log( addNumbers( 7, 11 ) );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 4. Function to multiply three numbers & return the result

function multiplyThree( num1, num2, num3){
  console.log( `${num1} multiplied by ${num2} multiplied by ${num3} equals:` );
  let result = num1 * num2 * num3;
  return result; 
} //  end multiplyThree

console.log( multiplyThree( 4, 5, 6 ) );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
//    Call the function to test each outcome (true & false) 
//    Write a separate console.log statement for each outcome

let num1 = 3;
let num2 = 0;
let num3 = -3;

function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
    return false;
} //  end isPositive

console.log( `Is the number ${num1} greater than 0? Answer:`, isPositive( num1 ) );
console.log( `Is the number ${num2} greater than 0? Answer:`, isPositive( num2 ) );
console.log( `Is the number ${num3} greater than 0? Answer:`, isPositive( num3 ) );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let basket = [];

function getLast( array ) {
  if ( basket[]){
    return 
  }
}



///////////////////////////////////////////////////////////////////////////

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  
}

///////////////////////////////////////////////////////////////////////////

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

///////////////////////////////////////////////////////////////////////////

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

///////////////////////////////////////////////////////////////////////////

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

///////////////////////////////////////////////////////////////////////////

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
