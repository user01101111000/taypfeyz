import React from "react";
import {Input} from "@/components/ui/shadcn/input.tsx";
import {Checkbox} from "@/components/ui/shadcn/checkbox.tsx";
import {Button} from "@/components/ui/shadcn/button.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {SettingsParametersProps} from "@/types/settings_context_types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useSettings} from "@/context/SettingsContext.tsx";
import settings_schema from "@/utils/schemas/settings_schema.ts";
import FontSizeInputComponent from "@/components/layout/Header/FontSizeInputComponent.tsx";
import {Info} from "lucide-react";
import CustomToolTip from "@/components/ui/CustomToolTip.tsx";
import settings_menu_list from "@/constants/settings_menu_list.ts";

type SettingsMenuListProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SettingsMenuList: React.FC<SettingsMenuListProps> = ({setOpen}: SettingsMenuListProps): React.JSX.Element => {

    const {parameters, save, reset} = useSettings();

    const {register, handleSubmit, watch, setValue} = useForm<SettingsParametersProps>({
        resolver: zodResolver(settings_schema),
        defaultValues: {
            fontSize: parameters.fontSize,
            mapVisible: parameters.mapVisible,
            folding: parameters.folding,
            suggestions: parameters.suggestions,
            showErrors: parameters.showErrors,
            mouseWheelZoom: parameters.mouseWheelZoom,
            rootName: parameters.rootName,
            prefix: parameters.prefix,
            namespace: parameters.namespace,
            flow: parameters.flow,
            autoSave: parameters.autoSave
        }
    });


    const onSubmit: SubmitHandler<SettingsParametersProps> = (data: SettingsParametersProps): void => {
        save(data);

        setOpen(false);
    }

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 select-none">


        {/*------------------------- Font size -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Font size</p>
            <FontSizeInputComponent register={register} setValue={setValue} watch={watch}/>
        </div>


        {/*------------------------- Root Name -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Root name</p>
            <Input key="rootName" type="text" {...register("rootName")}
                   className="w-25 text-center"/>
        </div>

        {/*------------------------- Prefix -------------------------*/}

        <div className="flex items-center justify-between">

            <div className="flex items-center justify-center gap-2">
                <p>Prefix</p>

                <CustomToolTip key="namespace tooltip"
                               tooltip={settings_menu_list.info.prefix} w50>
                    <Info className="h-3.5 w-3.5 cursor-pointer opacity-50"/>
                </CustomToolTip>

            </div>

            <Input key="prefix" type="text" {...register("prefix")}
                   className="w-25 text-center"/>
        </div>


        {/*------------------------- Namespace -------------------------*/}

        <div className="flex items-center justify-between">

            <div className="flex items-center justify-center gap-2">
                <p>Namespace</p>

                <CustomToolTip key="namespace tooltip"
                               tooltip={settings_menu_list.info.namespace} w50>
                    <Info className="h-3.5 w-3.5 cursor-pointer opacity-50"/>
                </CustomToolTip>

            </div>
            <Input key="namespace" type="text" {...register("namespace")}
                   className="w-25 text-center"/>
        </div>


        {/*------------------------- Flow -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Flow</p>
            <Checkbox key="flow" checked={watch("flow")} onCheckedChange={(checked) => {
                setValue("flow", checked as boolean);
            }} {...register("flow")} className="cursor-pointer"/>


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

            <p>Show errors</p>
            <Checkbox key="showErrors" checked={watch("showErrors")} onCheckedChange={(checked) => {
                setValue("showErrors", checked as boolean);
            }} {...register("showErrors")} className="cursor-pointer"/>


        </div>


        {/*------------------------- Mouse Wheel Zoom -------------------------*/}

        <div className="flex items-center justify-between">

            <p>Mouse wheel zoom</p>
            <Checkbox key="mouseWheelZoom" checked={watch("mouseWheelZoom")} onCheckedChange={(checked) => {
                setValue("mouseWheelZoom", checked as boolean);
            }} {...register("mouseWheelZoom")} className="cursor-pointer"/>


        </div>


        {/*------------------------- Auto Save -------------------------*/}

        <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-2">
                <p>Auto save</p>

                <CustomToolTip key="namespace tooltip"
                               tooltip={settings_menu_list.info.autoSave} w50>
                    <Info className="h-3.5 w-3.5 cursor-pointer opacity-50"/>
                </CustomToolTip>

            </div>

            <Checkbox key="autoSave" checked={watch("autoSave")} onCheckedChange={(checked) => {
                setValue("autoSave", checked as boolean);
            }} {...register("autoSave")} className="cursor-pointer"/>

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