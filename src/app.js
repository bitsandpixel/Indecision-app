console.log('app.js is running!');

/**
 * an object consists of title, subtitle and an array of options
 */
const app =
{
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

/**
 * a function to add a new element to options array.
 * @param {*} e 
 */
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

/**
 * a function to choose a random option among elements of options array.
 */
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

/**
 * a function to remove all the elements from the options array.
 */
const oneRemoveAll = () => {
    if (app.options.length > 0) {
        app.options = [];
        renderApp();
    }
};

const appRoot = document.getElementById('app');

/**
 * a function to render the indecision app.
 */
const renderApp = () => {
    const template =
        (
            <div>
                <h1>{app.title}</h1>
                {app.subTitle && <p>{app.subTitle}</p>}
                <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
                <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
                <button onClick={oneRemoveAll}>Remove All</button>
                <ol>
                    {
                        app.options.map((option) => <li key={option}>{option}</li>)
                    }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type='text' name='option'></input>
                    <button>Add option</button>
                </form>
            </div>
        );

    ReactDOM.render(template, appRoot);
};

renderApp();
