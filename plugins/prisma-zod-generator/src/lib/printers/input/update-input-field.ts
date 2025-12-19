import { isUpdateInputField } from '../../common/is-update-input-field.js';
import type { Model } from '../../prisma/types.js';
import { createInputField } from './create-input-field.js';

export function updateInput(model: Model) {
  const filteredFields = model.fields.filter(isUpdateInputField);

  const propertiesCode = filteredFields
    .map((field) => ({ ...field, isRequired: false }))
    .map(createInputField)
    .join(',\n');

    
  return [`z.object({`, propertiesCode, `})`].join('\n');
}
