import { MismatchError } from '@vnode/errors';
import { schemaName } from '../../common/schema-name.js';
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
        const schema = schemaName(field.type, 'OwnManyQuery');

        return `${schema}().optional()`;
      } else {
        const schema = schemaName(field.type, 'OwnQuery');
        return `${schema}().optional()`;
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
