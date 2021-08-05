/************************************
* Name: Keith Francis
* Class: ICT-4570
* Session: Summer 2021
* Assignment: Shopping Cart Exercise
* Creates a basic shopping cart calculator for a fictional online retailer
*************************************/

let itemQuantity = 4;
let shopperName = 'Keith';
let itemPrice = 149.99;
let cartTotal = 0;
let shopperDiscount = 0;

cartTotal = itemPrice * itemQuantity;

if (cartTotal > 35.00) {
  shopperDiscount = 7.00;
} else if (cartTotal === 25.00) {
  shopperDiscount = 25.00;
}

cartTotal = cartTotal - shopperDiscount;

console.log(`${ shopperName }, you shopping cart contains ${ itemQuantity } item. 
  Your amount due is ${ cartTotal } with a discount of ${ shopperDiscount } applied.`);