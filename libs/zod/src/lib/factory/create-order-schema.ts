import { ZodOptional } from 'zod';
import { DirectionSchema } from '../common/directin-schema.js';

export function createOrderSchema<T extends Partial<Record<string, string>>>(
  record: T
) {
  const shape: Partial<Record<keyof T, ZodOptional<typeof DirectionSchema>>> =
    {};

  for (const [key] of Object.keys(record)) {
    shape[key as keyof T] = DirectionSchema.optional();
  }
  return shape;
}
