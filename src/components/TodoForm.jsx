import React from "react";

class TodoForm extends React.Component {
    state = {
        text: ""
    };

    render() {
        return (
            <form onSubmit={e => this.createTodo(e)}>
                <input
                    value={this.state.text}
                    onChange={e => this.updateText(e)}
                    className="form-control"
                    autoFocus
                />
            </form>
        );
    }

    createTodo(e) {
        e.preventDefault();
        const newTodo = {
            id: Date.now(),
            text: this.state.text,
            completed: false
        };
        this.props.onCreateTodo(newTodo);
        this.setState({ text: "" });
    }

    updateText(e) {
        this.setState({
            text: e.target.value
        });
    }
}

export default TodoForm;
