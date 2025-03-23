import React from "react";
import {SettingsParametersProps, SettingsContextProps, SettingsContextProviderProps} from "@/types/context_types.ts";
import {toast} from "sonner";

const initialData: SettingsParametersProps = {
    fontSize: 16,
    mapVisible: true
}

const SettingsContext: React.Context<SettingsContextProps> = React.createContext<SettingsContextProps>({} as SettingsContextProps);

const SettingsProvider: React.FC<SettingsContextProviderProps> = (props: SettingsContextProviderProps): React.JSX.Element => {

    const localData: string | null = localStorage.getItem("settings");
    const settings: SettingsParametersProps = localData ? (JSON.parse(localData) as SettingsParametersProps) : initialData;

    const [fontSize, setFontSize] = React.useState<number>(settings.fontSize);
    const [mapVisible, setMapVisible] = React.useState<boolean>(settings.mapVisible);


    const reset: VoidFunction = (): void => {
        setFontSize(initialData.fontSize);
        setMapVisible(initialData.mapVisible);

        localStorage.setItem("settings", JSON.stringify(initialData));

        toast.success("Settings reset.", {
            duration: 1000
        });
    }

    const save: (data: SettingsParametersProps) => void = (data: SettingsParametersProps): void => {
        setFontSize(data.fontSize);
        setMapVisible(data.mapVisible);

        localStorage.setItem("settings", JSON.stringify(data));

        toast.success("Settings saved.", {
            duration: 1000
        });
    }


    const data: SettingsContextProps = {
        parameters: {
            fontSize: fontSize,
            mapVisible: mapVisible
        },
        save,
        reset
    }

    return <SettingsContext.Provider value={data}>{props.children}</SettingsContext.Provider>
};


const useSettings: () => SettingsContextProps = (): SettingsContextProps => {
    const context: SettingsContextProps = React.useContext(SettingsContext);
    if (!context) throw new Error("useSettings must be used within a SettingsProvider");

    return context;
};


export {SettingsProvider, useSettings};