import { isProjectionField } from '../../common/is-projection-field.js';
import type { Model } from '../../prisma/types.js';
import { whereField } from './where-field.js';

export function where(model: Model) {
  const filteredFields = model.fields.filter(isProjectionField);

  const propertiesCode = filteredFields.map(whereField).join(',\n');

  return [`z.object({`, propertiesCode, `})`].join('\n');
}
