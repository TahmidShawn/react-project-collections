import { Link } from "react-router";

const Sidebar = () => {
    return (
        <div className="flex flex-col">
            <Link to={"/"}>App</Link>
            <Link to={"my-task"}>My Task</Link>
            <Link to={"manage-task"}>Manage Task</Link>
            <Link to={"task-form"}>Task Form</Link>
        </div>
    );
};

export default Sidebar;
