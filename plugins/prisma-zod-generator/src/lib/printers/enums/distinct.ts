import { isOwnProjectionField } from '../../common/is-own-projection-field.js';
import type { Model } from '../../prisma/types.js';

/**
 * Create enum schema string with {@link model}'s own fields.
 *
 * @param model {@link Model}
 * @returns enum schema string
 */
export function distinct(model: Model) {
  const filteredFields = model.fields.filter(isOwnProjectionField);

  const propertiesCode = filteredFields
    .map((field) => {
      return `'${field.name}'`;
    })
    .join(',');
  return `z.enum([${propertiesCode}]).array()`;
}
