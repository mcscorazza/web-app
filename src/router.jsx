import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import GuestsLayout from "./components/pages/GuestsLayout";
import TaskList from "./components/pages/Task";

const tasks = [
    {
        id: 1,
        name: "Corazza",
        function: "Especialista"
    },
    {
        id: 2,
        name: "Eduardo",
        function: "Engenheiro"
    },
    {
        id: 3,
        name: "Matheus",
        function: "Engenheiro"
    },
    {
        id: 4,
        name: "Tenorio",
        function: "Aspira"
    }
]

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path:'/tasks',
        element: <TaskList tasks= {tasks} />
    },
    
    {
        path: '/auth',
        element: <GuestsLayout />,
        children: [
            {
                path:'login',
                element: <Login />
            },
            {
                path:'register',
                element: <Register />
            },
        ]
    }


])

export default router;