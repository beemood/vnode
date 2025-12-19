import type { Field } from '../../prisma/types.js';

export function ownProjectionField(field: Field) {
  return `${field.name}: z.boolean().optional()`;
}
