import type { Field } from '../prisma/types.js';
import { isProjectionField } from './is-projection-field.js';
import { isRelationField } from './is-relation-field.js';

export function isOwnProjectionField(field: Field) {
  if (isProjectionField(field)) {
    if (isRelationField(field)) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
