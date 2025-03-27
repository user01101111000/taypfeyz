import {Outlet} from "react-router";
import Header from "../components/layout/Header/Header.tsx";
import React, {Suspense} from "react";
import LoadingPage from "@/components/ui/LoadingPage.tsx";

const Layout: () => React.JSX.Element = (): React.JSX.Element => {
    return <main className="w-full min-h-dvh relative grid grid-rows-[auto_1fr] bg-[#1E1E1E]">

        <Header/>

        <Suspense fallback={<LoadingPage/>}>
            <Outlet/>
        </Suspense>

    </main>
};

export default Layout;