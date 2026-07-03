export const initialState = {
    tasks: [],
    searchText: "",
    filter: "all",
    sortby: "newest",
};

export function taskReducer(state, action) {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        case "LOAD_TASKS":
            return {
                ...state,
                tasks: action.payload,
            };

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };

        case "TOGGLE_TASK":
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload
                        ? { ...task, completed: !task.completed }
                        : task,
                ),
            };
        case "SET_SEARCH":
            return {
                ...state,
                searchText: action.payload,
            };
        default:
            return state;
    }
}
