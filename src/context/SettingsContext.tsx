import React from "react";
import {
    SettingsParametersProps,
    SettingsContextProps,
    SettingsContextProviderProps
} from "@/types/settings_context_types.ts";
import {toast} from "sonner";
import settings_initial_data from "@/constants/settings_data.ts";
import {useCode} from "@/context/CodeContext.tsx";

const SettingsContext: React.Context<SettingsContextProps> = React.createContext<SettingsContextProps>({} as SettingsContextProps);

const SettingsProvider: React.FC<SettingsContextProviderProps> = (props: SettingsContextProviderProps): React.JSX.Element => {

    const localData: string | null = localStorage.getItem("settings");
    const settings: SettingsParametersProps = localData ? (JSON.parse(localData) as SettingsParametersProps) : settings_initial_data;

    const [fontSize, setFontSize] = React.useState<number>(settings.fontSize);
    const [rootName, setRootName] = React.useState<string>(settings.rootName);
    const [prefix, setPrefix] = React.useState<string>(settings.prefix);
    const [namespace, setNamespace] = React.useState<string>(settings.namespace);
    const [flow, setFlow] = React.useState<boolean>(settings.flow);
    const [mapVisible, setMapVisible] = React.useState<boolean>(settings.mapVisible);
    const [suggestions, setSuggestions] = React.useState<boolean>(settings.suggestions);
    const [folding, setFolding] = React.useState<boolean>(settings.folding);
    const [showErrors, setShowErrors] = React.useState<boolean>(settings.showErrors);
    const [mouseWheelZoom, setMouseWheelZoom] = React.useState<boolean>(settings.mouseWheelZoom);
    const [autoSave, setAutoSave] = React.useState<boolean>(settings.autoSave);


    const {code} = useCode();

    const reset: VoidFunction = (): void => {
        setFontSize(settings_initial_data.fontSize);
        setRootName(settings_initial_data.rootName);
        setPrefix(settings_initial_data.prefix);
        setNamespace(settings_initial_data.namespace);
        setFlow(settings_initial_data.flow);
        setMapVisible(settings_initial_data.mapVisible);
        setSuggestions(settings_initial_data.suggestions);
        setFolding(settings_initial_data.folding);
        setShowErrors(settings_initial_data.showErrors);
        setMouseWheelZoom(settings_initial_data.mouseWheelZoom);
        setAutoSave(settings_initial_data.autoSave);

        window.localStorage.setItem("settings", JSON.stringify(settings_initial_data));
        window.localStorage.setItem("code", code);

        toast.success("Settings reset.", {
            duration: 1000
        });


    }

    const save: (data: SettingsParametersProps) => void = (data: SettingsParametersProps): void => {
        setFontSize(data.fontSize);
        setRootName(data.rootName);
        setPrefix(data.prefix);
        setNamespace(data.namespace);
        setFlow(data.flow);
        setMapVisible(data.mapVisible);
        setSuggestions(data.suggestions);
        setFolding(data.folding);
        setShowErrors(data.showErrors);
        setMouseWheelZoom(data.mouseWheelZoom);
        setAutoSave(data.autoSave);

        localStorage.setItem("settings", JSON.stringify(data));

        if (!data.autoSave) window.localStorage.removeItem("code");
        else window.localStorage.setItem("code", code);

        toast.success("Settings saved.", {
            duration: 1000
        });

    }

    const data: SettingsContextProps = {
        parameters: {
            fontSize,
            rootName,
            prefix,
            namespace,
            flow,
            mapVisible,
            suggestions,
            folding,
            showErrors,
            mouseWheelZoom,
            autoSave
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