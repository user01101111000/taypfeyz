import React from "react";
import ShinyText from "@/components/ui/ShinyText.tsx";

const Footer: () => React.JSX.Element = (): React.JSX.Element => {
    return <footer
        className="w-full border-t-[1px] border-border-header flex items-center justify-center container mx-auto p-4">

        <ShinyText text="taypfeyz © 2025 | Made by "
                   className="text-[.9rem] text-center text-text-color-2 italic" link="@user01101111000"
                   href="https://github.com/user01101111000"/>

    </footer>
};

export default Footer;