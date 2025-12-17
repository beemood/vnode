import z, { ZodBoolean, ZodOptional } from 'zod';

export function projectionSchema<T extends Partial<Record<string, string>>>(
  record: T
) {
  const shape: Partial<Record<keyof T, ZodOptional<ZodBoolean>>> = {};

  for (const [key] of Object.keys(record)) {
    shape[key as keyof T] = z.boolean().optional();
  }
  return z.object(shape);
}
