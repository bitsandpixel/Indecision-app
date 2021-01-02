/* 
    ES6 classes, sub classes
*/




class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hello ' + this.name;
        /*
        * ES6 Template Strings
        */
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year's old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    // hasHomeLocation() {
    //     return !!this.homeLocation;
    // }

    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}

const travel = new Traveller('vishnu kiran', 30, 'Hyderabad');
console.log(travel.getGreeting());

const other = new Traveller(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());

// const me = new Person('Vishnu Kandanelly');
// console.log(me.getGreeting());

// const other = new Person();
// console.log(other.getGreeting());

// const vishnu = new Person('Vishnu Kandanelly', 30);
// console.log(vishnu.getDescription());

// const anonymous = new Person();
// console.log(anonymous.getDescription());

// const myDetails = new Student('vishnu kiran', 30, 'Information Technology');
// console.log(myDetails.getDescription());

// const anonymous = new Student();
// console.log(anonymous.getDescription());
