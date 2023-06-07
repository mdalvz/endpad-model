import { z } from 'zod';
import { LocalEventSchema } from './LocalEvent';
import { RemoteEventSchema } from './RemoteEvent';

export const UpdateSessionResource = '/update-session';

export const UpdateSessionRequestSchema = z.object({
  sessionId: z.string(),
  userId: z.string(),
  token: z.string(),
  eventId: z.string().nullable(),
  events: z.array(LocalEventSchema)
});

export const UpdateSessionResponseSchema = z.object({
  events: z.array(RemoteEventSchema)
});

export type UpdateSessionRequest = z.infer<typeof UpdateSessionRequestSchema>;

export type UpdateSessionResponse = z.infer<typeof UpdateSessionResponseSchema>;
