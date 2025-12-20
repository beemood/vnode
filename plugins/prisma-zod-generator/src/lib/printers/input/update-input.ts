import { isUpdateInputField } from '../../common/is-update-input-field.js';
import type { Model } from '../../prisma/types.js';
import { updateInputField } from './update-input-field.js';

export function updateInput(model: Model) {
  const filteredFields = model.fields.filter(isUpdateInputField);

  const propertiesCode = filteredFields
    .map((field) => ({ ...field, isRequired: false }))
    .map(updateInputField)
    .join(',\n');

  return [`z.object({`, propertiesCode, `})`].join('\n');
}
