import z, { ZodEnum, ZodOptional } from 'zod';
import { StringSchemas } from '../schemas/string-schemas.js';

export function orderSchema<T extends Partial<Record<string, string>>>(
  record: T
) {
  const shape: Partial<
    Record<
      keyof T,
      ZodOptional<
        ZodEnum<{ asc: 'asc'; desc: 'desc'; ASC: 'ASC'; DESC: 'DESC' }>
      >
    >
  > = {};

  for (const [key] of Object.keys(record)) {
    shape[key as keyof T] = StringSchemas.orderDirection().optional();
  }
  return z.object(shape);
}
