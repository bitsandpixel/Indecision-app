console.log('es6-arrow-function-2 is running');

/**
 * 1. Arguments object is no longer bound with arrow function
 * i.e if you try to access arguments it is not going to work
 */

//ES5 function which uses arguments
const add = function (num1, num2) {
    //prints the passed values to the arguments
    //it also prints even if you passed more values than number of arguments
    console.log(arguments);
    return num1 + num2;
}

console.log(add(10, 20));

/**
 * Regular arrow function
 * @param {int} num1 
 * @param {int} num2 
 */
const subtract = (num1, num2) => {
    //argument not defined error would be thrown here.
    //if there is need of accessing arguments, code should be written in ES5.  
    //console.log(arguments); 
    return num1 - num2;
}
console.log(subtract(20, 10));

// 2. this keyword is no longer bound with arrow function 

//user object
const user = {
    name: 'Vishnu',
    cities: ['Hamburg', 'Berlin'],

    //ES6 allows us to define to a function without function keyword
    //printPlacesVisited: function () {
    printPlacesVisited() {
        //in case of ES5, we need a workaround to access this of user object.
        // const that = this;
        // this.cities.forEach(function (city) {
        //     console.log(that.name + ' has visited in ' + city);
        // });

        //in case of ES6 arrow functions, they are not bind with their
        //own this value, Instead they just use the value of the context
        //they were created in 
        const citiesMessage = this.cities.forEach((city) => {
            if (city.match('Hamburg')) {
                console.log(this.name + ' is living in ' + city);
            } else {
                console.log(this.name + ' has visited ' + city);
            }
        });
        /*
        * There are places you do not want to use arrow functions for the
        * same reason they do not bind with their this value, for example 
        * methods. (printPlacesVisited) it does not bind with its own this
        * i.e. user object instead it binds with parent scope which is 
        * parent scope which leads to an error.  
        * printPlacesVisited:  ()=> {
        * this.cities.forEach((city) => {
            console.log(this.name + ' has visited '+city);
            });
        * }
        * 
        */
    }
};

user.printPlacesVisited();

/**
 * Example code of Array functon map
 */

const user2 = {
    name: 'Kiran',
    cities: ['Hyderabad', 'Chennai'],
    states: ['Schiesweg-Holstein', 'Lower Saxony'],

    /*
    * forEach lets you perform something on each item like here,
    * print the value to screen but,
    * map will allow you transform each item, getting a new array back.
    * (here cityMessage)you can even change values of array. 
    * 
     */
    printCities() {
        const cityMessage = this.cities.map((city) => {
            /*
            * if (city.match('Hyderabad')) {
            *     return this.name + ' has lived in ' + city;
            * }else{
            *      return city
            * }
            */
            return this.name + ' has visited ' + city;
        });
        return cityMessage;
    },

    printStates() {
        return this.states.map((state) => state + '!');
    }
};

console.log(user2.cities);
console.log(user2.printCities());
console.log(user2.printStates());


//Challenge_01
/*
* multiplier object
* numberss - array of numbers
* multiply by - single number
* multiply - return a new array where the numbers have been multiplied.     
*/

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply())