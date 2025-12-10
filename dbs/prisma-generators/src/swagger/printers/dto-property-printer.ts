import { DMMF } from '@prisma/generator-helper';
import { PropertyPrinter } from '@vnode/ts-printer';
import { getType } from 'src/helpers/get-type.js';
import { isRequiredField } from 'src/helpers/is-required-field.js';
import { DtoPropertyDecoratorPrinter } from './dto-property-decorator-printer.js';

export class DtoPropertyPrinter extends PropertyPrinter {
  constructor(
    protected readonly model: DMMF.Model,
    protected readonly field: DMMF.Field,
    protected readonly decoratorPrinter: typeof DtoPropertyDecoratorPrinter = DtoPropertyDecoratorPrinter
  ) {
    super({
      targetName: field.name,
      type: getType(field),
      isRequired: isRequiredField(field),
    });
  }

  override print(): string {
    return [
      new this.decoratorPrinter(this.model, this.field).print(),
      super.print(),
    ].join('\n');
  }
}
