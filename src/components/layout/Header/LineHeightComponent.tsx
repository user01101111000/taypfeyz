import {Input} from "@/components/ui/shadcn/input.tsx";
import React from "react";
import {Button} from "@/components/ui/shadcn/button.tsx";

type LineHeightComponentProps = {
    register: any,
    setValue: any,
    watch: any
}

const LineHeightComponent: React.FC<LineHeightComponentProps> = ({
                                                                           register,
                                                                           setValue,
                                                                           watch
                                                                       }: LineHeightComponentProps): React.JSX.Element => {

    const lineHeight: number = watch("lineHeight") || 22;

    return <div className="flex items-center justify-center gap-2">
        <Button size={"icon"} variant="secondary" type="button" onClick={(): void => {

            const newValue: number = lineHeight + 1;

            if (newValue <= 30) setValue("lineHeight", newValue);

        }} className="cursor-pointer">+</ Button>
        <Input key="lineHeight" type="number" max={30}
               min={20} {...register("lineHeight", {valueAsNumber: true})}
               className="w-12 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-noneappearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
        <Button size={"icon"} variant="secondary" type="button" onClick={(): void => {
            const newValue: number = lineHeight - 1;

            if (newValue >= 20) setValue("lineHeight", newValue);

        }} className="cursor-pointer">-</ Button>
    </div>
};

export default LineHeightComponent;