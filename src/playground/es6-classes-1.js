class Person {
    constructor(name = 'Anonymous') {
        this.name = name || 'test';
    }

    getGreeting() {
        // return 'Hello ' + this.name;
        /*
        * ES6 Template Strings
        */
       return `Hello ${this.name}!`;
    }
}

const me = new Person('Vishnu Kandanelly');
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());