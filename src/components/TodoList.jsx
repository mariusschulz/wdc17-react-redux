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
        const className =
            "list-group-item list-group-item-action" +
            (todo.completed ? " list-group-item-success" : "");

        return (
            <a
                href="#"
                key={todo.id}
                className={className}
                style={{
                    textDecoration: todo.completed
                        ? "line-through"
                        : "none"
                }}
                onClick={e => {
                    e.preventDefault();
                    this.props.onToggleTodo(todo.id);
                }}
            >
                {todo.text}
            </a>
        );
    }
}

export default TodoList;
