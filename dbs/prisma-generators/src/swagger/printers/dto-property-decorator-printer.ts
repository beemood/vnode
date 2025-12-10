import { DMMF } from '@prisma/generator-helper';
import { DecoratorPrinter } from '@vnode/ts-printer';
import { getApiPropertyOptionsAsString } from 'src/helpers/get-api-property-options-as-string.js';

export class DtoPropertyDecoratorPrinter extends DecoratorPrinter {
  constructor(
    protected readonly model: DMMF.Model,
    protected readonly field: DMMF.Field
  ) {
    super({
      targetName: 'ApiProperty',
      options: getApiPropertyOptionsAsString(model, field),
    });
  }
}
