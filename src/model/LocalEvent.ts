import { z } from 'zod';

export enum LocalEventType {
  INSERT = 'insert',
  DELETE = 'delete',
  SELECT = 'select'
}

export const LocalInsertEventSchema = z.object({
  type: z.literal(LocalEventType.INSERT),
  index: z.number().positive(),
  data: z.string()
});

export type LocalInsertEvent = z.infer<typeof LocalInsertEventSchema>;

export const LocalDeleteEventSchema = z.object({
  type: z.literal(LocalEventType.DELETE),
  index: z.number().positive(),
  size: z.number().positive()
});

export type LocalDeleteEvent = z.infer<typeof LocalDeleteEventSchema>;

export const LocalSelectEventSchema = z.object({
  type: z.literal(LocalEventType.SELECT),
  index: z.number().positive(),
  size: z.number().positive()
});

export type LocalSelectEvent = z.infer<typeof LocalSelectEventSchema>;

export const LocalEventSchema = z.discriminatedUnion('type', [
  LocalInsertEventSchema,
  LocalDeleteEventSchema,
  LocalSelectEventSchema
]);

export type LocalEvent = z.infer<typeof LocalEventSchema>;
