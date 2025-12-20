import { MismatchError } from '@vnode/errors';
import { internalName } from '../../common/internal-name.js';
import { isRequiredField } from '../../common/is-required-field.js';
import type { Field } from '../../prisma/types.js';
import { ownInputField } from './own-input-field.js';

export function updateInputField(field: Field) {
  switch (field.kind) {
    case 'scalar':
    case 'enum': {
      return ownInputField(field);
    }
    case 'object': {
      const optional = isRequiredField(field) ? '' : '.optional()';

      if (field.isList) {
        const manyRelationUpdate = internalName(
          field.type,
          'ManyRelationUpdate'
        );
        return `${field.name}: ${manyRelationUpdate}()${optional}`;
      } else {
        const relationUpdate = internalName(field.type, 'RelationUpdate');
        return `${field.name}: ${relationUpdate}()${optional}`;
      }
    }
    case 'unsupported': {
      throw new MismatchError(`The kind, ${field.kind}, is not supported.`);
    }
  }
}
