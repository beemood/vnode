import { DMMF } from '@prisma/generator-helper';
import { getType } from './get-type.js';

export function getFullType(field: DMMF.Field, dtoNameSuffix: string) {
  const primitiveType = getType(field, dtoNameSuffix);
  const arrayMark = field.isList ? '[]' : '';
  return `${primitiveType}${arrayMark}`;
}
