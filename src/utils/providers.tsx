import React from "react";
import { SettingsProvider } from "@/context/SettingsContext.tsx";
import { Toaster } from "@/components/ui/shadcn/sonner.tsx"
import { CodeProvider } from "@/context/CodeContext.tsx";
import ReactGA from "react-ga4";

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = (props: ProvidersProps): React.JSX.Element => {

    React.useEffect((): void => {
        ReactGA.initialize(import.meta.env.VITE_GA_ID);

        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home" });
    }, []);

    return <CodeProvider>
        <SettingsProvider>
            {props.children}
            <Toaster />
        </SettingsProvider>
    </CodeProvider>;
};

export default Providers;