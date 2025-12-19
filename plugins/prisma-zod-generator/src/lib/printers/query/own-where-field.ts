import { MismatchError } from '@vnode/errors';
import { externalName } from '../../common/external-name.js';
import type { PrismaScalarType } from '../../common/prisma-scalar-type.js';
import { schemaName } from '../../common/schema-name.js';
import type { Field } from '../../prisma/types.js';

export function ownWhereField(field: Field) {
  const getType = () => {
    switch (field.kind) {
      case 'scalar': {
        switch (field.type as PrismaScalarType) {
          case 'String': {
            if (field.isList) {
              return `${externalName('arrayStringFilterSchema')}().optional()`;
            }
            return `${externalName('stringFilterSchema')}().optional()`;
          }
          case 'Number':
          case 'Float':
          case 'Decimal': {
            {
              if (field.isList) {
                return `${externalName(
                  'arrayNumberFilterSchema'
                )}().optional()`;
              }
              return `${externalName('numberFilterSchema')}().optional()`;
            }
          }
          case 'Int':
          case 'Integer': {
            if (field.isList) {
              return `${externalName('arrayIntegerFilterSchema')}().optional()`;
            }
            return `${externalName('integerFilterSchema')}().optional()`;
          }
          case 'Boolean':
          case 'Bool': {
            if (field.isList) {
              return `${externalName('arrayBooleanFilterSchema')}().optional()`;
            }
            return `${externalName('booleanFilterSchema')}().optional()`;
          }
          case 'Json':
          case 'JSON': {
            if (field.isList) {
              return `${externalName('arrayJsonFilterSchema')}().optional()`;
            }
            return `${externalName('jsonFilterSchema')}().optional()`;
          }
          case 'Date': {
            if (field.isList) {
              return `${externalName('arrayDateFilterSchema')}().optional()`;
            }
            return `${externalName('dateFilterSchema')}().optional()`;
          }
          case 'DateTime':
          case 'Datetime':
          case 'Timestamp': {
            if (field.isList) {
              return `${externalName(
                'arrayDatetimeFilterSchema'
              )}().optional()`;
            }
            return `${externalName('datetimeFilterSchema')}().optional()`;
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
  };

  return `${field.name}: ${getType()}`;
}
