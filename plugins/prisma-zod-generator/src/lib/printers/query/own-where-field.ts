import { MismatchError } from '@vnode/errors';
import { externalName } from '../../common/external-name.js';
import { internalName } from '../../common/internal-name.js';
import type { PrismaScalarType } from '../../common/prisma-scalar-type.js';
import type { Field } from '../../prisma/types.js';

export function ownWhereField(field: Field) {
  switch (field.kind) {
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          if (field.isList) {
            return `${externalName('ArrayStringFilter')}().optional()`;
          }
          return `${externalName('StringFilter')}.optional()`;
        }
        case 'Number':
        case 'Float':
        case 'Decimal': {
          {
            if (field.isList) {
              return `${externalName('ArrayNumberFilter')}().optional()`;
            }
            return `${externalName('NumberFilter')}.optional()`;
          }
        }
        case 'Int':
        case 'Integer': {
          if (field.isList) {
            return `${externalName('ArrayIntegerFilter')}().optional()`;
          }
          return `${externalName('IntegerFilter')}.optional()`;
        }
        case 'Boolean':
        case 'Bool': {
          if (field.isList) {
            return `${externalName('ArrayBooleanFilter')}().optional()`;
          }
          return `${externalName('BooleanFilter')}.optional()`;
        }
        case 'Json':
        case 'JSON': {
          if (field.isList) {
            return `${externalName('ArrayJsonFilter')}().optional()`;
          }
          return `${externalName('JsonFilter')}.optional()`;
        }
        case 'Date': {
          if (field.isList) {
            return `${externalName('ArrayDateFilter')}().optional()`;
          }
          return `${externalName('DateFilter')}.optional()`;
        }
        case 'DateTime':
        case 'Datetime':
        case 'Timestamp': {
          if (field.isList) {
            return `${externalName('ArrayDateTimeFilter')}().optional()`;
          }
          return `${externalName('DateTimeFilter')}.optional()`;
        }
        default: {
          throw new MismatchError(
            `The type, ${field.type}, is not supported here.`
          );
        }
      }
    }
    case 'enum': {
      const enumFilter = internalName(field.type, 'EnumFilter');
      const arrayEnumFilter = internalName(field.type, 'ArrayEnumFilter');

      if (field.isList) {
        return `${arrayEnumFilter}().optional()`;
      } else {
        return `${enumFilter}().optional()`;
      }
    }
    case 'object':
    case 'unsupported': {
      throw new MismatchError(
        `The field kind, ${field.kind}, is not supported here.`
      );
    }
  }
}
