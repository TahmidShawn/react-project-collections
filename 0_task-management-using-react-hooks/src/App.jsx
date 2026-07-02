import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { TaskContext } from "./context/TaskContext";

const App = () => {
    const { state, dispatch } = useContext(TaskContext);
    console.log(state.tasks);

    useEffect(() => {
        async function loadTasks() {
            const response = await fetch("/tasks.json");
            const data = await response.json();

            dispatch({
                type: "LOAD_TASKS",
                payload: data,
            });
        }
        loadTasks();
    }, []);

    function handleAddTask() {
        const newTask = {
            id: Date.now(),
            title: "learn useReducer",
        };

        dispatch({
            type: "ADD_TASK",
            payload: newTask,
        });
    }
    return (
        <div>
            <Link to={"/dashboard"}>Dashboard</Link> <br />
            <button onClick={handleAddTask}>Add Demo Task</button>
        </div>
    );
};

export default App;
