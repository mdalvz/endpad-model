import { z } from 'zod';
export declare enum RemoteEventType {
    INSERT = "insert",
    DELETE = "delete",
    SELECT = "select",
    ACTIVE = "active",
    RESET = "reset",
    CONNECT = "connect"
}
export declare const RemoteInsertEventSchema: z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.INSERT>;
    eventId: z.ZodString;
    userId: z.ZodString;
    index: z.ZodNumber;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: RemoteEventType.INSERT;
    data: string;
    userId: string;
    eventId: string;
}, {
    index: number;
    type: RemoteEventType.INSERT;
    data: string;
    userId: string;
    eventId: string;
}>;
export type RemoteInsertEvent = z.infer<typeof RemoteInsertEventSchema>;
export declare const RemoteDeleteEventSchema: z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.DELETE>;
    eventId: z.ZodString;
    userId: z.ZodString;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: RemoteEventType.DELETE;
    size: number;
    userId: string;
    eventId: string;
}, {
    index: number;
    type: RemoteEventType.DELETE;
    size: number;
    userId: string;
    eventId: string;
}>;
export type RemoteDeleteEvent = z.infer<typeof RemoteDeleteEventSchema>;
export declare const RemoteSelectEventSchema: z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.SELECT>;
    eventId: z.ZodString;
    userId: z.ZodString;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: RemoteEventType.SELECT;
    size: number;
    userId: string;
    eventId: string;
}, {
    index: number;
    type: RemoteEventType.SELECT;
    size: number;
    userId: string;
    eventId: string;
}>;
export type RemoteSelectEvent = z.infer<typeof RemoteSelectEventSchema>;
export declare const RemoteActiveEventSchema: z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.ACTIVE>;
    eventId: z.ZodString;
    userId: z.ZodString;
    active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: RemoteEventType.ACTIVE;
    active: boolean;
    userId: string;
    eventId: string;
}, {
    type: RemoteEventType.ACTIVE;
    active: boolean;
    userId: string;
    eventId: string;
}>;
export type RemoteActiveEvent = z.infer<typeof RemoteActiveEventSchema>;
export declare const RemoteResetEventSchema: z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.RESET>;
    eventId: z.ZodString;
    data: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        active: z.ZodBoolean;
        index: z.ZodNumber;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }, {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: RemoteEventType.RESET;
    data: string;
    eventId: string;
    users: {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }[];
}, {
    type: RemoteEventType.RESET;
    data: string;
    eventId: string;
    users: {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }[];
}>;
export type RemoteResetEvent = z.infer<typeof RemoteResetEventSchema>;
export declare const RemoteConnectEventSchema: z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.CONNECT>;
    eventId: z.ZodString;
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: RemoteEventType.CONNECT;
    userId: string;
    eventId: string;
}, {
    type: RemoteEventType.CONNECT;
    userId: string;
    eventId: string;
}>;
export type RemoteConnectEvent = z.infer<typeof RemoteConnectEventSchema>;
export declare const RemoteEventSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.INSERT>;
    eventId: z.ZodString;
    userId: z.ZodString;
    index: z.ZodNumber;
    data: z.ZodString;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: RemoteEventType.INSERT;
    data: string;
    userId: string;
    eventId: string;
}, {
    index: number;
    type: RemoteEventType.INSERT;
    data: string;
    userId: string;
    eventId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.DELETE>;
    eventId: z.ZodString;
    userId: z.ZodString;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: RemoteEventType.DELETE;
    size: number;
    userId: string;
    eventId: string;
}, {
    index: number;
    type: RemoteEventType.DELETE;
    size: number;
    userId: string;
    eventId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.SELECT>;
    eventId: z.ZodString;
    userId: z.ZodString;
    index: z.ZodNumber;
    size: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    type: RemoteEventType.SELECT;
    size: number;
    userId: string;
    eventId: string;
}, {
    index: number;
    type: RemoteEventType.SELECT;
    size: number;
    userId: string;
    eventId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.ACTIVE>;
    eventId: z.ZodString;
    userId: z.ZodString;
    active: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    type: RemoteEventType.ACTIVE;
    active: boolean;
    userId: string;
    eventId: string;
}, {
    type: RemoteEventType.ACTIVE;
    active: boolean;
    userId: string;
    eventId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.RESET>;
    eventId: z.ZodString;
    data: z.ZodString;
    users: z.ZodArray<z.ZodObject<{
        userId: z.ZodString;
        active: z.ZodBoolean;
        index: z.ZodNumber;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }, {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: RemoteEventType.RESET;
    data: string;
    eventId: string;
    users: {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }[];
}, {
    type: RemoteEventType.RESET;
    data: string;
    eventId: string;
    users: {
        index: number;
        active: boolean;
        size: number;
        userId: string;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<RemoteEventType.CONNECT>;
    eventId: z.ZodString;
    userId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: RemoteEventType.CONNECT;
    userId: string;
    eventId: string;
}, {
    type: RemoteEventType.CONNECT;
    userId: string;
    eventId: string;
}>]>;
export type RemoteEvent = z.infer<typeof RemoteEventSchema>;
