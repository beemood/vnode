//   connect: { id: 1 },
//   disconnect: { id: 1 },
//   create: { name: '', status: 'CLOSE' },
//   update: { name: '' }

import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

export function relationUpdateInput(model: Model) {
  const ownCreate = schemaName(model.name, 'OwnCreate');
  const ownUpdate = schemaName(model.name, 'OwnUpdate');

  return `z.union([ 
        z.object({ connect: z.object({ id: z.int() }) }),
        z.object({ disconnect: z.object({ id: z.int() }) }),
        z.object({ create: ${ownCreate}() }),
        z.object({ update: ${ownUpdate}() }),
    ])`;
}
