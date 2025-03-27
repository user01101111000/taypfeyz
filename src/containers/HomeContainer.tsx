import React from "react";
import EditorArea from "@/components/home/EditorArea.tsx";

const HomeContainer: () => React.JSX.Element = (): React.JSX.Element => {

    return <section className="h-full w-full flex flex-col lg:flex-row">
        <EditorArea/>
    </section>
};

export default HomeContainer;