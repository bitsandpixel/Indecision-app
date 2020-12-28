'use strict';

console.log('app.js is running!');

var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var oneRemoveAll = function oneRemoveAll() {
    if (app.options.length > 0) {
        app.options = [];
        renderApp();
    }
};

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            'p',
            null,
            app.subTitle
        ),
        React.createElement(
            'p',
            null,
            app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: oneRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item One'
            ),
            React.createElement(
                'li',
                null,
                'Item Two '
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
