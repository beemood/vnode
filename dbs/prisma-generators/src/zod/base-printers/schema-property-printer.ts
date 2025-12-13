import { DMMF } from '@prisma/generator-helper';
import { Printable } from '@vnode/types';
import { getSchemaType } from '../../helpers/get-schema-type.js';

export class SchemaPropertyPrinter implements Printable {
  constructor(
    protected readonly datamodel: DMMF.Datamodel,
    protected readonly field: DMMF.Field,
    protected readonly propertySchemaTypeSuffix: string
  ) {}

  print(): string {
    return `${this.field.name}: ${getSchemaType(
      this.datamodel,
      this.field,
      this.propertySchemaTypeSuffix
    )}`;
  }
}
