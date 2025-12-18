import { type TypeRecordWithChildren } from '@vnode/types';
import { isPropertyType } from '@vnode/utils';
import z, { type ZodType } from 'zod';
import { pickFilterByType } from '../helpers/pick-filter-by-type.js';

export const whereSchemaShape = (record: TypeRecordWithChildren) => {
  const shape: Partial<Record<string, ZodType>> = {};

  const entires = Object.entries(record);

  for (const [key, propertyType] of entires) {
    if (isPropertyType(propertyType)) {
      shape[key] = pickFilterByType(propertyType).optional();
    } else {
      shape[key] = z.object(whereSchemaShape(propertyType)).optional();
    }
  }

  return shape;
};

export const whereSchema = (record: TypeRecordWithChildren) => {
  return z.object(whereSchemaShape(record));
};
