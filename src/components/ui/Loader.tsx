import React from "react";

type LoaderProps = {
    color: string
};

const Loader: React.FC<LoaderProps> = ({color}: LoaderProps) => {
    return <span className="loader" style={{
        borderColor: `${color} transparent`
    }}></span>
};

export default Loader;