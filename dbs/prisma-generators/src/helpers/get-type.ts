import { DMMF } from '@prisma/generator-helper';
import { NotMatchedError } from '@vnode/errors';
import { definedOrThrow } from '@vnode/utils';
import { PrismaScalarType } from 'src/types/prisma-scalar-types.js';

export function getType(field: DMMF.Field): string {
  switch (field.kind) {
    case 'object': {
      return definedOrThrow(field.relationName);
    }
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
    case 'enum': {
      return field.type;
    }
    case 'unsupported': {
      throw new NotMatchedError(
        `${field.name}'s type, ${field.type} is unpupported!`
      );
    }
  }
}
