import React from "react";
import {CodeContextProps, CodeContextProviderProps} from "@/types/code_context_types.ts";

const CodeContext: React.Context<CodeContextProps> = React.createContext<CodeContextProps>({} as CodeContextProps);

const CodeProvider : React.FC<CodeContextProviderProps> = ({children} : CodeContextProviderProps): React.JSX.Element  =>{

    const [code, setCode] = React.useState<string>('');

    const data : CodeContextProps = {
        code,
        setCode
    }

    return  <CodeContext.Provider value={data}>{children}</CodeContext.Provider>
};


const useCode: () => CodeContextProps = (): CodeContextProps => {
    const context: CodeContextProps = React.useContext(CodeContext);
    if (!context) throw new Error("useCode must be used within a SettingsProvider");

    return context;
};

export {CodeProvider, useCode};