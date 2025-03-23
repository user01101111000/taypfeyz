import React from "react";
import {SettingsParametersProps, SettingsContextProps, SettingsContextProviderProps} from "@/types/context_types.ts";
import {toast} from "sonner";

const initialData: SettingsParametersProps = {
    fontSize: 16,
    rootName: "RootObject",
    mapVisible: true,
    suggestions: true,
    folding: true,
    showErrors: true,
    mouseWheelZoom: false
}

const SettingsContext: React.Context<SettingsContextProps> = React.createContext<SettingsContextProps>({} as SettingsContextProps);

const SettingsProvider: React.FC<SettingsContextProviderProps> = (props: SettingsContextProviderProps): React.JSX.Element => {

    const localData: string | null = localStorage.getItem("settings");
    const settings: SettingsParametersProps = localData ? (JSON.parse(localData) as SettingsParametersProps) : initialData;

    const [fontSize, setFontSize] = React.useState<number>(settings.fontSize);
    const [rootName, setRootName] = React.useState<string>(settings.rootName);
    const [mapVisible, setMapVisible] = React.useState<boolean>(settings.mapVisible);
    const [suggestions, setSuggestions] = React.useState<boolean>(settings.suggestions);
    const [folding, setFolding] = React.useState<boolean>(settings.folding);
    const [showErrors, setShowErrors] = React.useState<boolean>(settings.showErrors);
    const [mouseWheelZoom, setMouseWheelZoom] = React.useState<boolean>(settings.mouseWheelZoom);


    const reset: VoidFunction = (): void => {
        setFontSize(initialData.fontSize);
        setRootName(initialData.rootName);
        setMapVisible(initialData.mapVisible);
        setSuggestions(initialData.suggestions);
        setFolding(initialData.folding);
        setShowErrors(initialData.showErrors);
        setMouseWheelZoom(initialData.mouseWheelZoom);

        localStorage.setItem("settings", JSON.stringify(initialData));

        toast.success("Settings reset.", {
            duration: 1000
        });
    }

    const save: (data: SettingsParametersProps) => void = (data: SettingsParametersProps): void => {
        setFontSize(data.fontSize);
        setRootName(data.rootName);
        setMapVisible(data.mapVisible);
        setSuggestions(data.suggestions);
        setFolding(data.folding);
        setShowErrors(data.showErrors);
        setMouseWheelZoom(data.mouseWheelZoom);

        localStorage.setItem("settings", JSON.stringify(data));

        toast.success("Settings saved.", {
            duration: 1000
        });
    }


    const data: SettingsContextProps = {
        parameters: {
            fontSize,
            rootName,
            mapVisible,
            suggestions,
            folding,
            showErrors,
            mouseWheelZoom,
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