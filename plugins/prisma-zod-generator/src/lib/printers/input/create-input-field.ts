import { MismatchError } from '@vnode/errors';
import { internalName } from '../../common/internal-name.js';
import { isRequiredField } from '../../common/is-required-field.js';
import type { Field } from '../../prisma/types.js';
import { relationCreateInputField } from '../relations/relation-create-input-field.js';
import { ownInputField } from './own-input-field.js';

/**
 * Create the input field (including relations).
 * The scalar and enum is already created by {@link ownInputField}.
 * In prisma there are two ways to connect relations, create a new one or connect with primary column.
 * We will generate a dedicated Many and one relation create schemas named ModelNameRelationCreate, ModelNameManyRelationCreate
 * @param field
 * @returns
 */
export function createInputField(field: Field) {
  switch (field.kind) {
    case 'scalar':
      return ownInputField(field);
    case 'enum': {
      const schema = internalName(field.type, 'Enum');
      const optional = isRequiredField(field) ? '' : '.optional()';
      if (field.isList) {
        return `${field.name}: ${schema}.array()${optional}`;
      } else {
        return `${field.name}: ${schema}.array()${optional}`;
      }
    }
    case 'object': {
      return relationCreateInputField(field);
    }
    case 'unsupported':
    default: {
      throw new MismatchError(
        `The field kind, ${field.kind}, is not supporeted.`
      );
    }
  }
}
