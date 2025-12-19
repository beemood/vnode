import { isProjectionField } from '../../common/is-projection-field.js';
import type { Model } from '../../prisma/types.js';
import { orderByField } from './order-by-field.js';

export function orderBy(model: Model) {
  const filteredFields = model.fields.filter(isProjectionField);
  const propertiesCode = filteredFields.map(orderByField).join(',\n');

  return [`z.object({`, propertiesCode, `})`];
}
