import { NotSupporedError } from '@vnode/errors';
import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { getFilterType } from '../../helpers/get-filter-type.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { DtoClassPrinter } from '../base-printers/dto-class-printer.js';

export class OwnWhereDtoClassPrinter extends DtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnWhereDto;
  }

  protected override printPropertyTypeSuffix(options: any): string {
    return '';
  }

  protected override filter(field: Field): boolean {
    if (isInternalField(field)) {
      return false;
    }

    if (isRelationField(field)) {
      return false;
    }

    if (field.isList) {
      return false;
    }

    return true;
  }

  protected override map(field: Field): Field {
    switch (field.kind) {
      case 'object': {
        return {
          ...field,
          type: `${field.type}${DtoNameSuffixes.OwnWhereDto}`,
        };
      }
      case 'scalar': {
        if (field.type === 'Boolean') {
          return field;
        }
        return { ...field, kind: 'object', type: getFilterType(field) };
      }
      case 'enum': {
        return field;
      }
      case 'unsupported': {
        throw new NotSupporedError(field.kind);
      }
      default: {
        throw new NotSupporedError(field.kind);
      }
    }
  }
}
