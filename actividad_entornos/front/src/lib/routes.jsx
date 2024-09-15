// router.js o routes.js
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import { LandingPage } from "../pages/LandingPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    }
]);

export default router;
