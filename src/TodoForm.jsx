import React from "react";

class TodoForm extends React.Component {
    state = {
        text: ""
    };

    render() {
        return (
            <form>
                <input
                    value={this.state.text}
                    onChange={e => this.updateText(e)}
                    className="form-control"
                    autoFocus
                />
            </form>
        );
    }

    updateText(e) {
        this.setState({
            text: e.target.value
        });
    }
}

export default TodoForm;
