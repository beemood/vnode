import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { ReadDtoClassPrinter } from './read-dto-class-printer.js';

export class OrderDtoClassPrinter extends ReadDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OrderDto;
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

  protected override printPropertyTypeSuffix(field: Field): string {
    return `${DtoNameSuffixes.OwnOrderDto}`;
  }

  protected override printExtends(): string {
    return ` extends ${this.model.name}${DtoNameSuffixes.OwnOrderDto} `;
  }

  protected override map(field: Field): Field {
    return field;
  }
}
