import {Input} from "@/components/ui/input.tsx";
import React from "react";
import {Button} from "@/components/ui/button.tsx";

type FontSizeInputComponentProps = {
    register: any,
    setValue: any,
    watch: any
}

const FontSizeInputComponent: React.FC<FontSizeInputComponentProps> = ({
                                                                           register,
                                                                           setValue,
                                                                           watch
                                                                       }: FontSizeInputComponentProps): React.JSX.Element => {

    const fontSize: number = watch("fontSize") || 10;

    return <div className="flex items-center justify-center gap-2">
        <Button size={"icon"} variant="secondary" type="button" onClick={(): void => {

            const newValue: number = fontSize + 1;

            if (newValue <= 30) setValue("fontSize", newValue);

        }} className="cursor-pointer">+</ Button>
        <Input key="fontSize" type="number" max={30}
               min={10} {...register("fontSize", {valueAsNumber: true})}
               className="w-12 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-noneappearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
        <Button size={"icon"} variant="secondary" type="button" onClick={(): void => {
            const newValue: number = fontSize - 1;

            if (newValue >= 10) setValue("fontSize", newValue);

        }} className="cursor-pointer">-</ Button>
    </div>
};

export default FontSizeInputComponent;