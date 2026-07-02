import { Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import MyTask from "../pages/MyTask";
import ManageTask from "../pages/ManageTask";
import App from "../App";
import AddTaskForm from "../pages/AddTaskForm";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<App />} path="/" />
                <Route element={<Dashboard />} path="/dashboard">
                    <Route element={<MyTask />} path="my-task" />
                    <Route element={<ManageTask />} path="manage-task" />
                    <Route element={<AddTaskForm />} path="task-form" />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRouter;
