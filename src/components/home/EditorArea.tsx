import TypeScriptEditor from "@/components/ui/editors/TypeScriptEditor.tsx";
import JSONEditor from "@/components/ui/editors/JSONEditor.tsx";
import React from "react";

const EditorArea: () => React.JSX.Element = (): React.JSX.Element => {

    return <>

        <JSONEditor key="json editor"/>
        <TypeScriptEditor key="typescript editor"/>

    </>
};

export default EditorArea;