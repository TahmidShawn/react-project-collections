import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const MyTask = () => {
    const { state } = useContext(TaskContext);

    return (
        <div>
            <p>MyTask</p>
            <p>Total Tasks : {state.tasks.length}</p>
            <div>
                {state.tasks.map((task, idx) => (
                    <p key={idx}>{task.title}</p>
                ))}
            </div>
        </div>
    );
};

export default MyTask;
