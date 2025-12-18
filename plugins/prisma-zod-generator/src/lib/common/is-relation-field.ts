import type { Field } from '../prisma/types.js';

export function isRelationField(field: Field) {
  if (field.kind === 'object') {
    return true;
  }

  return false;
}
