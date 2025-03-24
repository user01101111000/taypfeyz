import React from "react";

export type SettingsContextProps = {
    parameters: SettingsParametersProps,
    save: (data: SettingsParametersProps) => void,
    reset: VoidFunction
};

export type SettingsParametersProps = {
    fontSize: number,
    rootName: string,
    prefix : string,
    namespace: string,
    mapVisible: boolean,
    folding: boolean,
    suggestions: boolean,
    showErrors: boolean,
    mouseWheelZoom: boolean
}


export type SettingsContextProviderProps = {
    children: React.ReactNode
}
