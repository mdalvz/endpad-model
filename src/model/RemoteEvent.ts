import { z } from 'zod';

export enum RemoteEventType {
  INSERT = 'insert',
  DELETE = 'delete',
  SELECT = 'select',
  ACTIVE = 'active',
  RESET  = 'reset',
}

export const RemoteInsertEventSchema = z.object({
  type: z.literal(RemoteEventType.INSERT),
  eventId: z.string(),
  userId: z.string(),
  index: z.number().positive(),
  data: z.string()
});

export const RemoteDeleteEventSchema = z.object({
  type: z.literal(RemoteEventType.DELETE),
  eventId: z.string(),
  userId: z.string(),
  index: z.number().positive(),
  size: z.number().positive()
});

export const RemoteSelectEventSchema = z.object({
  type: z.literal(RemoteEventType.SELECT),
  eventId: z.string(),
  userId: z.string(),
  index: z.number().positive(),
  size: z.number().positive()
});

export const RemoteActiveEventSchema = z.object({
  type: z.literal(RemoteEventType.ACTIVE),
  eventId: z.string(),
  userId: z.string(),
  active: z.boolean()
});

export const RemoteResetEventSchema = z.object({
  type: z.literal(RemoteEventType.RESET),
  eventId: z.string(),
  data: z.string(),
  users: z.array(z.object({
    userId: z.string(),
    active: z.boolean(),
    index: z.number().positive(),
    size: z.number().positive()
  }))
});

export const RemoteEventSchema = z.discriminatedUnion('type', [
  RemoteInsertEventSchema,
  RemoteDeleteEventSchema,
  RemoteSelectEventSchema,
  RemoteActiveEventSchema,
  RemoteResetEventSchema
]);

export type RemoteEvent = z.infer<typeof RemoteEventSchema>;
