import { z } from "zod";
import { UploadContentURLInput } from "@/types/upload_content_url_types.ts";

const upload_url_schema: z.ZodType<UploadContentURLInput> = z.object({
    url: z.string().regex(new RegExp("^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+(\\.[a-z]{2,}){1,3}(#?\\/?[a-zA-Z0-9#]+)*\\/?(\\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$"), "Invalid url.")
})

export default upload_url_schema;