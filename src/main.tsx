import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router";
import router from "./route/router.tsx";
import Providers from "@/utils/providers.tsx";

createRoot(document.getElementById('root')!).render(
    <Providers>
        <RouterProvider router={router}/>
    </Providers>
);