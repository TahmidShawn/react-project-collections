import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter.jsx";
import { TaskProvider } from "./context/TaskProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <TaskProvider>
                <AppRouter />
            </TaskProvider>
        </BrowserRouter>
    </StrictMode>,
);
