"use strict";

console.log('app.js is running!');

//JSX - javascript XML (is a javascript syntax extension)

//in JSX it is not allowed to have adjacent elements unless they are enclosed in an Tag.
//here div tag is doing that work
//div is called as wrapper div


//#region 

// var template = (
// <div>
//     <h1>Indecision app</h1>
//     <p>This is some info</p>
//     <p>This is another testing info</p>
//     <ol>
//         <li>Item One</li>
//         <li>Item Two</li>
//     </ol>
// </div>
// );
//#endregion

//Task_02
//Create app object with two values - title and subtitle (what is strict)
//use Title, subtitle
//render template

//Conditional rendering
//use javascipt coding
// if statements
//ternary operators
//logical and operator

//Task_03
//only render the subtitle(and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are your options" , "No options" (below subtitle)

var app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
};

// const length = options.length;

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        "p",
        null,
        app.subTitle
    ),
    React.createElement(
        "p",
        null,
        app.options && app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two "
        )
    )
);

//Task_01
//Create a new templateTwo var JSX expression
//div
//h1 -> my name
//p -> age: age
//p -> location:
//Render templateTwo instead of


// var userName = "Vishnu";
// var age = 30;
// var loc = "Hamburg";
// var roomNumber = 7112;

var user = {
    name: "Vishnu",
    age: 30,
    location: "Hamburg",
    roomNumber: 7112
};

/**
 *
 * @param {* any} value to make it bold
 */
function makeBold(value) {
    return React.createElement(
        "b",
        null,
        value,
        ":"
    );
};

//arrow functions
/**
 *
 * @param {* String} location location of the user
 */
function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            makeBold("Location"),
            " ",
            location
        );
    }

    //REVIEW: implicitely returns undefined, no need to mention it explicitly.
    // else {
    //     return undefined;
    // }
}
// calling functions from javascript expressions in JSX
//deleted code
//<p>Location: {getLocation(user.location)}</p>
//<h1>{user.name.toUpperCase()}</h1>
//<p>{makeBold("Age")} {user.age}</p>
var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        makeBold("Age"),
        " ",
        user.age
    ),
    getLocation(user.location),
    React.createElement(
        "p",
        null,
        makeBold("Room"),
        " ",
        user.roomNumber
    )
);

var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot2);
