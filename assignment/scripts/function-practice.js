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
  } //  end if
    return false;
} //  end isPositive

console.log( `Is the number ${num1} greater than 0? Answer:`, isPositive( num1 ) );
console.log( `Is the number ${num2} greater than 0? Answer:`, isPositive( num2 ) );
console.log( `Is the number ${num3} greater than 0? Answer:`, isPositive( num3 ) );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let basket = [ 'apple', 'banana', 'carrot', 'grape', 'pickle' ];

function getLast( array ) {
  console.log( 'The last item I put in my basket was:');
  let lastItemIndex = array.length - 1;
  return lastItem = array[lastItemIndex];
} //  end getLast

console.log( getLast( basket ) );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let classList = [ 'Blake', 'Chameng', 'Dan', 'Hess', 'Kyle', 'Maggie', 'Sam F', 'Sam O', 'Sarah', 'Theo', 'Yanira '];
let classMate = prompt( 'L`Engle Cohort Search \n\n     -Please enter name to search:')

function find( value, array ){
  for( let i=0; i<array.length; i++ ){
    if( value === array[i] ){
      return true;
    } //  end if
  } //  end loop
  return false;
} //  end find

console.log( `Is ${classMate} a member of the L'Engle cohort?`, find( classMate, classList ) );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if(letter === string[0]){ //  each letter in a string has its own index, just like an array
    return true;
  } //  end if
  return false;
} // end  function

console.log( 'Is `a` the first letter of the word apple?', isFirstLetter('a', 'apple') );
console.log( 'Is `z` the first letter of the word apple?', isFirstLetter('z', 'apple') );
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 9. Function to return the sum of all numbers in an array

let numCount = [1, 3, 5, 7, 9, 11, 13];

function sumAll(numberArray) {
  let sum = 0
  // TODO: loop to add items
  for(let i=0; i<numberArray.length; i++){
    sum = sum + numberArray[i];
  } //  end for loop
  return sum;
} //  end function

console.log('The sum of the number array', numCount, 'is:', sumAll(numCount));
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let inputArray = [ 7, 36, -4, 15, 12, -8, -47, -12, 88];
let outputArray = [];

function positiveArray(inputNums){
  for(let i=0; i<inputNums.length; i++){
    if(inputNums[i]>=0){
      outputArray.push(inputNums[i]);
    } //  end if
  } //  end for loop
  return outputArray;
} //  end function

console.log('The input array includes:', inputArray);
console.log('After removing the negative numbers, the output array includes:', positiveArray(inputArray));
console.log(' ');

///////////////////////////////////////////////////////////////////////////

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//
//  Create a function that takes an integer as an argument 
//  and returns "Even" for even numbers or "Odd" for odd numbers.

let num = prompt('Enter a number to evaluate:');

function even_or_odd(number) {
  if(number % 2 === 0){
    return 'Even';
  } //  end if
  return 'Odd';
} //  end function

console.log(`The input number of [${num}] is:`, even_or_odd(num));
console.log(' ');

//  Added another codewars problem because I remembered we did the previous one
//  during office hours this week and that would be cheap ;) haha
//
//  Complete the solution so that it reverses the string passed into it.
//  ex.   'world' => 'dlrow'

let forwardVar = 'congratulations';
let backwardVar = '';

function solution(str){
  for(let i=str.length-1; i>=0; i--){
    backwardVar += str[i];
  } //  end for loop
  return backwardVar;
} //  end function

console.log(`The word [${forwardVar}] spelled backwards is:`, solution(forwardVar));