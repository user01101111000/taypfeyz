import React from "react";
import {NavLink} from "react-router";
import SettingsMenu from "@/components/layout/Header/SettingsMenu.tsx";
import {Github} from "lucide-react";
import CustomToolTip from "@/components/ui/CustomToolTip.tsx";

const Header: () => React.JSX.Element = (): React.JSX.Element => {
    return <header className="w-full border-b-[1px] border-border-header">

        <div className="flex items-center justify-between container mx-auto p-4">

            <NavLink className="font-extrabold cursor-pointer" to="/">taypfeyz</NavLink>

            <div className="flex items-center justify-center gap-3">

                <CustomToolTip key="github" tooltip="Source code">
                    <a key="github" href="https://github.com/user01101111000/taypfeyz" title="Source code"
                       target="_blank">
                        <Github className="h-5 w-5 cursor-pointer"/>
                    </a>
                </CustomToolTip>

                <SettingsMenu/>
            </div>

        </div>

    </header>
};

export default Header;