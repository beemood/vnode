import { DMMF } from '@prisma/generator-helper';
import { isGeneratedField } from './is-generated-field.js';
import { isRequiredField } from './is-required-field.js';
import { isUnqiueField } from './is-unique-field.js';

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
  return docs.join(', ');
}
