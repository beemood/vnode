import { MismatchError } from '@vnode/errors';
import { internalName } from '../../common/internal-name.js';
import type { Field } from '../../prisma/types.js';
import { ownWhereField } from './own-where-field.js';

export function whereField(field: Field) {
  const getType = () => {
    switch (field.kind) {
      case 'scalar': {
        return ownWhereField(field);
      }
      case 'enum': {
        if (field.isList) {
          const arrayEnumFilter = internalName(field.type, 'ArrayEnumFilter');
          return `${arrayEnumFilter}().optional()`;
        } else {
          const enumFilter = internalName(field.type, 'EnumFilter');
          return `${enumFilter}().optional()`;
        }
      }
      case 'object': {
        if (field.isList) {
          const schema = internalName(field.type, 'ManyRelationWhere');
          return `${schema}().optional()`;
        } else {
          const schema = internalName(field.type, 'OwnWhere');
          return `${schema}().optional()`;
        }
      }
      case 'unsupported': {
        throw new MismatchError(
          `The field kind, ${field.kind}, is not supported here.`
        );
      }
    }
  };

  return `${field.name}: ${getType()}`;
}
