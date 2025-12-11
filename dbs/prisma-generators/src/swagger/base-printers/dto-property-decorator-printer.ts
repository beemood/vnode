import { DecoratorPrinter } from '@vnode/ts-printer';
import { printApiPropertyOptions } from '../../helpers/print-api-property-options.js';
import type { Field, Model } from '../../types/prisma.js';

export class DtoPropertyDecoratorPrinter extends DecoratorPrinter {
  constructor(
    protected readonly model: Model,
    protected readonly field: Field,
    protected readonly dtoNameSuffix: string
  ) {
    super({
      targetName: 'ApiProperty',
      options: printApiPropertyOptions(model, field, dtoNameSuffix),
    });
  }
}
