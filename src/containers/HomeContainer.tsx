import React from "react";
import EditorArea from "@/components/home/EditorArea.tsx";

const HomeContainer: () => React.JSX.Element = (): React.JSX.Element => {
    return <section className="container mx-auto px-4 py-4 flex flex-col gap-4 lg:flex-row lg:py-20 lg:gap-8">
        <EditorArea/>
    </section>
};

export default HomeContainer;