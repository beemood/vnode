import type { StringRecord } from '@vnode/types';
import z from 'zod';
import { orderSchema } from '../object-schemas/order-schema.js';
import { NumberSchemas } from './number-schemas.js';

export const ObjectSchemas = {
  page: () =>
    z.object({
      take: NumberSchemas.nonnegative().min(1).optional(),
      skip: NumberSchemas.nonnegative().min(0).optional(),
    }),

  order: (record: StringRecord) => orderSchema(record),

};
