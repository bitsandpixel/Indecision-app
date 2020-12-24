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

//Ueb_02
//Create app object with two values - title and subtitle (what is strict)
//use Title, subtitle
//render template

//Conditional rendering
//use javascipt coding
// if statements
//ternary operators
//logical and operator

//ueb_03
//only render the subtitle(and p tag) if subtitle exist - logical and operator
//render new p tag - if options.length > 0 "Here are your options" , "No options" (below subtitle)

const app =
{
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: ["One", "Two"]
};

// const length = options.length;

const template =
    (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options" : "No options"}</p>

            <ol>
                <li>Item One</li>
                <li>Item Two </li>
            </ol>
        </div>
    );



//Ueb_01
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

const user = {
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
    return <b>{value}:</b>
};

//arrow functions
/**
 *
 * @param {* String} location location of the user
 */
function getLocation(location) {
    if (location) {
        return <p>{makeBold("Location")} {location}</p>;
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
const templateTwo =
    (
        <div>
            <h1>{user.name ? user.name : "Anonymous"}</h1>
            {(user.age && user.age >= 18) && <p>{makeBold("Age")} {user.age}</p>}
            {getLocation(user.location)}
            <p>{makeBold("Room")} {user.roomNumber}</p>
        </div>
    );

const appRoot = document.getElementById('app');
const appRoot2 = document.getElementById('app2');

ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot2);
