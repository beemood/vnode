import { isCreateInputField } from '../common/is-create-input-field.js';
import { isOwnField } from '../common/is-own-field.js';
import { NameSuffixes } from '../common/name-suffixes.js';
import type { Model } from '../prisma/types.js';
import { ownCreateField } from './own-create-field.js';

/**
 * Print own (not relation fields) create schema
 * @param model DMMF.Model
 */
export function ownCreate(model: Model) {
  const ownFields = model.fields.filter(isCreateInputField).filter(isOwnField);

  return [
    `export const ${model.name}${NameSuffixes.OwnCreate}= z.object({`,
    ownFields.map(ownCreateField).join(',\n'),
    `})`,
  ].join('\n');
}
