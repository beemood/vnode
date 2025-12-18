import type { TypeRecordWithChildren } from '@vnode/types';
import { entries, isPropertyType } from '@vnode/utils';
import type { ZodType } from 'zod';
import z from 'zod';

export function projectionSchemaShape<T extends TypeRecordWithChildren>(
  record: T
) {
  const shape: Partial<Record<keyof T, ZodType>> = {};

  for (const [key, type] of entries(record)) {
    if (isPropertyType(type)) {
      shape[key as keyof T] = z.coerce.boolean().optional();
    } else {
      shape[key as keyof T] = z.object(projectionSchemaShape(type));
    }
  }

  return shape;
}

export function projectionSchema<T extends TypeRecordWithChildren>(record: T) {
  return z.object(projectionSchemaShape(record));
}
