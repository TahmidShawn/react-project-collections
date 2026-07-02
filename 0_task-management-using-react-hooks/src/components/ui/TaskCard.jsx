import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskCard = ({ task }) => {
    const { dispatch } = useContext(TaskContext);
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>
                    dispatch({
                        type: "TOGGLE_TASK",
                        payload: task.id,
                    })
                }
            />
            <span
                className={
                    task.completed
                        ? "line-through text-gray-200"
                        : "text-gray-900"
                }
            >
                {task.title}
            </span>
            <button
                className="bg-red-500"
                onClick={() =>
                    dispatch({
                        type: "DELETE_TASK",
                        payload: task.id,
                    })
                }
            >
                Delete
            </button>
        </div>
    );
};

export default TaskCard;
