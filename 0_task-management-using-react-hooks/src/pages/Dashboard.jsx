import Content from "../layout/Content";
import Sidebar from "../layout/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <Content />
        </div>
    );
};

export default Dashboard;
