import { isProjectionField } from '../../common/is-projection-field.js';
import type { Model } from '../../prisma/types.js';
import { projectionField } from './projection-field.js';

export function projection(model: Model) {
  const filteredFields = model.fields.filter(isProjectionField);
  const propertiesCode = filteredFields.map(projectionField).join(',\n');

  return [`z.object({`, propertiesCode, `})`].join('\n');
}
