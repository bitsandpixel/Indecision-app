// console.log("build-it-visible is running");

// const app = {
//     title: 'Visibility Toggle'
// };

// const appRoot = document.getElementById('app');

// const showDetails = (e) => {
//     e.preventDefault();
//     visibility = !visibility;
//     render();
// };

// let visibility = false;

// const render = () => {
//     const template =
//         (
//             <div>
//                 <h1>{app.title}</h1>
//                 <button onClick={showDetails}>
//                     {visibility ? 'Hide details' : 'Show Details'}</button>
//                 {visibility && (
//                     <p>Hey, these are some details you can now see</p>

//                 )}
//             </div>
//         );

//     ReactDOM.render(template, appRoot);
// };

// render();

// class Visibility extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleVisible = this.handleVisible.bind(this);
//         this.state = {
//             info: '',
//             buttonName: 'Show Details',
//             isShow: false
//         };
//     }
//     render() {
//         return (
//             <div>
//                 <h1>Visibility Toggle</h1>
//                 <button onClick={this.handleVisible}>{this.state.buttonName}</button>
//                 <p>{this.state.info}</p>
//             </div>
//         );
//     }

//     handleVisible() {
//         this.state.isShow = !this.state.isShow;
//         this.setState((prevState) => {
//             return {
//                 info: prevState.isShow ? 'Hey, these are some details you can now see' : '',
//                 buttonName: prevState.isShow ? 'Hide Details' : 'Show Details'
//             }
//         });
//     }
// }

// ReactDOM.render(<Visibility />, document.getElementById('app'));

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        };
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (<p>Hey, these are some details you can now see</p>)}
            </div>
        );
    }

    handleVisibilityToggle() {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
            }
        });
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

