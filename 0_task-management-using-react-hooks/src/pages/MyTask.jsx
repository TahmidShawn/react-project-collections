import { useContext } from "react";
import TaskCard from "../components/ui/TaskCard";
import { TaskContext } from "../context/TaskContext";

const MyTask = () => {
    const { state } = useContext(TaskContext);

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
