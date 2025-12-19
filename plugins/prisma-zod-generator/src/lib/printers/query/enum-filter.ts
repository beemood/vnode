import { schemaName } from '../../common/schema-name.js';
import type { EnumModel } from '../../prisma/types.js';

/**
 * Create a filter schema for the enum model
 *
 * @param enumModel {@link EnumModel}
 * @returns schema string
 */
export function enumFilter(enumModel: EnumModel) {
  const schema = schemaName(enumModel.name, 'Enum');
  return `z.object({ 
    equals: ${schema}().optional(), 
    in:     ${schema}().array().optional(), 
    notIn:  ${schema}().array().optional(),
    not:    ${schema}().or(z.object({ 
        equals: ${schema}().optional(), 
        in: ${schema}().array().optional(), 
        notIn: ${schema}().array().optional()
    })).optional()
  })`;
}
