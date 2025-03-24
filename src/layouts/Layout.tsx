import {Outlet} from "react-router";
import Header from "../components/layout/Header/Header.tsx";
import Footer from "../components/layout/Footer/Footer.tsx";
import React, {Suspense} from "react";
import LoadingPage from "@/components/ui/LoadingPage.tsx";

const Layout: () => React.JSX.Element = (): React.JSX.Element => {
    return <main className="w-full min-h-dvh relative grid grid-rows-[auto_1fr_auto]">

        <div
            className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#21b_100%)]"/>

        <Header/>

        <Suspense fallback={<LoadingPage/>}>
            <Outlet/>
        </Suspense>

        <Footer/>

    </main>
};

export default Layout;