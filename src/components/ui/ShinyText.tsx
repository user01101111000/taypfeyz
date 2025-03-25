import React from "react";

type ShinyTextProps = {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
    link?: string;
    href?: string
}

const ShinyText: React.FC<ShinyTextProps> = ({
                                                 text,
                                                 disabled = false,
                                                 speed = 5,
                                                 className = '',
                                                 link = "",
                                                 href = ""
                                             }: ShinyTextProps) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
            style={{animationDuration}}
        >
            {text} {link &&
            <a className="underline" title="user01101111000 github profile" target="_blank" href={href}>{link}</a>}
        </div>
    );
};

export default ShinyText;