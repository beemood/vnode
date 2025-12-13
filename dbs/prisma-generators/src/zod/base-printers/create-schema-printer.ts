import { DMMF } from '@prisma/generator-helper';
import {
  isInternalField,
  isReadOnlyField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { SchemaNameSuffixes } from '../../types/name-variants.js';
import { SchemaPrinter } from './schema-printer.js';

export class CreateSchemaPrinter extends SchemaPrinter {
  protected override printNameSuffix(): string {
    return SchemaNameSuffixes.CreateSchema;
  }

  protected override filter(field: DMMF.Field) {
    if (isRelationField(field)) {
      if (isInternalField(field) || isReadOnlyField(field)) {
        return false;
      }
      return true;
    }
    return false;
  }

  override print(): string {
    return [
      `export const ${this.printName()} = ${this.model.name}${
        SchemaNameSuffixes.OwnCreateSchema
      }.extend(${this.printProperties()});`,
      `export type ${this.printName()}Type = z.infer<typeof ${this.printName()}>;`,
    ].join('\n');
  }
}
