
import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedLayout from "./layouts/ProtectedLayout";
import PublicLayout from "./layouts/PublicLayout";
import Login from "./view/login";
import NotFound from "./view/not-found";
import Signup from "./view/sign-up";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ProtectedLayout />,
        children: [
            {
                path: '/',
                element: <div className="p-4"> Dashboard Content (Protected) </div> // Placeholder until dashboard is ready
            },
        ]
    },
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;
