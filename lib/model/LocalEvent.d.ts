import { z } from 'zod';
export declare enum LocalEventType {
    INSERT = "insert",
    DELETE = "delete",
    SELECT = "select"
}
export declare const LocalInsertEventSchema: z.ZodObject<{
    type: z.ZodLiteral<LocalEventType.INSERT>;
    index: z.ZodNumber;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: LocalEventType.INSERT;
    data: string;
}, {
    index: number;
    type: LocalEventType.INSERT;
    data: string;
}>;
export declare const LocalDeleteEventSchema: z.ZodObject<{
    type: z.ZodLiteral<LocalEventType.DELETE>;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: LocalEventType.DELETE;
    size: number;
}, {
    index: number;
    type: LocalEventType.DELETE;
    size: number;
}>;
export declare const LocalSelectEventSchema: z.ZodObject<{
    type: z.ZodLiteral<LocalEventType.SELECT>;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: LocalEventType.SELECT;
    size: number;
}, {
    index: number;
    type: LocalEventType.SELECT;
    size: number;
}>;
export declare const LocalEventSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<LocalEventType.INSERT>;
    index: z.ZodNumber;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: LocalEventType.INSERT;
    data: string;
}, {
    index: number;
    type: LocalEventType.INSERT;
    data: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<LocalEventType.DELETE>;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: LocalEventType.DELETE;
    size: number;
}, {
    index: number;
    type: LocalEventType.DELETE;
    size: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<LocalEventType.SELECT>;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: LocalEventType.SELECT;
    size: number;
}, {
    index: number;
    type: LocalEventType.SELECT;
    size: number;
}>]>;
export type LocalEvent = z.infer<typeof LocalEventSchema>;
