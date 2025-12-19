import { isOwnField } from '../../common/is-own-field.js';
import type { Field, Model } from '../../prisma/types.js';
import { ownInputField } from './own-input-field.js';
/**
 * Create an input-schema not including relation fields to validate inputs.
 * This schema is a kind of internal schema.
 *
 * @param model prisma model metadata
 * @param inputFieldFilter function to filter the fields that are allowed to be created by users.
 * @returns
 */
export function ownInput(
  model: Model,
  inputFieldFilter: (field: Field) => boolean,
  mapField: (field: Field) => Field = (field) => field
) {
  const filteredFields = model.fields
    .filter(inputFieldFilter)
    .filter(isOwnField)
    .map(mapField);

  const propertiesCode = filteredFields.map(ownInputField).join(',\n');

  return [`z.object({`, propertiesCode, `})`].join('\n');
}
