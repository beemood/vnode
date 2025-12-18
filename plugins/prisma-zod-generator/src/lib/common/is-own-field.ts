import type { Field } from '../prisma/types.js';

export function isOwnField(field: Field) {
  if (field.kind === 'scalar' || field.kind === 'enum') {
    return true;
  }

  return false;
}
