import { DMMF } from '@prisma/generator-helper';
import { Printable } from '@vnode/types';
import { Field } from '../../types/prisma.js';
import { SchemaPropertyPrinter } from './schema-property-printer.js';

export class SchemaPrinter implements Printable {
  constructor(
    protected readonly datamodel: DMMF.Datamodel,
    protected readonly model: DMMF.Model
  ) {}

  protected printPropertyTypeSuffix(): string {
    return 'OwnCreateSchema';
  }

  protected printNameSuffix(): string {
    return '';
  }

  protected printName() {
    return `${this.model.name}${this.printNameSuffix()}`;
  }

  protected map(field: Field) {
    return field;
  }

  protected filter(field: Field) {
    return true;
  }

  protected printProperties() {
    const code = this.model.fields
      .filter(this.filter)
      .map(this.map)
      .map((e) => {
        return new SchemaPropertyPrinter(
          this.datamodel,
          e,
          this.printPropertyTypeSuffix()
        ).print();
      })
      .join(',');

    return `{\n${code}\n}`;
  }

  print(): string {
    return [
      `export const ${this.printName()} = z.object(${this.printProperties()});`,
      `export type ${this.printName()}Type = z.infer<typeof ${this.printName()}>;`,
    ].join('\n');
  }
}
