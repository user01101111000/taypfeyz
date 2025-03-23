import React from "react";
import Editor from '@monaco-editor/react';
import {useSettings} from "@/context/SettingsContext.tsx";
import {Copy, Download} from "lucide-react";

type JSONEditorProps = {
    setCode: React.Dispatch<React.SetStateAction<string>>
};

const JSONEditor: React.FC<JSONEditorProps> = ({setCode}: JSONEditorProps): React.JSX.Element => {

    const {parameters} = useSettings();

    const handleChange = (value: string | undefined): void => {
        setCode(value || '');
    }


    return <div className="w-full h-full overflow-hidden grid grid-rows-[auto_1fr] bg-[#1e1e1e] gap-3">
        <div
            className="py-3 px-10 border-b-[1px] border-border-header flex items-center justify-between gap-2">

            <p className="font-extrabold">JSON Editor</p>

            <div className="flex items-center justify-center gap-3">
                <Copy className="h-4 w-4 cursor-pointer"/>
                <Download className="h-4 w-4 cursor-pointer"/>
            </div>
        </div>
        <Editor
            height="100%"
            width="100%"
            language="json"
            theme="vs-dark"
            onChange={handleChange}
            options={{
                fontSize: parameters.fontSize,
                minimap: {
                    enabled: parameters.mapVisible
                },
                quickSuggestions: true, // nese yazanda suggessiyonlar gelir
                folding: true, // kodlarin yanina ox cixir vuranda kod qisalir

                renderValidationDecorations: "on", // typescript xetalarini goster

                mouseWheelZoom: false, // zoom olmaz ctrl+mouse wheel zamani
            }}
            loading="Yuklenir..."
        />
    </div>
};

export default JSONEditor;