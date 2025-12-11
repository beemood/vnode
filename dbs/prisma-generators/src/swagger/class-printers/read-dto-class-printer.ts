import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnReadDtoClassPrinter } from './own-read-dto-class-printer.js';

export class ReadDtoClassPrinter extends OwnReadDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.ReadDto;
  }

  protected override printExtends(): string {
    return ` extends ${this.model.name}${DtoNameSuffixes.OwnReadDto}`;
  }

  protected override filter(field: Field): boolean {
    if (isRelationField(field)) {
      if (isInternalField(field)) {
        return false;
      }
      return true;
    }

    return false;
  }
}
