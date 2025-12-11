import {
  isGeneratedField,
  isInternalField,
  isRelationField,
  isTimestampField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { DtoClassPrinter } from '../base-printers/dto-class-printer.js';

export class OwnUpdateDtoClassPrinter extends DtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnUpdateDto;
  }

  protected override map(field: Field): Field {
    return { ...field, isRequired: false };
  }
  
  protected override filter(field: Field): boolean {
    if (
      isRelationField(field) ||
      isInternalField(field) ||
      isTimestampField(field) ||
      isGeneratedField(field)
    ) {
      return false;
    }

    return true;
  }
}
