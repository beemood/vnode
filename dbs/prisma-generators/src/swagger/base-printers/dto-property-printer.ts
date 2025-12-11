import { PropertyPrinter } from '@vnode/ts-printer';
import { getFullType } from '../../helpers/get-full-type.js';
import { isRequiredField } from '../../helpers/is-required-field.js';
import type { Field, Model } from '../../types/prisma.js';
import { DtoPropertyDecoratorPrinter } from './dto-property-decorator-printer.js';

export class DtoPropertyPrinter extends PropertyPrinter {
  constructor(
    protected readonly model: Model,
    protected readonly field: Field,
    protected readonly dtoNameSuffix: string
  ) {
    super({
      targetName: field.name,
      type: getFullType(field, dtoNameSuffix),
      isRequired: isRequiredField(field),
    });
  }

  override print(): string {
    return [
      new DtoPropertyDecoratorPrinter(
        this.model,
        this.field,
        this.dtoNameSuffix
      ).print(),
      super.print(),
    ].join('\n');
  }
}
