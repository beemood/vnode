import { internalName } from '../../common/internal-name.js';
import type { Model } from '../../prisma/types.js';

export function manyRelationCreateInput(model: Model) {
  const ownCreate = internalName(model.name, 'OwnCreate');

  return [
    `z.union([`,
    `   z.object({  connect:    z.object({ id: z.int() }).array()               }),`,
    `   z.object({  createMany: z.object({ data: ${ownCreate}().array()     })  })`,
    `])`,
  ].join('\n');
}
