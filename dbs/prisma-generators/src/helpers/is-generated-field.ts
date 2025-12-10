import { DMMF } from '@prisma/generator-helper';

export function isGeneratedField(field: DMMF.Field) {
  const defaultName = (field.default as DMMF.FieldDefault)?.name;

  if (defaultName == 'uuid' || defaultName == 'autoincrement') {
    return true;
  }

  if (field.isId == true) {
    return true;
  }

  return false;
}
