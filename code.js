// Do not modify this array.
const numberArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472,
];

/*
  Complete all of the following exercises.
  DO NOT HARD-CODE ANY ANSWERS
  
  Every exercise should be completed using a loop.

*/
/*
---------------------------------------------------------------------------
Exercise One

Log all 20 elements of numberArray. 
(469, 755, 244, …, 940, 472)
*/
console.log("1) - Log every number"); // These console.log lines are to help with grading, ignore them.

function logEveryNumber() {
  /* 
  Your code goes below
  Write a for or a while loop
  Use console.log() to print every number 
  */
}

logEveryNumber();

/*
---------------------------------------------------------------------------
Exercise Two

Display all the even numbers contained in sampleArray. 
(244, 758, 450, …, 940, 472)

Hint: How do you know if a number is even?
The easiest way is to use the Remainder Operator.

Way back in the "Numbers, Operators, and Expressions" lesson we talked about the remainder.
given some number
let number = 4
number % 2 === 0 will be true if the number is even, and false if the number is odd.
*/
console.log("2) - Log even numbers");

function logEvenNumbers() {
  /* 
  Your code goes below
  Write a for or a while loop
  console.log() the result 
  */
}

logEvenNumbers();

/*
---------------------------------------------------------------------------
Exercise Three

Display all the odd numbers contained in sampleArray. 
(469, 755, 245, …, 179, 535)
*/
console.log("3) - Log odd numbers");

function logOddNumbers() {
  /* 
  Your code goes below
  Write a for or a while loop
  console.log() the result 
  */
}

logOddNumbers();

/*
---------------------------------------------------------------------------
Exercise Four

Display the numbers divisible by 8 in sampleArray: 
(712, 456, …, 472)

Hint: How do you know something is divisible by 8?
You can use the remainder operator again?
To be divisible by 8, then the remainder of the number being divided by 8 should be zero.
So...
if number % 8 === 0, then it is divisible by 8.
*/
console.log("4) - Log numbers divisible by 8");

function logNumbersDivisibleByEight() {
  /* 
  Your code goes below
  Write a for or a while loop
  console.log() the result 
  */
}

logNumbersDivisibleByEight();

/*
---------------------------------------------------------------------------
Exercise Five

Display the sum of all the numbers in the array
Hint: It should be 9096
*/
console.log("5) - Sum of numbers (9096)");

function sumOfNumbers() {
  /* 
  Your code goes below
  Write a for or a while loop
  console.log() the result 
  */
}

sumOfNumbers();

/*
---------------------------------------------------------------------------
Exercise Six

Count how many numbers are > 500

Hint: Use the num variable provided below to keep track of how many times you have
seen a number greater than 500.

There should be seven!
*/
console.log("6) - count of numbers > 500 (7)");

function countNumbersGreaterThanFiveHundred() {
  let num = 0;
  /* 
  Your code goes below
  Write a for or a while loop
  Every time you find a number greater than 500, add one to num.
  */

  console.log(num);
}

countNumbersGreaterThanFiveHundred();

/*
---------------------------------------------------------------------------
Exercise Seven

Display the smallest element in sampleArray.
*/
console.log("7) - smallest number (20)"); // These console.log lines are to help with grading, ignore them.

function findSmallestNumber() {
  /* 
  Your code goes below
  Write a for or a while loop
  console.log() the result 
  */
}

findSmallestNumber();

/*
---------------------------------------------------------------------------
Exercise Eight

Display the largest element in sampleArray.
*/
console.log("8 - Largest Number (940)"); // These console.log lines are to help with grading, ignore them.

function findLargestNumber() {
  /* 
  Your code goes below
  Write a for or a while loop
  console.log() the result 
  */
}

findLargestNumber();

/*
---------------------------------------------------------------------------
Exercise Nine

Filter the array for numbers which are less than 400.

First, create a new empty array.

Then loop through the numberArray.
  If a number is < 400, then add it to the new array.

When you are done, print out the new array.
*/
console.log("9 - find numbers < 400");

function findNumbersLessThanFourHundred() {
  let newArray = [];
  /* 
  Your code goes below
  Write a for or a while loop
  add all numbers less then 400 to newArray
  */

  console.log(newArray);
}

findNumbersLessThanFourHundred();
