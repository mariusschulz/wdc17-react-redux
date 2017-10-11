const initialState = {
    todos: []
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE_TODO":
            return {
                todos: [action.todo, ...state.todos]
            };

        default:
            return state;
    }
}
