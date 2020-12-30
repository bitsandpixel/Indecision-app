console.log("build-it-visible is running");

const app = {
    title: 'Visibility Toggle'
};

const appRoot = document.getElementById('app');

const showDetails = (e) => {
    e.preventDefault();
    visibility = !visibility;
    render();
};

let visibility = false;

const render = () => {
    const template =
        (
            <div>
                <h1>{app.title}</h1>
                <button onClick={showDetails}>
                    {visibility ? 'Hide details' : 'Show Details'}</button>
                {visibility && (
                    <p>Hey, these are some details you can now see</p>

                )}
            </div>
        );

    ReactDOM.render(template, appRoot);
};

render();