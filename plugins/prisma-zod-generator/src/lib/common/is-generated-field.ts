import type { Field, FieldDefault } from '../prisma/types.js';

export function isGeneratedField(field: Field) {
  if (field.hasDefaultValue) {
    if (field.default != undefined) {
      const defaultName = (field.default as FieldDefault).name;

      return [
        'autoincrement',
        'uuid',
        'ulid',
        'cuid',
        'nanoid',
        'now',
      ].includes(defaultName);
    }
  }

  return false;
}
