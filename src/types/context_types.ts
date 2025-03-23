import React from "react";

export type SettingsContextProps = {
    parameters: SettingsParametersProps,
    save: (data: SettingsParametersProps) => void,
    reset: VoidFunction
};

export type SettingsParametersProps = {
    fontSize: number,
    mapVisible: boolean
}


export type SettingsContextProviderProps = {
    children: React.ReactNode
}
