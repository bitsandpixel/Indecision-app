console.log('es6-let-const is running');

var nameVar = "Vishnu";
nameVar = "Kiran";
var nameVar = "Viski";
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "July";
// let nameLet = "John"
//cannot create duplicate variable names with let
console.log("nameLet", nameLet);

const nameConst = "Frank";
// nameConst ="Gunther";
console.log("nameConst", nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName;
}

console.log(getPetName());
// console.log(petName);

//---------------------------------------------------Block scoping-------------------------------------------------

// var fullName = 'Vishnu Kiran Kandanelly';
const fullName = 'Vishnu Kiran Kandanelly';
let middleName;
let lastName;

if(fullName){
    var firstName = fullName.split(' ')[0];
    middleName = fullName.split(' ')[1];
    lastName = fullName.split(' ')[2];
    console.log("first name: "+ firstName);
    
}

console.log(firstName);
console.log(middleName);
console.log(lastName);


//-------------var variables are function scoped---------
//-------------const variables are block scoped-----------
//-------------let variables are block scoped-----------

/*here, firstName will be scoped to fullName variable 
which defined outside of the if condition even if the variable firstName is inside if condition
*/

//---------------------------------------------------Block scoping-------------------------------------------------


// var template = 

// (
// <div><p><b>{getPetName()}</b></p></div>

// );

// var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);





