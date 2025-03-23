import React from "react";
import {SettingsProvider} from "@/context/SettingsContext.tsx";
import {Toaster} from "@/components/ui/sonner"

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = (props: ProvidersProps): React.JSX.Element => {
    return <SettingsProvider>
        {props.children}
        <Toaster/>
    </SettingsProvider>;
};

export default Providers;