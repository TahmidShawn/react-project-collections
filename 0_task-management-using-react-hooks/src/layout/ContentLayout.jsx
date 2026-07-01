import { Outlet } from "react-router";

const ContentLayout = () => {
    return (
        <div className="bg-green-500 basis-[70%] overflow-y-auto">
            <Outlet />
        </div>
    );
};

export default ContentLayout;
