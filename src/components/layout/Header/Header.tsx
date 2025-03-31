import React from "react";
import { NavLink } from "react-router";
import SettingsMenu from "@/components/layout/Header/SettingsMenu.tsx";
import { Github } from "lucide-react";
import CustomToolTip from "@/components/ui/CustomToolTip.tsx";
import ReactGA from "react-ga4";

const Header: () => React.JSX.Element = (): React.JSX.Element => {

    return <header className="w-full border-b-[1px] border-gray-700 bg-blue-900">

        <div className="flex items-center justify-between pl-10 pr-6 py-3">

            <NavLink to="/" className="font-extrabold">taypfeyz</NavLink>

            <div className="flex items-center justify-center gap-2.5">

                <SettingsMenu />

                <CustomToolTip key="github" tooltip="Github">
                    <a key="github" href="https://github.com/user01101111000/taypfeyz" title="Source code"
                        target="_blank" onClick={(): void => {
                            ReactGA.event({ category: "header", action: "github clicked !" });
                        }}>
                        <Github className="h-4 w-4 cursor-pointer" />
                    </a>
                </CustomToolTip>

            </div>

        </div>

    </header>
};

export default Header;