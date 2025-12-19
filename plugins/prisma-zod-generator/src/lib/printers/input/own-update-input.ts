import { isUpdateInputField } from '../../common/is-update-input-field.js';
import type { Model } from '../../prisma/types.js';
import { ownInput } from './own-input.js';

export function ownUpdateInput(model: Model) {
  return ownInput(model, isUpdateInputField, (field) => ({
    ...field,
    isRequired: false,
  }));
}
