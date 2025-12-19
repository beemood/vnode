import { internalName } from '../../common/internal-name.js';
import type { Model } from '../../prisma/types.js';

export function relationCreateInput(model: Model) {
  const ownCreate = internalName(model.name, 'OwnCreate');

  return [
    `z.union([`,
    `       z.object({  connect: z.object({ id: z.int()           })    }),   `,
    `       z.object({  create:  z.object({ data: ${ownCreate}()  })    })                 `,
    `])`,
  ].join('\n');
}
