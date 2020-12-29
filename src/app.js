console.log('app.js is running!');

const app =
{
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const oneRemoveAll = () => {
    if (app.options.length > 0) {
        app.options = [];
        renderApp();
    }
};

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template =
        (
            <div>
                <h1>{app.title}</h1>
                {app.subTitle && <p>{app.subTitle}</p>}
                <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
                <button onClick={onMakeDecision}>What should I do?</button>
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
