import ContentLayout from "../layout/ContentLayout";
import SidebarLayout from "../layout/SidebarLayout";

const Dashboard = () => {
    return (
        <div className="flex h-screen">
            <SidebarLayout />
            <ContentLayout />
        </div>
    );
};

export default Dashboard;
