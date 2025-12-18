import type { AnyRecord } from '@vnode/types';
import { entries } from '@vnode/utils';
import type { ZodType } from 'zod';
import z from 'zod';
import { StringSchemas } from '../common-schemas/string-schemas.js';

export function orderSchema<T extends AnyRecord>(record: T): ZodType {
  const shape: Partial<Record<keyof T, ZodType>> = {};

  const recordEntries = entries(record);

  for (const [key] of recordEntries) {
    shape[key as keyof T] = StringSchemas.orderDirection().optional();
  }

  return z.object(shape);
}
