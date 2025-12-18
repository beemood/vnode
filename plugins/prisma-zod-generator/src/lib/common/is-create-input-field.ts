import type { Field } from '../prisma/types.js';
import { isGeneratedField } from './is-generated-field.js';
import { isInternalField } from './is-internal-field.js';
import { isTimestampField } from './is-timestamp-field.js';

export function isCreateInputField(field: Field) {
  if (
    isGeneratedField(field) ||
    isTimestampField(field) ||
    isInternalField(field)
  ) {
    return false;
  }
  return true; 
}
