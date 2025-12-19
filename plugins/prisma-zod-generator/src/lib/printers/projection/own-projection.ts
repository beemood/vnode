import { isOwnProjectionField } from '../../common/is-own-projection-field.js';
import type { Model } from '../../prisma/types.js';
import { ownProjectionField } from './own-projection-field.js';

export function ownProjection(model: Model) {
  const filteredFields = model.fields.filter(isOwnProjectionField);
  const propertiesCode = filteredFields.map(ownProjectionField).join(',\n');

  return [`z.object({`, propertiesCode, `})`].join('\n');
}
