import type { Field } from '../../prisma/types.js';

export function ownOrderByField(field: Field) {
  return `${field.name}: z.enum(['ASC', 'DESC', 'asc', 'desc']).optional()`;
}
