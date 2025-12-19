import { MinimumError } from '@vnode/errors';
import { schemaName } from '../../common/schema-name.js';
import type { Field } from '../../prisma/types.js';
import { ownOrderByField } from './own-order-by-field.js';

export function orderByField(field: Field) {
  switch (field.kind) {
    case 'enum':
    case 'scalar':
      return ownOrderByField(field);
    case 'object': {
      if (field.isList) {
        return `z.object({ _count: z.enum(['ASC', 'DESC', 'asc', 'desc']) }).optional()`;
      } else {
        const schema = schemaName(field.type, 'OwnOrderBy');
        return `${schema}().optional()`;
      }
    }
    case 'unsupported': {
      throw new MinimumError(
        `The field kind, ${field.kind}, is not supported.`
      );
    }
  }
}
