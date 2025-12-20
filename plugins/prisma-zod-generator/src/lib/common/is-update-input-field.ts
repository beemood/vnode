import type { Field } from '../prisma/types.js';
import { isGeneratedField } from './is-generated-field.js';
import { isInternalField } from './is-internal-field.js';
import { isReadonlyField } from './is-readonly-field.js';
import { isTimestampField } from './is-timestamp-field.js';

export function isUpdateInputField(field: Field) {
  if (
    field.isReadOnly ||
    isGeneratedField(field) ||
    isTimestampField(field) ||
    isInternalField(field) ||
    isReadonlyField(field)
  ) {
    return false;
  }
  return true;
}
