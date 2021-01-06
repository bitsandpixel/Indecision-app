class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer';
        const options = [];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action options={options} />
                <Options options={options} />
                <AddOption options={options} />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
    }
    handlePick() {

        if (this.props.options.length > 0) {
            const randomNum = Math.floor(Math.random() * this.props.options.length);
            const option = this.props.options[randomNum];
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        if (this.props.options.length > 0) {
            this.props.options.length = 0;
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>RemoveAll</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>

        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            this.props.options.push(option);
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'></input>
                <button>Add Option</button>
            </form>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));