import { DMMF } from '@prisma/generator-helper';

export function isRequiredField(field: DMMF.Field) {
  return field.isRequired == true;
}
