import '@prisma/generator-helper';
import { ClassPrinter } from '@vnode/ts-printer';
import type { Field, Model } from '../../types/prisma.js';
import { DtoPropertyPrinter } from './dto-property-printer.js';

export type FieldFilterFn = (model: Model, field: Field) => boolean;

export class DtoClassPrinter extends ClassPrinter {
  constructor(protected readonly model: Model) {
    super({ targetName: model.name });
  }

  protected map(field: Field): Field {
    return field;
  }

  protected filter(field: Field): boolean {
    return !!field;
  }

  protected override printProperties(): string {
    const properties = this.model.fields
      .filter(this.filter)
      .map(this.map)
      .map((field) => {
        return new DtoPropertyPrinter(
          this.model,
          field,
          this.printNameSuffix()
        ).print();
      })
      .join('\n');

    return ['{', properties, '}'].join('\n');
  }
}
