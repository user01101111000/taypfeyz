import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useForm} from "react-hook-form";

const UploadContentFile = () => {

    type UploadInputs = {
        JSONFile: FileList
    };

    const {register, watch} = useForm<UploadInputs>();
    const myJSONFile: FileList = watch("JSONFile");

    return  <div className="flex items-center gap-2">
        <Label htmlFor="JSONFile"
               className="bg-white text-black max-w-fit py-2 px-3 rounded-[.5rem] cursor-pointer">
            Upload JSON File
        </Label>

        <p className="text-[.9rem] text-text-color-2">{myJSONFile ? myJSONFile[0]?.name : "No file selected"}</p>

        <Input type="file" style={{display: "none"}} {...register("JSONFile")} id="JSONFile"/>
    </div>
};

export default UploadContentFile;