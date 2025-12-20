import { MismatchError } from '@vnode/errors';
import { internalName } from '../../common/internal-name.js';
import type { Field } from '../../prisma/types.js';
import { ownProjectionField } from './own-projection-field.js';

export function projectionField(field: Field) {
  switch (field.kind) {
    case 'enum':
    case 'scalar': {
      return ownProjectionField(field);
    }
    case 'object': {
      if (field.isList) {
        const schema = internalName(field.type, 'OwnManyQuery');

        return `${field.name}: ${schema}().optional()`;
      } else {
        const schema = internalName(field.type, 'OwnQuery');
        return `${field.name}: ${schema}().optional()`;
      }
    }
    case 'unsupported':
    default: {
      throw new MismatchError(
        `The field kind, ${field.kind}, is not supported.`
      );
    }
  }
}
