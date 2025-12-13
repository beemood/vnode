import z from 'zod';

export const StatusSchema = z.enum(['OPEN', 'IN_PROGRESS', 'CLOSES']);
export const CategoryOwnCreateSchema = z.object({
  name: z.string(),
  parentId: z.coerce.number().int().optional(),
});
export type CategoryOwnCreateSchemaType = z.infer<
  typeof CategoryOwnCreateSchema
>;

export const TodoOwnCreateSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  active: z.coerce.boolean().optional(),
  notes: z.string().array(),
  scores: z.coerce.number().int().array(),
  record: z.any(),
  records: z.any().array(),
  status: z.enum(['OPEN', 'IN_PROGRESS', 'CLOSES']).optional(),
  categoryId: z.coerce.number().int().optional(),
});
export type TodoOwnCreateSchemaType = z.infer<typeof TodoOwnCreateSchema>;
export const CategoryCreateSchema = CategoryOwnCreateSchema.extend({});
export type CategoryCreateSchemaType = z.infer<typeof CategoryCreateSchema>;

export const TodoCreateSchema = TodoOwnCreateSchema.extend({});
export type TodoCreateSchemaType = z.infer<typeof TodoCreateSchema>;
