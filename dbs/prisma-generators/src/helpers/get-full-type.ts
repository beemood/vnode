import { DMMF } from '@prisma/generator-helper';
import { getType } from './get-type.js';

export function getFullType(field: DMMF.Field) {
  const primitiveType = getType(field);
  const arrayMark = field.isList ? '[]' : '';
  return `${primitiveType}${arrayMark}`;
}
