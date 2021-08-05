/* Debugging Exercise #7

The following snippet of JavaScript code is supposed to compute the total amount due for a customer's order
from ACME Shirts. The code contains 4 errors. Three errors are syntax errors and one is a logic error. The
comment on Line 7 should give you a clue for one of the errors. */

function myFunction (shirts)      /* compute the total amount due for customer order */
{
   let shippingCost = 5.00;                     
   let total = shirts * 25.95;          
   return (total + shippingCost);  //(1) Added shippingCost to total for correct total amount
}

let order = 10;                                       
let customerOrder = myFunction(order);  // (1) Corrected spelling of order

console.log('The customer ordered:', order);  // (1) Corrected spelling of order
console.log('The total amount due is:', customerOrder); // (1) changed variable to customeOrder