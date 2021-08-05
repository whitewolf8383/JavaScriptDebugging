/* Debugging Exercise #3 
The following snippet of JavaScript code is supposed to use a for loop to 
call a function multiple times. 

The code should pass a number to the function that will multiply it by itself 
(square the number) and display the result in the console.log(). 

The squared number is supposed to be returned back to the main body of JavaScript 
code where it is displayed in the console.log() again to verify the correct number 
was returned by the called function. 

Then the returned number is supposed to be multiplied by 2 before going through the loop 
again to pass the new answer to the function. 

Reminder: Syntax errors are errors that prevent the code from running. Logic errors 
are ones that do not prevent the code from running, but the results are incorrect. 
Look through each line of code carefully to find the errors. Where you find an error 
insert a comment that tells your instructor what change(s) you made so that the code 
produces the correct result. 
*/
/*****************************
* Name: Keith Francis
* Class: ICT-4570
* Session: Summer 2021
* Assignment: Debugging Exercise 3
******************************/
function myFunction (mySquaredNumber){
  let myAnswer = mySquaredNumber * mySquaredNumber; // (1) Changed the operation to multiplication
  console.log ('I am a function that squares a number that is passed to it. Watch me work.');
  console.log ('The answer is:', myAnswer); // (1) Corrected the name of the variable
  return myAnswer; // (1) Added the return
}

let myNumber = 10;
let myNewNumber = 0;

for ( myCounter = 0; myCounter < 3; myCounter++)  {   // (1) Added the second semicolon
  myNewNumber = myFunction(myNumber);  // (1) Changed mySquaredNumber to myNumber 
  console.log ('My number after the function is', myNewNumber);   // (1) Corrected the spelling of myNewNumber
  myNumber = myNumber * 2;
}