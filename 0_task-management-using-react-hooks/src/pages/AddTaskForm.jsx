import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

const AddTaskForm = () => {
    const [title, setTitle] = useState("");
    const { dispatch } = useContext(TaskContext);
    function handleSubmit() {
        if (!title.trim()) return;
        const newTask = {
            id: Date.now(),
            title: title,
            completed: false,
            priority: "medium",
        };

        dispatch({
            type: "ADD_TASK",
            payload: newTask,
        });
        setTitle("");
    }
    return (
        <div>
            <input
                type="text"
                value={title}
                placeholder="Task title"
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={handleSubmit}>Add Task</button>
        </div>
    );
};

export default AddTaskForm;
