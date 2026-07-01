import { Link } from "react-router";

const Sidebar = () => {
    return (
        <div className="flex flex-col">
            <Link to={"my-task"}>My Task</Link>
            <Link to={"manage-task"}>Manage Task</Link>
        </div>
    );
};

export default Sidebar;
