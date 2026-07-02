import { useContext, useEffect } from "react";
import { Link } from "react-router";
import { TaskContext } from "./context/TaskContext";

const App = () => {


    return (
        <div>
            <Link to={"/dashboard"}>Dashboard</Link> <br />
        </div>
    );
};

export default App;
