import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from "react";


type CustomToolTipProps = {
    tooltip: string,
    children: React.ReactNode
}

const CustomToolTip: React.FC<CustomToolTipProps> = (props: CustomToolTipProps): React.JSX.Element => {
    return <TooltipProvider>
        <Tooltip>
            <TooltipTrigger>{props.children}</TooltipTrigger>
            <TooltipContent className="font-medium">
                {props.tooltip}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
};

export default CustomToolTip;