import {Label} from "@/components/ui/shadcn/label.tsx";
import {Input} from "@/components/ui/shadcn/input.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button} from "@/components/ui/shadcn/button.tsx";
import {useCode} from "@/context/CodeContext.tsx";
import React from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {UploadContentFileProps, UploadInputs} from "@/types/upload_content_file_types.ts";
import jsonFile_schema from "@/utils/schemas/file_schema.ts";

const UploadContentFile: React.FC<UploadContentFileProps> = ({setOpen}: UploadContentFileProps): React.JSX.Element => {

    const [dragActive, setDragActive] = React.useState(false);

    const {setCode} = useCode();

    const {register, watch, handleSubmit, formState: {errors}, setValue} = useForm<UploadInputs>({
        resolver: zodResolver(jsonFile_schema)
    });

    const myJSONFile: FileList = watch("JSONFile");


    // ----------------------------------------- Drag and Drop -----------------------------------------

    const handleDragOver: (e: React.DragEvent<HTMLLabelElement>) => void = (e: React.DragEvent<HTMLLabelElement>): void => {
        e.preventDefault();

        setDragActive(true);
    };

    const handleDragLeave: (e: React.DragEvent<HTMLLabelElement>) => void = (e: React.DragEvent<HTMLLabelElement>): void => {
        e.preventDefault();

        setDragActive(false);
    };

    const handleDrop: (e: React.DragEvent<HTMLLabelElement>) => void = (e: React.DragEvent<HTMLLabelElement>): void => {
        e.preventDefault();

        setDragActive(false);

        const files: FileList = e.dataTransfer.files;

        if (files.length > 0) {
            setValue("JSONFile", files as any, {shouldValidate: true});
        }
    };


    // ----------------------------------------- Submit Form -----------------------------------------

    const onSubmit: SubmitHandler<UploadInputs> = (data: UploadInputs): void => {
        const jsonFile: File = data.JSONFile[0];

        if (!jsonFile) return;

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>): void => {
            try {
                const json = e.target?.result as string;
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
               className={`w-full h-50 border-2 border-dashed border-gray-600 rounded-2xl flex items-center justify-center cursor-pointer p-4 ${dragActive ? "bg-gray-700 border-gray-300" : ""}`}
               onDragOver={handleDragOver}
               onDragLeave={handleDragLeave}
               onDrop={handleDrop}
        >
            <p className="text-[.9rem] text-text-color-2 text-center line-clamp-2 pointer-events-none">{dragActive ? "📂 Drop the file here..." : myJSONFile?.[0] ? myJSONFile?.[0]?.name : "🚀 Drag and drop or click to upload your JSON file."}</p>
        </Label>

        <Input type="file" style={{display: "none"}} {...register("JSONFile")} id="JSONFile"/>
        {errors.JSONFile && <p className="text-red-500 text-sm">{errors.JSONFile.message}</p>}{}
        <Button className="cursor-pointer" type="submit">Read</Button>

    </form>
};

export default UploadContentFile;