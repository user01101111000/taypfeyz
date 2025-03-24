import React from "react";
import Editor from '@monaco-editor/react';
import {useSettings} from "@/context/SettingsContext.tsx";
import {Copy, Download} from "lucide-react";
import copy_fn from "@/utils/copy_fn.ts";
import download_as from "@/utils/download_as.ts";
import CustomToolTip from "@/components/ui/CustomToolTip.tsx";
import Loader from "@/components/ui/Loader.tsx";
import {json2ts} from "json-ts"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"

type TypeScriptEditorProps = {
    code: string,
};

const TypeScriptEditor: React.FC<TypeScriptEditorProps> = ({code}: TypeScriptEditorProps): React.JSX.Element => {


    const [interfaceCode, setInterfaceCode] = React.useState('');
    const {parameters} = useSettings();

    React.useEffect((): void => {

        try {
            if (code) {

                const interface_code: string = json2ts(code, {
                    rootName: parameters.rootName
                });

                setInterfaceCode(interface_code);

            } else setInterfaceCode("")


        } catch (e) {
            console.log("error", e)
            setInterfaceCode("// This format not supported")
        }


    }, [code, parameters.rootName])

    return <div className="w-full h-full overflow-hidden grid grid-rows-[auto_1fr] bg-[#1e1e1e] gap-3 rounded-3xl">

        <div
            className="py-3 px-10 border-b-[1px] border-border-header flex items-center justify-between gap-2 bg-blue-900 lg:py-4">

            <p className="font-extrabold text-[.8rem] lg:text-[1rem] text-nowrap">TypeScript Editor</p>

            <div className="flex items-center justify-center gap-3">

                <CustomToolTip key="copy" tooltip="Copy">
                    <Copy aria-label="copy button" className="h-4 w-4 cursor-pointer" onClick={(): void => {
                        if (interfaceCode) copy_fn({text: interfaceCode, message: "Copied."});
                    }}/>
                </CustomToolTip>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Download aria-label="download button" className="h-4 w-4 cursor-pointer"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Download as</DropdownMenuLabel>
                        <DropdownMenuSeparator/>

                        <DropdownMenuItem onClick={(): void => {
                            if (interfaceCode) download_as({content: interfaceCode, file_type: "ts"})
                        }}>
                            TS
                            <DropdownMenuShortcut>
                                <Download/>
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem onClick={(): void => {
                            if (interfaceCode) download_as({content: interfaceCode, file_type: "txt"});
                        }}>
                            TXT
                            <DropdownMenuShortcut>
                                <Download/>
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>

        <Editor
            height="100%"
            width="100%"
            language="typescript"
            theme="vs-dark"
            options={{
                fontSize: parameters.fontSize,
                readOnly: true,
                minimap: {
                    enabled: parameters.mapVisible,
                },
                quickSuggestions: parameters.suggestions,
                folding: parameters.folding,
                renderValidationDecorations: parameters.showErrors ? "on" : "off",
                mouseWheelZoom: parameters.mouseWheelZoom,
            }}
            loading={<Loader color="oklch(0.379 0.146 265.522)"/>}
            defaultValue="// Only Read"
            value={interfaceCode}
        />
    </div>
};

export default TypeScriptEditor;