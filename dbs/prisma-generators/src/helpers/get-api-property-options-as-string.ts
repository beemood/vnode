import { DMMF } from '@prisma/generator-helper';
import { getApiPropertyOptions } from './get-api-property-options.js';

export function getApiPropertyOptionsAsString(
  model: DMMF.Model,
  field: DMMF.Field
) {
  return JSON.stringify(getApiPropertyOptions(model, field));
}
