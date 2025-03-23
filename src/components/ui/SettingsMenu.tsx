import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Input} from "@/components/ui/input.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useSettings} from "@/context/SettingsContext.tsx";
import React from "react";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Settings} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";


type InputProps = {
    fontSize: number,
    mapVisible: boolean
}


const schema = z.object({
    fontSize: z.number().min(10).max(30),
    mapVisible: z.boolean()
})


const SettingsMenu: () => React.JSX.Element = (): React.JSX.Element => {


    const {parameters, save, reset} = useSettings();
    const [open, setOpen] = React.useState(false);

    const {register, handleSubmit, watch, setValue} = useForm<InputProps>({
        resolver: zodResolver(schema),
        defaultValues: {
            fontSize: parameters.fontSize,
            mapVisible: parameters.mapVisible
        }
    });


    const onSubmit: SubmitHandler<InputProps> = (data: InputProps): void => {
        save(data);

        setOpen((p: boolean): boolean => !p);

    }

    return <Popover open={open} onOpenChange={(): void => {
        setOpen((p: boolean): boolean => !p)
    }}>
        <PopoverTrigger asChild>
            <Settings className="cursor-pointer"/>
        </PopoverTrigger>
        <PopoverContent asChild>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">

                    <p>Font size</p>
                    <Input type="number" max={30}
                           min={10} {...register("fontSize", {valueAsNumber: true})}
                           className="w-18 text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-noneappearance-none [&::-webkit-outer-spin-button]:appearance-none"/>
                </div>

                <div className="flex items-center justify-between">

                    <p>Mini map</p>
                    <Checkbox checked={watch("mapVisible")} onCheckedChange={(checked) => {
                        setValue("mapVisible", checked as boolean);
                    }} {...register("mapVisible")}/>


                </div>

                <div className="flex items-center justify-center gap-3">
                    <Button type="submit"
                            className="flex-1/2 cursor-pointer font-medium hover:bg-white hover:text-black transition-all duration-200">Save</Button>
                    <Button type="button"
                            className="flex-1/2 cursor-pointer font-medium hover:bg-white hover:text-black transition-all duration-200"
                            onClick={(): void => {

                                reset();
                                setValue("fontSize", 16);
                                setValue("mapVisible", true);

                            }}>Reset</Button>
                </div>
            </form>

        </PopoverContent>
    </Popover>


};

export default SettingsMenu;