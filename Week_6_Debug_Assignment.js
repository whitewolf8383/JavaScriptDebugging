/* Debugging Exercise #6

The three lines of code below contains syntax and logic errors. Find and fix the bugs so that the
code sets the session storage to Jane Doe, and shows that value after execution of the getItem command. Be sure
to include comments that show what you did to fix the errors.  */

console.log("I am going to set up session storage now...");
sessionStorage.setItem('userName', 'Jane Doe'); // Changed LocalStorgae to sessionStorage
sessionStorage.getItem('userName'); // Corrected spelling of sessionStorage and getItem


/*
The three lines of code below contains syntax errors. Find and fix the bugs so that the code removes the session
storage value and shows "null" in the console after executing the getItem command. Be sure to include comments
that show what you did to fix the errors.  */

console.log("I am going to remove the session storage value and show the results...");
sessionStorage.removeItem('userName'); // Corrected spelling of sessionStorage
sessionStorage.getItem('userName'); // Corrected spelling of getItem


/*
The three lines of code below contains syntax and logic errors. Find and fix the bugs so that the code
sets the local storage to John Doe, and shows that value after execution of the getItem command. Be sure to
include comments to show what you did to fix the errors. */

console.log("I am going to set local storage now...");
localStorage.setItem('userName', 'John Doe'); // Changed sessionStorage to localStorage
localStorage.getItem('userName'); // Corrected spelling of localStorage.getItem and userName


/*
The three lines of code below contains syntax errors. Find and fix the bugs so that the code removes the local
storage value and shows "null" in the console after executing the getItem command. Be sure to include comments
that show what you did to fix the errors. */

console.log("I am going to remove the local storage value and show the results..."); // Added first " to string
localStorage.removeItem('userName'); // Corrected spelling of removeItem
localStorage.getItem('userName');
