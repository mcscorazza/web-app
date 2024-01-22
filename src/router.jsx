import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import GuestsLayout from "./components/pages/GuestsLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />
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