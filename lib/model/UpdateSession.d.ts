import { z } from 'zod';
export declare const UpdateSessionResource = "/update-session";
export declare const UpdateSessionRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
    userId: z.ZodString;
    token: z.ZodString;
    eventId: z.ZodNullable<z.ZodString>;
    events: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<import("./LocalEvent").LocalEventType.INSERT>;
        index: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        index: number;
        type: import("./LocalEvent").LocalEventType.INSERT;
        data: string;
    }, {
        index: number;
        type: import("./LocalEvent").LocalEventType.INSERT;
        data: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<import("./LocalEvent").LocalEventType.DELETE>;
        index: z.ZodNumber;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        index: number;
        type: import("./LocalEvent").LocalEventType.DELETE;
        size: number;
    }, {
        index: number;
        type: import("./LocalEvent").LocalEventType.DELETE;
        size: number;
    }>, z.ZodObject<{
        type: z.ZodLiteral<import("./LocalEvent").LocalEventType.SELECT>;
        index: z.ZodNumber;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        index: number;
        type: import("./LocalEvent").LocalEventType.SELECT;
        size: number;
    }, {
        index: number;
        type: import("./LocalEvent").LocalEventType.SELECT;
        size: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
    userId: string;
    token: string;
    eventId: string | null;
    events: ({
        index: number;
        type: import("./LocalEvent").LocalEventType.INSERT;
        data: string;
    } | {
        index: number;
        type: import("./LocalEvent").LocalEventType.DELETE;
        size: number;
    } | {
        index: number;
        type: import("./LocalEvent").LocalEventType.SELECT;
        size: number;
    })[];
}, {
    sessionId: string;
    userId: string;
    token: string;
    eventId: string | null;
    events: ({
        index: number;
        type: import("./LocalEvent").LocalEventType.INSERT;
        data: string;
    } | {
        index: number;
        type: import("./LocalEvent").LocalEventType.DELETE;
        size: number;
    } | {
        index: number;
        type: import("./LocalEvent").LocalEventType.SELECT;
        size: number;
    })[];
}>;
export declare const UpdateSessionResponseSchema: z.ZodObject<{
    events: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<import("./RemoteEvent").RemoteEventType.INSERT>;
        eventId: z.ZodString;
        userId: z.ZodString;
        index: z.ZodNumber;
        data: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.INSERT;
        data: string;
        userId: string;
        eventId: string;
    }, {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.INSERT;
        data: string;
        userId: string;
        eventId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<import("./RemoteEvent").RemoteEventType.DELETE>;
        eventId: z.ZodString;
        userId: z.ZodString;
        index: z.ZodNumber;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.DELETE;
        size: number;
        userId: string;
        eventId: string;
    }, {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.DELETE;
        size: number;
        userId: string;
        eventId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<import("./RemoteEvent").RemoteEventType.SELECT>;
        eventId: z.ZodString;
        userId: z.ZodString;
        index: z.ZodNumber;
        size: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.SELECT;
        size: number;
        userId: string;
        eventId: string;
    }, {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.SELECT;
        size: number;
        userId: string;
        eventId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<import("./RemoteEvent").RemoteEventType.ACTIVE>;
        eventId: z.ZodString;
        userId: z.ZodString;
        active: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        type: import("./RemoteEvent").RemoteEventType.ACTIVE;
        active: boolean;
        userId: string;
        eventId: string;
    }, {
        type: import("./RemoteEvent").RemoteEventType.ACTIVE;
        active: boolean;
        userId: string;
        eventId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<import("./RemoteEvent").RemoteEventType.RESET>;
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
        type: import("./RemoteEvent").RemoteEventType.RESET;
        data: string;
        eventId: string;
        users: {
            index: number;
            active: boolean;
            size: number;
            userId: string;
        }[];
    }, {
        type: import("./RemoteEvent").RemoteEventType.RESET;
        data: string;
        eventId: string;
        users: {
            index: number;
            active: boolean;
            size: number;
            userId: string;
        }[];
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    events: ({
        index: number;
        type: import("./RemoteEvent").RemoteEventType.INSERT;
        data: string;
        userId: string;
        eventId: string;
    } | {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.DELETE;
        size: number;
        userId: string;
        eventId: string;
    } | {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.SELECT;
        size: number;
        userId: string;
        eventId: string;
    } | {
        type: import("./RemoteEvent").RemoteEventType.ACTIVE;
        active: boolean;
        userId: string;
        eventId: string;
    } | {
        type: import("./RemoteEvent").RemoteEventType.RESET;
        data: string;
        eventId: string;
        users: {
            index: number;
            active: boolean;
            size: number;
            userId: string;
        }[];
    })[];
}, {
    events: ({
        index: number;
        type: import("./RemoteEvent").RemoteEventType.INSERT;
        data: string;
        userId: string;
        eventId: string;
    } | {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.DELETE;
        size: number;
        userId: string;
        eventId: string;
    } | {
        index: number;
        type: import("./RemoteEvent").RemoteEventType.SELECT;
        size: number;
        userId: string;
        eventId: string;
    } | {
        type: import("./RemoteEvent").RemoteEventType.ACTIVE;
        active: boolean;
        userId: string;
        eventId: string;
    } | {
        type: import("./RemoteEvent").RemoteEventType.RESET;
        data: string;
        eventId: string;
        users: {
            index: number;
            active: boolean;
            size: number;
            userId: string;
        }[];
    })[];
}>;
export type UpdateSessionRequest = z.infer<typeof UpdateSessionRequestSchema>;
export type UpdateSessionResponse = z.infer<typeof UpdateSessionResponseSchema>;
