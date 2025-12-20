import { MismatchError } from '@vnode/errors';
import { externalName } from '../../common/external-name.js';
import type { PrismaScalarType } from '../../common/prisma-scalar-type.js';
import { schemaName } from '../../common/schema-name.js';
import type { Field } from '../../prisma/types.js';

export function ownWhereField(field: Field) {
  switch (field.kind) {
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          if (field.isList) {
            return `${field.name}: ${externalName(
              'arrayStringFilterSchema'
            )}().optional()`;
          }
          return `${field.name}: ${externalName(
            'stringFilterSchema'
          )}().optional()`;
        }
        case 'Number':
        case 'Float':
        case 'Decimal': {
          {
            if (field.isList) {
              return `${field.name}: ${externalName(
                'arrayNumberFilterSchema'
              )}().optional()`;
            }
            return `${field.name}: ${externalName(
              'numberFilterSchema'
            )}().optional()`;
          }
        }
        case 'Int':
        case 'Integer': {
          if (field.isList) {
            return `${field.name}: ${externalName(
              'arrayIntegerFilterSchema'
            )}().optional()`;
          }
          return `${field.name}: ${externalName(
            'integerFilterSchema'
          )}().optional()`;
        }
        case 'Boolean':
        case 'Bool': {
          if (field.isList) {
            return `${field.name}: ${externalName(
              'arrayBooleanFilterSchema'
            )}().optional()`;
          }
          return `${field.name}: ${externalName(
            'booleanFilterSchema'
          )}().optional()`;
        }
        case 'Json':
        case 'JSON': {
          if (field.isList) {
            return `${field.name}: ${externalName(
              'arrayJsonFilterSchema'
            )}().optional()`;
          }
          return `${field.name}: ${externalName(
            'jsonFilterSchema'
          )}().optional()`;
        }
        case 'Date': {
          if (field.isList) {
            return `${field.name}: ${externalName(
              'arrayDateFilterSchema'
            )}().optional()`;
          }
          return `${field.name}: ${externalName(
            'dateFilterSchema'
          )}().optional()`;
        }
        case 'DateTime':
        case 'Datetime':
        case 'Timestamp': {
          if (field.isList) {
            return `${field.name}: ${externalName(
              'arrayDatetimeFilterSchema'
            )}().optional()`;
          }
          return `${field.name}: ${externalName(
            'datetimeFilterSchema'
          )}().optional()`;
        }
        default: {
          throw new MismatchError(
            `The type, ${field.type}, is not supported here.`
          );
        }
      }
    }
    case 'enum': {
      const enumFilter = schemaName(field.type, 'EnumFilter');
      const arrayEnumFilter = schemaName(field.type, 'ArrayEnumFilter');

      if (field.isList) {
        return `${field.name}: ${arrayEnumFilter}().optional()`;
      } else {
        return `${field.name}: ${enumFilter}().optional()`;
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
