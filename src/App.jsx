import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
    render() {
        const todos = [
            { id: 1, text: "Learn React", completed: false },
            { id: 2, text: "Learn Redux", completed: false }
        ];

        return (
            <div>
                <h1>To Do</h1>
                <TodoForm />
                <TodoList todos={todos} />
            </div>
        );
    }
}

export default App;
