import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

export function manyRelationUpdateInput(model: Model) {
  const ownCreate = schemaName(model.name, 'OwnCreate');
  const ownUpdate = schemaName(model.name, 'OwnUpdate');
  const ownWhere = schemaName(model.name, 'OwnWhere');

  return `z.union([ 
        z.object({ connect: z.object({ id: z.int() }).array() }),
        z.object({ disconnect: z.object({ id: z.int() }).array() }),

        z.object({ createMany: z.object({ data: ${ownCreate}() }).array() }),
        z.object({ updateMany: z.object({ data: ${ownUpdate}(), where: ${ownWhere}() }).array() })
    ])`;
}
