import { z } from 'zod';
export declare const ConnectSessionResource = "/connect-session";
export declare const ConnectSessionRequestSchema: z.ZodObject<{
    sessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
}, {
    sessionId: string;
}>;
export declare const ConnectSessionResponseSchema: z.ZodObject<{
    userId: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userId: string;
    token: string;
}, {
    userId: string;
    token: string;
}>;
export type ConnectSessionRequest = z.infer<typeof ConnectSessionRequestSchema>;
export type ConnectSessionResponse = z.infer<typeof ConnectSessionResponseSchema>;
