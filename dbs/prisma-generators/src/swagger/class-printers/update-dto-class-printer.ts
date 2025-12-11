import {
  isGeneratedField,
  isInternalField,
  isReadOnlyField,
  isRelationField,
  isTimestampField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnUpdateDtoClassPrinter } from './own-update-dto-class-printer.js';

export class UpdateDtoClassPrinter extends OwnUpdateDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.UpdateDto;
  }

  protected override printExtends(): string {
    return `extends ${this.model.name}${DtoNameSuffixes.OwnUpdateDto}`;
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
