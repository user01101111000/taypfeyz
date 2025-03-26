import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/button.tsx";
import {useCode} from "@/context/CodeContext.tsx";
import React from "react";
import {z} from "zod";

type UploadInputs = {
    JSONFile: FileList
};

type UploadContentFileProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
};

// const schema = z.object({
//     JSONFile: z.instanceof(FileList),
// })

const UploadContentFile: React.FC<UploadContentFileProps> = ({setOpen}: UploadContentFileProps): React.JSX.Element => {


    const {setCode} = useCode();
    const {register, watch, handleSubmit, formState: {errors}} = useForm<UploadInputs>();
    const myJSONFile: FileList = watch("JSONFile");


    const onSubmit: SubmitHandler<UploadInputs> = (data: UploadInputs): void => {
        const jsonFile: File = data.JSONFile[0];

        if (!jsonFile) return;

        const reader = new FileReader();
        reader.onload = (event): void => {
            try {
                const json = event.target?.result as string;
                setCode(json);
                window.localStorage.setItem("code", json);

                setOpen(false);
            } catch (error) {
                console.error("Geçersiz JSON dosyası", error);
            }
        };

        reader.readAsText(jsonFile);
    }


    return <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

        <Label htmlFor="JSONFile"
               className="w-full h-50 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center cursor-pointer">
            <p className="text-[.9rem] text-text-color-2">{myJSONFile?.[0] ? myJSONFile?.[0]?.name : "🚀 Upload your JSON file."}</p>
        </Label>


        <Input type="file" style={{display: "none"}} {...register("JSONFile")} id="JSONFile"/>


        <Button className="cursor-pointer" type="submit">Submit</Button>

    </form>
};

export default UploadContentFile;