import React from "react";
import Editor from '@monaco-editor/react';
import {useSettings} from "@/context/SettingsContext.tsx";
import {Copy, Download, X} from "lucide-react";
import copy_fn from "@/utils/copy_fn.ts";
import download_as from "@/utils/download_as.ts";
import CustomToolTip from "@/components/ui/CustomToolTip.tsx";
import Loader from "@/components/ui/Loader.tsx";

type JSONEditorProps = {
    setCode: React.Dispatch<React.SetStateAction<string>>
};

const JSONEditor: React.FC<JSONEditorProps> = ({setCode}: JSONEditorProps): React.JSX.Element => {

    const {parameters} = useSettings();
    const [jsonCode, setJsonCode] = React.useState<string>('');

    const handleChange: (value: string | undefined) => void = (value: string | undefined): void => {
        setCode(value || '');
        setJsonCode(value || '');
    }

    console.log(jsonCode)

    return <div className="w-full h-full overflow-hidden grid grid-rows-[auto_1fr] bg-[#1e1e1e] gap-3 rounded-3xl">
        <div
            className="py-3 px-10 border-b-[1px] border-border-header flex items-center justify-between gap-2 bg-orange-500 lg:py-4">

            <p className="font-extrabold">JSON Editor</p>

            <div className="flex items-center justify-center gap-3">


                <CustomToolTip key="copy" tooltip="Copy">
                    <Copy className="h-4 w-4 cursor-pointer" onClick={(): void => {
                        if (jsonCode) copy_fn({text: jsonCode, message: "Copied."});
                    }}/>
                </CustomToolTip>


                <CustomToolTip key="download" tooltip="Download">
                    <Download className="h-4 w-4 cursor-pointer" onClick={(): void => {
                        if (jsonCode) download_as({content: jsonCode, file_type: "json"})
                    }}/>
                </CustomToolTip>


                <CustomToolTip key="remove all code" tooltip="Remove all code">
                    <X className="h-4 w-4 cursor-pointer" onClick={(): void => {
                        setJsonCode('');
                        setCode('');
                    }}/>
                </CustomToolTip>


            </div>
        </div>
        <Editor
            height="100%"
            width="100%"
            language="json"
            theme="vs-dark"
            onChange={handleChange}
            value={jsonCode}
            options={{
                fontSize: parameters.fontSize,
                minimap: {
                    enabled: parameters.mapVisible
                },
                quickSuggestions: parameters.suggestions,
                folding: parameters.folding,
                renderValidationDecorations: parameters.showErrors ? "on" : "off",
                mouseWheelZoom: parameters.mouseWheelZoom,
            }}
            loading={<Loader color="oklch(0.705 0.213 47.604)"/>}
        />
    </div>
};

export default JSONEditor;