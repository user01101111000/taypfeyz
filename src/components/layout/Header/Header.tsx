import React from "react";
import {NavigateFunction, NavLink, useNavigate} from "react-router";
import SettingsMenu from "@/components/layout/Header/SettingsMenu.tsx";
import {Github, Info} from "lucide-react";
import CustomToolTip from "@/components/ui/CustomToolTip.tsx";
import ShinyText from "@/components/ui/ShinyText.tsx";

const Header: () => React.JSX.Element = (): React.JSX.Element => {

    const navigator: NavigateFunction = useNavigate();

    return <header className="w-full border-b-[1px] border-border-header">

        <div className="flex items-center justify-between container mx-auto p-4">

            <NavLink to="/"><ShinyText text="taypfeyz" className="font-extrabold cursor-pointer"/></NavLink>

            <div className="flex items-center justify-center gap-3">

                <SettingsMenu/>

                <CustomToolTip key="github" tooltip="Source code">
                    <a key="github" href="https://github.com/user01101111000/taypfeyz" title="Source code"
                       target="_blank">
                        <Github className="h-5 w-5 cursor-pointer"/>
                    </a>
                </CustomToolTip>


                <CustomToolTip key="about project" tooltip="About project">
                    <Info className="h-5 w-5 cursor-pointer" onClick={(): void => {
                        navigator("/about");
                    }}/>
                </CustomToolTip>

            </div>

        </div>

    </header>
};

export default Header;