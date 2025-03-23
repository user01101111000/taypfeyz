import React from "react";

const Footer: () => React.JSX.Element = (): React.JSX.Element => {
    return <footer className="w-full border-t-[1px] border-border-header">
        <div className="flex items-center justify-center container mx-auto p-4">
            <p className="text-[.9rem] text-center text-text-color-2 italic">taypfeyz © 2025 | Made by <a className="underline" href="https://github.com/user01101111000" title="user01101111000 github profile" target="_blank">@user01101111000</a></p>
        </div>
    </footer>
};

export default Footer;