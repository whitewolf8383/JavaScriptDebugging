/* Debugging Exercise #2
The following snippet of JavaScript code is supposed to ask the user for their name
and how many shirts they want to purchase. Then the script uses if/else statements to determine if a discount 
and free shirts are applicable. The code contains 5 errors. Three errors are syntax errors and two other 
errors are logic errors. Syntax errors are errors that prevent the code from running. Logic errors are ones 
that do not prevent the code from running, but the results are incorrect. Look through each line of code 
carefully to find the errors. Where you find an error insert a comment that tells your instructor what 
change(s) you made so that the code produces the correct result. 
*/

/****************************
* Name: Keith Francis
* Class: ICT-4570
* Session: Summer 2021
* Assignment: Debug Exercise 2
* Corrections: Changed promt to prompt, changed double quote to single quote, changed less than to greater than, 
* changed "price" to myQuantity, and changed "greetings" to "greeting".
*/

let greeting = 'Hello There,';
let purchaseTotal = 0;
let price = 25.95;
let discount = 0;
let extraShirts = 0;
let myName = prompt ('What is your name? ');
let myQuantity = prompt ('How many shirts do you want? '); // (2) Changed the double quote to single quote, Changed promt to prompt

if (myQuantity > 10)  {   
    discount = 10.95 * 2;   
    extraShirts = 2;   
    console.log (greeting, myName, 'your order qualifies for a', discount, 'discountoff the price');   
    console.log ('You also qualify for', extraShirts, 'free shirts automatically added to your order!');
}  else if (myQuantity > 5 && myQuantity <= 10)  {   // (1) Changed the less than to greater than for correct logic flow
    discount = 10.95;   
    extraShirts = 1;   
    console.log (greeting, myName, 'your order qualifies for a', discount, 'discountoff the price');   
    console.log ('You also qualify for', extraShirts, 'free shirts automatically added to your order!');
}  else  {   
    console.log (greeting, myName, 'your order does not qualify for our free stuff plus savings program.');
}

purchaseTotal = (price * myQuantity) - discount; // (1) Changed the second "price" to "myQuantity" for correct pricing
console.log (greeting, myName, 'your total amount due is:', purchaseTotal); // (1) Corrected variable name greetings -> greeting