import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field, Model } from '../../types/prisma.js';
import { DtoClassPrinter } from '../base-printers/dto-class-printer.js';

export class OwnReadDtoClassPrinter extends DtoClassPrinter {
  constructor(model: Model) {
    super(model);
  }

  protected override map(field: Field): Field {
    return {
      ...field,
      isRequired: false,
      isUnique: false,
      isGenerated: false,
      isId: false,
    };
  }

  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnReadDto;
  }

  protected override filter(field: Field): boolean {
    return field.relationName == undefined;
  }
}
