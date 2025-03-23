import TypeScriptEditor from "@/components/ui/editors/TypeScriptEditor.tsx";
import JSONEditor from "@/components/ui/editors/JSONEditor.tsx";
import React from "react";

const EditorArea: () => React.JSX.Element = (): React.JSX.Element => {

    const [code, setCode] = React.useState('');

    return <>

        <JSONEditor key="json editor" setCode={setCode}/>
        <TypeScriptEditor key="typescript editor" code={code}/>

    </>
};

export default EditorArea;