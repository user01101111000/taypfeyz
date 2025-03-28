import React from "react";
import {CodeContextProps, CodeContextProviderProps} from "@/types/code_context_types.ts";
import initialCode from "@/constants/code_data.ts";

const CodeContext: React.Context<CodeContextProps> = React.createContext<CodeContextProps>({} as CodeContextProps);

const CodeProvider: React.FC<CodeContextProviderProps> = ({children}: CodeContextProviderProps): React.JSX.Element => {

    const initialOpen: boolean = !Boolean(window.localStorage.getItem("initialOpen"));

    if (initialOpen) window.localStorage.setItem("initialOpen", "true");

    const [code, setCode] = React.useState<string>(initialOpen ? initialCode : "");

    const data: CodeContextProps = {
        code,
        setCode
    }

    return <CodeContext.Provider value={data}>{children}</CodeContext.Provider>
};

const useCode: () => CodeContextProps = (): CodeContextProps => {
    const context: CodeContextProps = React.useContext(CodeContext);
    if (!context) throw new Error("useCode must be used within a SettingsProvider");

    return context;
};

export {CodeProvider, useCode};