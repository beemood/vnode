import { DMMF } from '@prisma/generator-helper';
import { isDefined } from '@vnode/utils';

/**
 * Check the field is one of
 * - id with autoincrement
 * - uuid with default value
 * @param field
 * @returns
 */
export function isGeneratedField(field: DMMF.Field) {
  const defaultName = (field.default as DMMF.FieldDefault)?.name;

  const generatedNames = ['uuid', 'ulid', 'cuid', 'nanoid', 'autoincrement'];
  if (generatedNames.includes(defaultName)) {
    return true;
  }

  if (field.isId == true) {
    return true;
  }

  return false;
}

export function isRequiredField(field: DMMF.Field) {
  const requiredExp = /@required/i;

  if (isDefined(field.documentation)) {
    return requiredExp.test(field.documentation);
  }

  if (field.hasDefaultValue) {
    return false;
  }

  return field.isRequired == true;
}

export function isUnqiueField(model: DMMF.Model, field: DMMF.Field) {
  return !!(
    model.uniqueFields.find((unqiues) => unqiues.includes(field.name)) ||
    field.isUnique
  );
}

export function isRelationField(field: DMMF.Field) {
  return field.kind === 'object' && isDefined(field.relationName);
}

export function isTimestampField(field: DMMF.Field) {
  return ['createdAt', 'updatedAt', 'deletedAt'].includes(field.name);
}

export function isInternalField(field: DMMF.Field): boolean {
  const internalExp = /@internal/i;

  if (isDefined(field.documentation)) {
    return internalExp.test(field.documentation);
  }

  return false;
}

export function isReadOnlyField(field: DMMF.Field): boolean {
  const readonlyExp = /@readonly/i;

  if (isDefined(field.documentation)) {
    return readonlyExp.test(field.documentation);
  }
  return false;
}
