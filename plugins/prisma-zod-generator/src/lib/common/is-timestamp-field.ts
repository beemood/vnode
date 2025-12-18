import type { Field } from '../prisma/types.js';

export function isTimestampField(field: Field) {
  return ['createdAt', 'updatedAt', 'deletedAt'].includes(field.name);
}
