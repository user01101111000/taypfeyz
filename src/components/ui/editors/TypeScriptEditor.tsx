import React from "react";
import Editor from '@monaco-editor/react';
import {useSettings} from "@/context/SettingsContext.tsx";
import JsonToTS from "json-to-ts"
import {Copy, Download} from "lucide-react";

type TypeScriptEditorProps = {
    code: string,
};

const TypeScriptEditor: React.FC<TypeScriptEditorProps> = ({code}: TypeScriptEditorProps): React.JSX.Element => {


    const [interfaceCode, setInterfaceCode] = React.useState('');
    const {parameters} = useSettings();


    React.useEffect((): void => {


        try {


            if (code) {

                const my_code: {} | [] = JSON.parse(code);

                console.log("isledi")

                let interface_string: string = "";

                JsonToTS(my_code).forEach((typeInterface: string, i: number, arr: string[]): void => {


                    if (i === arr.length - 1) {
                        interface_string += typeInterface;
                    } else {
                        interface_string += typeInterface + "\n\n"

                    }
                }, {});


                setInterfaceCode(interface_string);

            }

            else setInterfaceCode("// Only raed")


        } catch (e) {
            console.log("error", e)
            setInterfaceCode("// This format not supported")
        }


    }, [code])

    return <div className="w-full h-full overflow-hidden grid grid-rows-[auto_1fr] bg-[#1e1e1e] gap-3">

        <div
            className="py-3 px-10 border-b-[1px] border-border-header flex items-center justify-between gap-2">

            <p className="font-extrabold">TypeScript Editor</p>

            <div className="flex items-center justify-center gap-3">
                <Copy className="h-4 w-4 cursor-pointer"/>
                <Download className="h-4 w-4 cursor-pointer"/>
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
            }}
            loading="Yuklenir..."
            defaultValue="// Only Read"
            value={interfaceCode}
        />
    </div>
};

export default TypeScriptEditor;