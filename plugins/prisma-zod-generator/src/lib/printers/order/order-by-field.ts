import { MinimumError } from '@vnode/errors';
import { internalName } from '../../common/internal-name.js';
import type { Field } from '../../prisma/types.js';
import { ownOrderByField } from './own-order-by-field.js';

export function orderByField(field: Field) {
  switch (field.kind) {
    case 'enum':
    case 'scalar':
      return ownOrderByField(field);
    case 'object': {
      if (field.isList) {
        return `${field.name}: z.object({ _count: z.enum(['asc', 'desc']) }).optional()`;
      } else {
        const schema = internalName(field.type, 'OwnOrderBy');
        return `${field.name}: ${schema}().optional()`;
      }
    }
    case 'unsupported': {
      throw new MinimumError(
        `The field kind, ${field.kind}, is not supported.`
      );
    }
  }
}
