import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

export function manyRelationWhere(model: Model) {
  const ownWhere = schemaName(model.name, 'OwnWhere');
  return `z.object({ 
        every:${ownWhere}(),
        some: ${ownWhere}(),
        none: ${ownWhere}()
    })`;
}
