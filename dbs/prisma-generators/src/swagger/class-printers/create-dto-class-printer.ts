import {
  isGeneratedField,
  isInternalField,
  isReadOnlyField,
  isRelationField,
  isTimestampField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnCreateDtoClassPrinter } from './own-create-dto-class-printer.js';

export class CreateDtoClassPrinter extends OwnCreateDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.CreateDto;
  }

  protected override printExtends(): string {
    return `extends ${this.model.name}${DtoNameSuffixes.OwnCreateDto}`;
  }

  protected override filter(field: Field): boolean {
    if (isRelationField(field)) {
      if (
        isTimestampField(field) ||
        isReadOnlyField(field) ||
        isInternalField(field) ||
        isGeneratedField(field)
      ) {
        return false;
      }
      return true;
    }

    return false;
  }
}
