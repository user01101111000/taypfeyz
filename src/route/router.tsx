import {createBrowserRouter, RouteObject} from "react-router";
import Layout from "../layouts/Layout.tsx";
import React from "react";

const Home: React.LazyExoticComponent<() => React.JSX.Element> = React.lazy((): Promise<typeof import("../pages/Home.tsx")> => import("../pages/Home.tsx"));

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