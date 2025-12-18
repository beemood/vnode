import type { StringRecord, TypeRecord } from '@vnode/types';
import { orderSchema } from '../object-schemas/order-schema.js';
import { paginationSchema } from '../object-schemas/pagination-schema.js';
import { whereSchemea } from '../object-schemas/where-schema.js';

export const ObjectSchemas = {
  page: () => paginationSchema(),
  order: (record: StringRecord) => orderSchema(record),
  where: (record: TypeRecord) => whereSchemea(record),
};
