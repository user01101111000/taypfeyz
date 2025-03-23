import {z} from "zod";

const schema = z.object({
    fontSize: z.number().min(10).max(30),
    rootName: z.string(),
    mapVisible: z.boolean(),
    folding: z.boolean(),
    suggestions: z.boolean(),
    showErrors: z.boolean(),
    mouseWheelZoom: z.boolean(),
});

export default schema;