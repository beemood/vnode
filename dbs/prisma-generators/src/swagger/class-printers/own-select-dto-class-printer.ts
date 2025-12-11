import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnReadDtoClassPrinter } from './own-read-dto-class-printer.js';

export class OwnSelectDtoClassPrinter extends OwnReadDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnSelectDto;
  }

  protected override map(field: Field): Field {
    return {
      ...field,
      kind: 'scalar',
      type: 'Boolean',
      isList: false,
      isRequired: false,
    };
  }
}
