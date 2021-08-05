/* Week 5 Debugging Assignment
Below are two objects and some text that is supposed to print a message from 
both objects in the console.log of the browser. There are 5 syntax errors and 
3 logic errors preventing this from working properly.
*/

let customer = {  // Missing equals sign
  firstName: 'Jane',
  lastName: 'Doe',
  age: 42,      // Missing comma
  address: '101 Dovetail Road',
  city: 'New Auburn',
  state: 'WI',
  zip: '54757', // Changed double quote to single quote
  lastOrderDate: 'July 27, 2020', // Added comma and space
  orderTotal: 259.50
};

let shirts = {                       
  availableSizes: 'S, M, L, XL', // Changed semi-colon to comma
  colors: 'black, white, red, green, blue', // Added 2 spaces
  price: 285.85
};

// Added formatter for money values
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

console.log(customer.firstName + ' ' + customer.lastName + ' typically orders ' 
+ shirts.colors +' available colors in ' + shirts.availableSizes + ' sizes. ' 
+ customer.firstName +' last ordered from ACME Shirts on ' + customer.lastOrderDate 
+ ', and ' + customer.firstName + ' spent ' + formatter.format(customer.orderTotal) 
+ ' on our merchandise.');  // Added a + and added formatting to money value