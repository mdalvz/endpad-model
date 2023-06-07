import { z } from 'zod';

export enum RemoteEventType {
  INSERT  = 'insert',
  DELETE  = 'delete',
  SELECT  = 'select',
  ACTIVE  = 'active',
  RESET   = 'reset',
  CONNECT = 'connect'
}

export const RemoteInsertEventSchema = z.object({
  type: z.literal(RemoteEventType.INSERT),
  eventId: z.string(),
  userId: z.string(),
  index: z.number().positive(),
  data: z.string()
});

export type RemoteInsertEvent = z.infer<typeof RemoteInsertEventSchema>;

export const RemoteDeleteEventSchema = z.object({
  type: z.literal(RemoteEventType.DELETE),
  eventId: z.string(),
  userId: z.string(),
  index: z.number().positive(),
  size: z.number().positive()
});

export type RemoteDeleteEvent = z.infer<typeof RemoteDeleteEventSchema>;

export const RemoteSelectEventSchema = z.object({
  type: z.literal(RemoteEventType.SELECT),
  eventId: z.string(),
  userId: z.string(),
  index: z.number().positive(),
  size: z.number().positive()
});

export type RemoteSelectEvent = z.infer<typeof RemoteSelectEventSchema>;

export const RemoteActiveEventSchema = z.object({
  type: z.literal(RemoteEventType.ACTIVE),
  eventId: z.string(),
  userId: z.string(),
  active: z.boolean()
});

export type RemoteActiveEvent = z.infer<typeof RemoteActiveEventSchema>;

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

export type RemoteResetEvent = z.infer<typeof RemoteResetEventSchema>;

export const RemoteConnectEventSchema = z.object({
  type: z.literal(RemoteEventType.CONNECT),
  eventId: z.string(),
  userId: z.string()
});

export type RemoteConnectEvent = z.infer<typeof RemoteConnectEventSchema>;

export const RemoteEventSchema = z.discriminatedUnion('type', [
  RemoteInsertEventSchema,
  RemoteDeleteEventSchema,
  RemoteSelectEventSchema,
  RemoteActiveEventSchema,
  RemoteResetEventSchema,
  RemoteConnectEventSchema
]);

export type RemoteEvent = z.infer<typeof RemoteEventSchema>;
