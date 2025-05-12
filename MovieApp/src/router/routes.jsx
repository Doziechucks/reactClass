import { createBrowserRouter } from "react-router";
import SignUp from "../components/auth/signup/SignUp"
import Login from "../components/auth/login/Login";
import Layout from "../components/layout/Layout";

const router = createBrowserRouter([
    {
        path: "",
        element: <SignUp/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/home",
        element: <Layout />,
        children: [
            {
                path: "",
                element: NowPlaying
            }
        ]
    }
]
)  
export default router

