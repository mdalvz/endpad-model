import { z } from 'zod';

export const CreateSessionResource = '/create-session';

export const CreateSessionRequestSchema = z.object({});

export const CreateSessionResponseSchema = z.object({
  sessionId: z.string()
});

export type CreateSessionRequest = z.infer<typeof CreateSessionRequestSchema>;

export type CreateSessionResponse = z.infer<typeof CreateSessionResponseSchema>;
