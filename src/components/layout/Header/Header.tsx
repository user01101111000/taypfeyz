import React from "react";
import {NavLink} from "react-router";
import SettingsMenu from "@/components/ui/SettingsMenu.tsx";
import {Github} from "lucide-react";

const Header: () => React.JSX.Element = (): React.JSX.Element => {
    return <header className="w-full border-b-[1px] border-border-header">

        <div className="flex items-center justify-between container mx-auto p-4">

            <NavLink className="font-extrabold cursor-pointer" to="/">typeface</NavLink>

            <div className="flex items-center justify-center gap-3">

                <a key="github" href="https://github.com/user01101111000" title="Source code"
                   target="_blank">
                    <Github/>
                </a>

                <SettingsMenu/>
            </div>

        </div>

    </header>
};

export default Header;