import {
  isGeneratedField,
  isInternalField,
  isRelationField,
  isTimestampField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { DtoClassPrinter } from '../base-printers/dto-class-printer.js';

export class OwnCreateDtoClassPrinter extends DtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnCreateDto;
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
