import { schemaName } from '../../common/schema-name.js';
import type { EnumModel } from '../../prisma/types.js';

/**
 * Create a enum array filter schema for the enum model
 * @param enumModel
 * @returns schema string
 */
export function enumArrayFilter(enumModel: EnumModel) {
  const schema = schemaName(enumModel.name, 'Enum');
  return `z.object({ 
        equals: ${schema}().array().optional(), 
        has: ${schema}().optional(), 
        hasEvery: ${schema}().array().optional(), 
        hasSome: ${schema}().array().optional(), 
        isEmpty: z.boolean().optional()
  })`;
}
