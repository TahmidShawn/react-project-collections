import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { TaskContext } from "./context/TaskContext";

const App = () => {
    const { state, dispatch } = useContext(TaskContext);

    useEffect(() => {
        if (state.tasks.length > 0) return;

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

    return (
        <div>
            <Link to={"/dashboard"}>Dashboard</Link> <br />
        </div>
    );
};

export default App;
