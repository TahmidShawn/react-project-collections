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
        default:
            return state;
    }
}
