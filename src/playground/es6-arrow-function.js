console.log('es6-arrow-function is running');

function square(x) {
    return x * x;
}

console.log(square(3));


//Arrow functions are always anonymous functions
const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(9));

//Arrow function expression syntax

const cube = (x) => x * x * x;

console.log(cube(2));

//Challenge_01
/**
 * Use Arrow function
 * getFirstName('Vishnu Kiran') o/p : vishnu
 * 1. Create regular arrow function
 * 2. Create arrow function using shorthand syntax
 */

 /**
  * gets the first name from a given full name using regular arrow function
  * @param {String} fullName 
  */
 const getFirstName = (fullName) =>{
     return fullName.split(' ')[0];
 }

 console.log('First name: ' +getFirstName('Vishnu Kiran'));

 /**
  * gets the last name from a given full name usings arrow function shorthand syntax
  * @param {*} fullName 
  */
 const getLastName = (fullName) => fullName.split(' ')[1];

 console.log('Last name: ' +getLastName('Vishnu Kiran'));