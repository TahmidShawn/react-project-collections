import { useReducer } from "react";
import { TaskContext } from "./TaskContext";
import { taskReducer, initialState } from "../reducer/taskReducer";
export function TaskProvider({ children }) {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <TaskContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}
