import {createBrowserRouter, RouteObject} from "react-router";
import Layout from "../layouts/Layout.tsx";
import Home from "../pages/Home.tsx";

const routes: RouteObject[] = [
    {
        path: "/home?",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }
];


const router = createBrowserRouter(routes);

export default router;