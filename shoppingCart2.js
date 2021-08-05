/*****************************
* Name: Keith Francis
* Class: ICT-4570
* Session: Summer 2021
* Assignment: Shopping Cart 2
******************************/

/* Part One */
const shirtPrice = 25.95;
const customerInformation = [
  customersFirstName = yourName(),
  numberOfShirts = shirtNumber(),
  shirtColor = yourShirtColor(),
  shirtSize = yourShirtSize()
];

function yourName() { 
  let name = prompt('What is your name?');
  while (name.length <= 2) {
    name = prompt('Name needs to be longer than 2 characters. What is your name?');
  }
  return name;
}
function shirtNumber(){
  let number = prompt('How many shirts would you like?');
  while (isNaN(number)){
    number = prompt('Invalid emtry. Please enter the number of shirts you would like.')
  }
  while (number <= 0){
    number = prompt('The number of shirts must be greater than 0. How many shirts would you like?')
  }
  return number;
}
function yourShirtColor(){
  let color = prompt('Please choose a color: red, blue, green, black, or white.');
  let i = 0;
  while (i < 1){
    if (color.toLowerCase().localeCompare('red') === 0){
      i = 1;
    } else if (color.toLowerCase().localeCompare('blue') === 0){
      i = 1;
    } else if (color.toLowerCase().localeCompare('green') === 0){
      i = 1;
    } else if (color.toLowerCase().localeCompare('black') === 0){
      i = 1;
    } else if (color.toLowerCase().localeCompare('white') === 0){
      i = 1;
    } else {
      color = prompt('The shirt color must be red, blue, green, black, or white. Please choose a color.');
    }
  }
  return color;
}
function yourShirtSize(){
  let size = prompt('Please choose a size: small, medium, large, extra-large.');
  let i = 0;
  while (i < 1){
    if (size.toLowerCase().localeCompare('small') === 0){
      i = 1;
    } else if (size.toLowerCase().localeCompare('medium') === 0){
      i = 1;
    } else if (size.toLowerCase().localeCompare('large') === 0){
      i = 1;
    } else if (size.toLowerCase().localeCompare('extra-large') === 0){
      i = 1;
    } else {
      size = prompt('The shirt size can only be small, medium, large, or extra-large. Please choose a size.');
    }
  }
  return size;
}
const totalAmountOwed = shirtPrice * customerInformation[1];

for (let i = 0; i < customerInformation.length; i++){
  console.log(customerInformation[i]);
}
console.log(shirtPrice);
console.log(totalAmountOwed);


/* Part Two */
const age12 = 12; //variable not needed for this assignment
const age13 = 13;
const age17 = 17;
let yourAge = prompt('What is your age?');
while (isNaN(yourAge)){
  yourAge = prompt('Invalid entry. Please enter your age.');
}
while (yourAge <= 0){
  yourAge = prompt('Invalid age. Please enter a valid age.')
}

if(yourAge < age13){
  alert('You can purchase "Fruit Juice" from the store.');
} else if(yourAge <= age17){
  alert('You can purchase "caffeine-free soda" from the store.')
} else {
  alert('You can purchase "caffeinated soda" from the store.')
}