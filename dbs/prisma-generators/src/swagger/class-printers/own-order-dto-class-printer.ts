import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnReadDtoClassPrinter } from './own-read-dto-class-printer.js';

export class OwnOrderDtoClassPrinter extends OwnReadDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnOrderDto;
  }

  protected override printPropertyTypeSuffix(options: any): string {
    return '';
  }

  protected override map(field: Field): Field {
    return {
      ...field,
      kind: 'object',
      type: 'OrderDirection',
      isList: false,
      isRequired: false,
    };
  }
}
