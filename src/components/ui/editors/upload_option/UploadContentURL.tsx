import {Input} from "@/components/ui/input.tsx";
import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {useCode} from "@/context/CodeContext.tsx";
import {SubmitHandler, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import get_json_data from "@/service/get_json_data.ts";

type UploadContentURLProps = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type UploadContentURLInput = {
    url: string
}

const upload_url_schema = z.object({
    url: z.string().regex(new RegExp("^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+(\\.[a-z]{2,}){1,3}(#?\\/?[a-zA-Z0-9#]+)*\\/?(\\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$"), "Invalid url.")
})

const UploadContentURL: React.FC<UploadContentURLProps> = ({setOpen}: UploadContentURLProps): React.JSX.Element => {

    const [loading, setLoading] = React.useState<boolean>(false);
    const {setCode} = useCode();
    const {register, handleSubmit, formState: {errors}} = useForm<UploadContentURLInput>({
        resolver: zodResolver(upload_url_schema)
    });


    React.useEffect((): void => {
        setTimeout((): void => {
            document.activeElement instanceof HTMLInputElement && document.activeElement.blur();
        }, 0);
    }, []);


    const onSubmit: SubmitHandler<UploadContentURLInput> = (data: UploadContentURLInput): void => {
        setLoading(true);
        get_json_data(data.url).then(((x: any): void => {
                const json_code: string = JSON.stringify(x, null, 2);
                setCode(json_code);
                window.localStorage.setItem("code", json_code)
                setOpen(false);
            })
        ).finally((): void => {
            setLoading(false);
        })
    }


    return <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <p className="text-white font-bold">URL</p>
        <Input className="text-white" type="text"
               placeholder="https://jsonplaceholder.typicode.com/users" {...register("url")} />
        {errors.url && <p className="text-red-500">{errors.url.message}</p>}

        <Button disabled={loading}>
            {loading ? "Loading..." : "Submit"}
        </Button>
    </form>
};

export default UploadContentURL;