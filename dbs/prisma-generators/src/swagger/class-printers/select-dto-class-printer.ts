import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { OwnReadDtoClassPrinter } from './own-read-dto-class-printer.js';

export class SelectDtoClassPrinter extends OwnReadDtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.SelectDto;
  }

  protected override printPropertyTypeSuffix(): string {
    return DtoNameSuffixes.OwnSelectDto;
  }

  protected override printExtends(): string {
    return ` extends ${this.model.name}${DtoNameSuffixes.OwnSelectDto} `;
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
