import Loader from "@/components/ui/Loader.tsx";
import React from "react";

const LoadingPage: () => React.JSX.Element = (): React.JSX.Element => {
    return <div className="flex items-center justify-center">
        <Loader color="oklch(100% 0 0)"/>
    </div>
};

export default LoadingPage;