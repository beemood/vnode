import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
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
      isRequired: true,
      isUpdatedAt: false,
    };
  }

  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnReadDto;
  }

  protected override filter(field: Field): boolean {
    if (isRelationField(field) || isInternalField(field)) {
      return false;
    }
    return true;
  }
}
