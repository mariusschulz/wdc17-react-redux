import React from "react";
import { connect } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>To Do</h1>
                <TodoForm
                    onCreateTodo={todo => this.createTodo(todo)}
                />
                <TodoList
                    onToggleTodo={id => this.toggleTodo(id)}
                    todos={this.props.todos}
                />
            </div>
        );
    }

    createTodo(todo) {
        this.props.dispatch({
            type: "CREATE_TODO",
            todo
        });
    }

    toggleTodo(id) {
        this.setState(state => ({
            todos: state.todos.map(todo => {
                if (todo.id !== id) {
                    // Nicht unser Todo, also Finger weg
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                };
            })
        }));
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStateToProps)(App);
