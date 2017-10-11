import React from "react";

class TodoList extends React.Component {
    render() {
        return (
            <div className="list-group">
                {this.props.todos.map(todo => this.renderTodo(todo))}
            </div>
        );
    }

    renderTodo(todo) {
        return (
            <a
                href="#"
                key={todo.id}
                className="list-group-item list-group-item-action"
            >
                {todo.text}
            </a>
        );
    }
}

export default TodoList;
