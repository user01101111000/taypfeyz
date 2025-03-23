import React from "react";
import {Input} from "@/components/ui/input.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Button} from "@/components/ui/button.tsx";
import {z} from "zod";
import {SubmitHandler, useForm} from "react-hook-form";
import {SettingsParametersProps} from "@/types/context_types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useSettings} from "@/context/SettingsContext.tsx";

const schema = z.object({
    fontSize: z.number().min(10).max(30),
    mapVisible: z.boolean(),
    folding: z.boolean(),
    suggestions: z.boolean(),
    showErrors: z.boolean(),
    mouseWheelZoom: z.boolean(),
})


type SettingsMenuListProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingsMenuList: React.FC<SettingsMenuListProps> = ({setOpen}: SettingsMenuListProps): React.JSX.Element => {

    const {parameters, save, reset} = useSettings();

    const {register, handleSubmit, watch, setValue} = useForm<SettingsParametersProps>({
        resolver: zodResolver(schema),
        defaultValues: {
            fontSize: parameters.fontSize,
            mapVisible: parameters.mapVisible,
            folding: parameters.folding,
            suggestions: parameters.suggestions,
            showErrors: parameters.showErrors,
            mouseWheelZoom: parameters.mouseWheelZoom
        }
    });


    const onSubmit: SubmitHandler<SettingsParametersProps> = (data: SettingsParametersProps): void => {
        save(data);

        setOpen(false);
    }


    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">


        {/*------------------------- Font size -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Font size</p>
            <Input type="number" max={30}
                   min={10} {...register("fontSize", {valueAsNumber: true})}
                   className="w-18 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-noneappearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
        </div>


        {/*------------------------- Map Visible -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Mini map</p>
            <Checkbox key="mapVisible" checked={watch("mapVisible")} onCheckedChange={(checked) => {
                setValue("mapVisible", checked as boolean);
            }} {...register("mapVisible")} className="cursor-pointer"/>


        </div>


        {/*------------------------- Suggestions -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Suggestions</p>
            <Checkbox key="suggestions" checked={watch("suggestions")} onCheckedChange={(checked) => {
                setValue("suggestions", checked as boolean);
            }} {...register("suggestions")} className="cursor-pointer"/>


        </div>


        {/*------------------------- Folding -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Folding</p>
            <Checkbox key="folding" checked={watch("folding")} onCheckedChange={(checked) => {
                setValue("folding", checked as boolean);
            }} {...register("folding")} className="cursor-pointer"/>


        </div>

        {/*------------------------- Code Errors Showing -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Show Errors</p>
            <Checkbox key="showErrors" checked={watch("showErrors")} onCheckedChange={(checked) => {
                setValue("showErrors", checked as boolean);
            }} {...register("showErrors")} className="cursor-pointer"/>


        </div>


        {/*------------------------- Mouse Wheel Zoom -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Mouse Wheel Zoom</p>
            <Checkbox key="mouseWheelZoom" checked={watch("mouseWheelZoom")} onCheckedChange={(checked) => {
                setValue("mouseWheelZoom", checked as boolean);
            }} {...register("mouseWheelZoom")} className="cursor-pointer"/>


        </div>


        {/*------------------------- Buttons -------------------------*/}


        <div className="flex items-center justify-center gap-3">
            <Button size={"sm"}
                    type="submit"
                    className="flex-1/2 cursor-pointer font-medium hover:bg-white hover:text-black transition-all duration-200">Save</Button>
            <Button size={"sm"}
                    type="button"
                    className="flex-1/2 cursor-pointer font-medium hover:bg-white hover:text-black transition-all duration-200"
                    onClick={(): void => {

                        reset();
                        setValue("fontSize", 16);
                        setValue("mapVisible", true);

                        setOpen(false);

                    }}>Reset</Button>
        </div>
    </form>
};

export default SettingsMenuList;