import { DMMF } from '@prisma/generator-helper';
import {
  isGeneratedField,
  isInternalField,
  isRequiredField,
  isTimestampField,
  isUnqiueField,
} from './field-type-checkers.js';

export function createDocumentation(model: DMMF.Model, field: DMMF.Field) {
  const docs: string[] = [];

  if (isUnqiueField(model, field)) {
    docs.push(`unqiue`);
  }

  if (isRequiredField(field)) {
    docs.push('required');
  } else {
    docs.push('optional');
  }

  if (isGeneratedField(field)) {
    docs.push(`generated`);
  }

  if (isInternalField(field)) {
    docs.push('internal');
  }

  if (isTimestampField(field)) {
    docs.push('timestamp');
  }

  return docs.join(', ');
}
