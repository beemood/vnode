import { isCreateInputField } from '../../common/is-create-input-field.js';
import type { Model } from '../../prisma/types.js';
import { ownInput } from './own-input.js';

/**
 * Create an create-input schema that only includes own fields
 * @param model
 * @returns
 */
export function ownCreateInput(model: Model) {
  return ownInput(model, isCreateInputField);
}
