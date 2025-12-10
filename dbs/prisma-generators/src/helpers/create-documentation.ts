import { DMMF } from '@prisma/generator-helper';
import { isGeneratedField } from './is-generated-field.js';
import { isRequiredField } from './is-required-field.js';
import { isUnqiueField } from './is-unique-field.js';

export function createDocumentation(model: DMMF.Model, field: DMMF.Field) {
  const docs: string[] = [];

  if (isUnqiueField(model, field)) {
    docs.push(`Field should be unique.`);
  }

  if (isRequiredField(field)) {
    docs.push('Field is required.');
  }

  if (isGeneratedField(field)) {
    docs.push(`Field is a generated readonly field`);
  }
  return docs.join('\n');
}
