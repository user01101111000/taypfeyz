import React from "react";
import {SettingsProvider} from "@/context/SettingsContext.tsx";
import {Toaster} from "@/components/ui/shadcn/sonner.tsx"
import {CodeProvider} from "@/context/CodeContext.tsx";

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = (props: ProvidersProps): React.JSX.Element => {
    return <CodeProvider>
        <SettingsProvider>
            {props.children}
            <Toaster/>
        </SettingsProvider>
    </CodeProvider>;
};

export default Providers;