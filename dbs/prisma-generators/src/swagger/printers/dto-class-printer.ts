import { DMMF } from '@prisma/generator-helper';
import { ClassPrinter } from '@vnode/ts-printer';
import { DtoPropertyPrinter } from './dto-property-printer.js';

export abstract class DtoClassPrinter extends ClassPrinter {
  constructor(protected readonly model: DMMF.Model) {
    super({ targetName: model.name });
  }

  protected filterFields() {
    return this.model.fields;
  }

  protected override printProperties(): string {
    return this.filterFields()
      .map((field) => {
        return new DtoPropertyPrinter(this.model, field).print();
      })
      .join('\n');
  }
}
