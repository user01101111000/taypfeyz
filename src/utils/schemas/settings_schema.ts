import { z } from "zod";
import { SettingsParametersProps } from "@/types/settings_context_types.ts";

const settings_schema: z.ZodType<SettingsParametersProps> = z.object({
    fontSize: z.number().min(10).max(30),
    rootName: z.string(),
    prefix: z.string(),
    namespace: z.string(),
    flow: z.boolean(),
    mapVisible: z.boolean(),
    folding: z.boolean(),
    suggestions: z.boolean(),
    showErrors: z.boolean(),
    wordWrap: z.boolean(),
    lineNumbers: z.boolean(),
    lineHeight: z.number().min(20).max(30),
    autoSave: z.boolean()
});

export default settings_schema;