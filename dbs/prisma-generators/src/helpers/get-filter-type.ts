import { NotMatchedError } from '@vnode/errors';
import { DtoNameSuffixes } from '../types/name-variants.js';
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
          if (field.isList) {
            return 'boolean[]';
          }
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
          if (field.isList) {
            return 'ArrayStringFilter';
          }
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
      if (field.isList) {
        return `${field.type}${DtoNameSuffixes.ManyWhereDto}`;
      }
      return `${field.type}OwnWhereDto`;
    }
    case 'enum': {
      if (field.isList) {
        return 'ArrayStringFilter';
      }
      return `StringFilter`;
    }
    case 'unsupported': {
      throw new NotMatchedError(
        `${field.name}'s type, ${field.type}, is unpupported!`
      );
    }
  }
}
