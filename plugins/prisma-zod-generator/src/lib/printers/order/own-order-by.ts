import { isOwnProjectionField } from '../../common/is-own-projection-field.js';
import type { Model } from '../../prisma/types.js';
import { ownOrderByField } from './own-order-by-field.js';

export function ownOrderBy(model: Model) {
  const filteredFields = model.fields.filter(isOwnProjectionField);
  const propertiesCode = filteredFields.map(ownOrderByField).join(',\n');

  return [`z.object({`, propertiesCode, `})`].join('\n');
}
