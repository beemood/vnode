import z from 'zod';
import { IntegerSchema } from './integer-schema.js';

export const PaginationSchema = z.object({
  take: IntegerSchema.clone().min(1).optional(),
  skip: IntegerSchema.clone().min(0).optional(),
});

export type PaginatinoSchemaType = z.infer<typeof PaginationSchema>;
