import React from "react";

export type SettingsContextProps = {
    parameters: SettingsParametersProps,
    save: (data: SettingsParametersProps) => void,
    reset: VoidFunction
};

export type SettingsParametersProps = {
    fontSize: number,
    rootName: string,
    prefix: string,
    namespace: string,
    flow: boolean,
    mapVisible: boolean,
    folding: boolean,
    suggestions: boolean,
    showErrors: boolean,
    wordWrap: boolean,
    lineHeight: number,
    lineNumbers: boolean,
    autoSave: boolean
}


export type SettingsContextProviderProps = {
    children: React.ReactNode
}
