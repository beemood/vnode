import { DMMF } from '@prisma/generator-helper';

export function isUnqiueField(model: DMMF.Model, field: DMMF.Field) {
  return !!(
    model.uniqueFields.find((unqiues) => unqiues.includes(field.name)) ||
    field.isUnique
  );
}
