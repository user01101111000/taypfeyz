import React from "react";
import {SettingsParametersProps, SettingsContextProps, SettingsContextProviderProps} from "@/types/context_types.ts";
import {toast} from "sonner";

const initialData: SettingsParametersProps = {
    fontSize: 16,
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
    const [mapVisible, setMapVisible] = React.useState<boolean>(settings.mapVisible);
    const [suggestions, setSuggestions] = React.useState<boolean>(settings.suggestions);
    const [folding, setFolding] = React.useState<boolean>(settings.folding);
    const [showErrors, setShowErrors] = React.useState<boolean>(settings.showErrors);
    const [mouseWheelZoom, setMouseWheelZoom] = React.useState<boolean>(settings.mouseWheelZoom);


    const reset: VoidFunction = (): void => {
        setFontSize(initialData.fontSize);
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
            fontSize: fontSize,
            mapVisible: mapVisible,
            suggestions: suggestions,
            folding: folding,
            showErrors: showErrors,
            mouseWheelZoom: mouseWheelZoom
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