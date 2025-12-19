import { isCreateInputField } from '../../common/is-create-input-field.js';
import type { Model } from '../../prisma/types.js';
import { createInputField } from './create-input-field.js';

/**
 * Create a schema to validate create-input
 *
 * @example
 * ````typescript
 *
 * // This schema is generated under internal directory
 * export const CategoryRelationCreate = ()=>z.union([
 *    z.object({ connect: z.object({  id: z.int() }) }),
 *    z.object({ create: z.object({  data: CategoryOwnCreate() }) })
 * ])
 *
 * // This schema is generated under internal directory
 * export const CategoryManyRelationCreate = ()=>z.union([
 *    z.object({ connect: z.object({  id: z.int() }).array() }),
 *    z.object({ createMany: z.object({  data: CategoryOwnCreate().array() }) })
 * ])
 *
 *
 * import * as Internal from  '../internal/internal.js';
 *
 * export const ProductCreate =()=> z.object({
 *    name:         z.string(),
 *    description:  z.string().optional()
 *    category:     Internal.CategoryRelationCreate().optional()
 *    categories:   Internal.CategoryManyRelationCreate().optional()
 * })
 *
 * ````
 * @param model
 * @returns
 */
export function createInput(model: Model) {
  const filteredFields = model.fields.filter(isCreateInputField);
  const propertiesCode = filteredFields.map(createInputField).join(',\n');

  return [`z.object({`, propertiesCode, `})`].join('\n');
}
