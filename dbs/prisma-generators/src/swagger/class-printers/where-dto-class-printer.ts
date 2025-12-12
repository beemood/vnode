import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnWhereDtoClassPrinter } from './own-where-dto-class-printer.js';

export class WhereDtoClassPrinter extends OwnWhereDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.WhereDto;
  }

  protected override printManyWhereDto(): string {
    return '';
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

  protected override printExtends(): string {
    return ` extends ${this.model.name}${DtoNameSuffixes.OwnWhereDto}`;
  }
}
