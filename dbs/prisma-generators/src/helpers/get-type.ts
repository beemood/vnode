import { DMMF } from '@prisma/generator-helper';
import { NotMatchedError } from '@vnode/errors';
import { PrismaScalarType } from '../types/prisma.js';

export function getType(field: DMMF.Field, dtoSuffix: string): string {
  switch (field.kind) {
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          return 'string';
        }
        case 'Boolean': {
          return 'boolean';
        }
        case 'Int':
        case 'Float':
        case 'Decimal':
        case 'Number': {
          return 'number';
        }
        case 'Json': {
          return 'JsonValue';
        }
        case 'Date':
        case 'DateTime': {
          return 'Date';
        }
      }
      break;
    }
    case 'object': {
      return `${field.type}${dtoSuffix}`;
    }
    case 'enum': {
      return `P.${field.type}`;
    }
    case 'unsupported': {
      throw new NotMatchedError(
        `${field.name}'s type, ${field.type}, is unpupported!`
      );
    }
  }
}
