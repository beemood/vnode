import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnReadDtoClassPrinter } from './own-read-dto-class-printer.js';

export class IncludeDtoClassPrinter extends OwnReadDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.IncludeDto;
  }

  protected override printPropertyTypeSuffix(): string {
    return DtoNameSuffixes.OwnProjectionDto;
  }

  protected override filter(field: Field): boolean {
    if (isInternalField(field)) {
      return false;
    }

    if (isRelationField(field)) {
      return true;
    }
    return false;
  }

  protected override map(field: Field): Field {
    return { ...field, isList: false, isRequired: false };
  }
}
