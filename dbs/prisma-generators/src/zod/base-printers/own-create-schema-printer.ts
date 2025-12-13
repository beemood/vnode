import { DMMF } from '@prisma/generator-helper';
import {
  isGeneratedField,
  isInternalField,
  isReadOnlyField,
  isRelationField,
  isTimestampField,
} from '../../helpers/field-type-checkers.js';
import { SchemaNameSuffixes } from '../../types/name-variants.js';
import { SchemaPrinter } from './schema-printer.js';

export class OwnCreateSchemaPrinter extends SchemaPrinter {
  protected override printNameSuffix(): string {
    return SchemaNameSuffixes.OwnCreateSchema;
  }

  protected override printPropertyTypeSuffix(): string {
    return SchemaNameSuffixes.OwnCreateSchema;
  }

  protected override filter(field: DMMF.Field) {
    if (isRelationField(field)) {
      return false;
    }
    if (
      isInternalField(field) ||
      isTimestampField(field) ||
      isReadOnlyField(field) ||
      isGeneratedField(field)
    ) {
      return false;
    }
    return true;
  }
}
