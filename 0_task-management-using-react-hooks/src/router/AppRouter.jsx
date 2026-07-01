import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import MyTask from "../pages/MyTask";
import ManageTask from "../pages/ManageTask";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<Dashboard />} path="/">
                    <Route element={<MyTask />} path="my-task" />
                    <Route element={<ManageTask />} path="manage-task" />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
