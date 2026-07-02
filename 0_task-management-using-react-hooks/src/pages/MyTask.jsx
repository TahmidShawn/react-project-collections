import { TaskContext } from "../context/TaskContext";
import TaskCard from "../components/ui/TaskCard";
import { useContext, useEffect } from "react";

const MyTask = () => {
    const { state, dispatch } = useContext(TaskContext);

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

    return (
        <div>
            <p>MyTask</p>

            <div>
                {state.tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default MyTask;
