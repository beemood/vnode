import type { Field } from '../prisma/types.js';

export function isRequiredField(field: Field) {
  if (field.isRequired === true) {
    return true;
  }

  return false;
}
