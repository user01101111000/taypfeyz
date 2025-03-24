import {z} from "zod";
import {SettingsParametersProps} from "@/types/context_types.ts";

const schema: z.ZodType<SettingsParametersProps> = z.object({
    fontSize: z.number().min(10).max(30),
    rootName: z.string(),
    prefix: z.string(),
    namespace: z.string(),
    flow: z.boolean(),
    mapVisible: z.boolean(),
    folding: z.boolean(),
    suggestions: z.boolean(),
    showErrors: z.boolean(),
    mouseWheelZoom: z.boolean(),
});

export default schema;