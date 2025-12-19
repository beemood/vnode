import { isOwnProjectionField } from '../../common/is-own-projection-field.js';
import type { Model } from '../../prisma/types.js';
import { ownWhereField } from './own-where-field.js';

export function ownWhere(model: Model) {
  const filteredFields = model.fields.filter(isOwnProjectionField);
  const propertiesCode = filteredFields.map(ownWhereField).join(',\n');
  return `z.object({ ${propertiesCode} })`;
}
