import React from "react";
import Editor from '@monaco-editor/react';
import {useSettings} from "@/context/SettingsContext.tsx";
import {Copy, Download, X} from "lucide-react";
import copy_fn from "@/utils/copy_fn.ts";
import download_as from "@/utils/download_as.ts";
import CustomToolTip from "@/components/ui/CustomToolTip.tsx";
import Loader from "@/components/ui/Loader.tsx";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"
import {toast} from "sonner";
import {useCode} from "@/context/CodeContext.tsx";
import UploadComponent from "@/components/ui/editors/upload_option/UploadComponent.tsx";


const JSONEditor: () => React.JSX.Element = (): React.JSX.Element => {

    const {setCode, code} = useCode();
    const {parameters} = useSettings();

    const handleChange: (value: string | undefined) => void = (value: string | undefined): void => {
        setCode(value || '');

        if (parameters.autoSave) {
            window.localStorage.setItem("code", value || '');
        }
    };

    return <div
        className="w-full h-full overflow-hidden grid grid-rows-[auto_1fr] bg-[#1e1e1e] gap-3 rounded-3xl full_editor">
        <div
            className="py-3 pl-10 pr-7 border-b-[1px] border-border-header flex items-center justify-between gap-2 bg-orange-700 lg:py-4">

            <p className="font-extrabold text-[.8rem] lg:text-[1rem]">JSON Editor</p>

            <div className="flex items-center justify-center gap-3">

                <UploadComponent/>

                <CustomToolTip key="copy" tooltip="Copy">
                    <Copy aria-label="copy button" className="h-4 w-4 cursor-pointer" onClick={(): void => {
                        if (code) copy_fn({text: code, message: "Copied."});
                    }}/>
                </CustomToolTip>


                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Download aria-label="download button" className="h-4 w-4 cursor-pointer"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Download as</DropdownMenuLabel>
                        <DropdownMenuSeparator/>

                        <DropdownMenuItem className="cursor-pointer" onClick={(): void => {
                            if (code) download_as({content: code, file_type: "json"})
                            else {
                                toast.info("No code to download.", {
                                    duration: 1500
                                });
                            }
                        }}>
                            JSON
                            <DropdownMenuShortcut>
                                <Download/>
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="cursor-pointer" onClick={(): void => {
                            if (code) download_as({content: code, file_type: "txt"});
                            else {
                                toast.info("No code to download.", {
                                    duration: 1500
                                });
                            }
                        }}>
                            TXT
                            <DropdownMenuShortcut>
                                <Download/>
                            </DropdownMenuShortcut>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>


                <CustomToolTip key="remove all code" tooltip="Remove all code">
                    <X aria-label="remove all code button" className="h-4 w-4 cursor-pointer" onClick={(): void => {
                        setCode('');
                        window.localStorage.removeItem("code");
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
            value={code}
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
            onMount={(): void => {
                if (parameters.autoSave) {
                    const last_code: string | null = window.localStorage.getItem("code");

                    if (last_code) {
                        setCode(last_code);
                    }
                }
            }}
        />
    </div>
};

export default JSONEditor;