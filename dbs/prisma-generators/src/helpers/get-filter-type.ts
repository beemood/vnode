import { NotMatchedError } from '@vnode/errors';
import { Field, PrismaScalarType } from '../types/prisma.js';

export enum FilterClasses {
  StringFilter,
  NumberFilter,
  BooleanFilter,
  DateFilter,
  Array,
}

export function getFilterType(field: Field) {
  switch (field.kind) {
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          if (field.isList) {
            return 'ArrayStringFilter';
          }
          return 'StringFilter';
        }
        case 'Boolean': {
          return 'boolean';
        }
        case 'Int':
        case 'Float':
        case 'Decimal':
        case 'Number': {
          if (field.isList) {
            return 'ArrayNumberFilter';
          }
          return 'NumberFilter';
        }
        case 'Json': {
          return 'JsonFilter';
        }
        case 'Date':
        case 'DateTime': {
          if (field.isList) {
            return 'ArrayDateFilter';
          }
          return 'DateFilter';
        }
      }
      break;
    }
    case 'object': {
      return `${field.type}OwnWhereDto`;
    }
    case 'enum': {
      return `StringFilter`;
    }
    case 'unsupported': {
      throw new NotMatchedError(
        `${field.name}'s type, ${field.type}, is unpupported!`
      );
    }
  }
}
