import type { Field } from '../prisma/types.js';
import { isInternalField } from './is-internal-field.js';
import { isWriteonlyField } from './is-write-only-field.js';

/**
 * Filter the exposed fields only. If the field is marked as `@internal` or `@writeonly`, exclude them from the projection.
 * @param field
 * @returns
 */
export function isProjectionField(field: Field) {
  if (isInternalField(field) || isWriteonlyField(field)) {
    return false;
  }
  return true;
}
