import type { TypeRecordWithChildren } from '@vnode/types';
import type { ZodType } from 'zod';
import z from 'zod';
import { StringSchemas } from '../schemas/string-schemas.js';

export function orderSchema<T extends TypeRecordWithChildren>(record: T) {
  const shape: Partial<Record<keyof T, ZodType>> = {};

  for (const [key] of Object.keys(record)) {
    shape[key as keyof T] = StringSchemas.orderDirection().optional();
  }

  return z.object(shape);
}
