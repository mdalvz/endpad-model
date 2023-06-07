import { z } from 'zod';

export const ConnectSessionResource = '/connect-session';

export const ConnectSessionRequestSchema = z.object({
  sessionId: z.string()
});

export const ConnectSessionResponseSchema = z.object({
  userId: z.string(),
  token: z.string()
});

export type ConnectSessionRequest = z.infer<typeof ConnectSessionRequestSchema>;

export type ConnectSessionResponse = z.infer<typeof ConnectSessionResponseSchema>;
