class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {formtask: '',};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({formtask: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A task was submitted: ' + this.state.formtask);
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <h1> Todo List </h1>
                <form onSubmit={this.handleSubmit} onKeyUp{this.handleChange}>
                    <label>
                        Name:
                        <input type='text' value={this.state.formtask} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Todo />);
}