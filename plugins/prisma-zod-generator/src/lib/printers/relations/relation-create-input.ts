import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

/**
 *
 *
 * @param model {@link Model}
 * @returns schema string
 */
export function relationCreateInput(model: Model) {
  const ownCreate = schemaName(model.name, 'OwnCreate');

  return [
    `z.union([`,
    `       z.object({  connect: z.object({ id: z.int()           })    }),   `,
    `       z.object({  create:  z.object({ data: ${ownCreate}()  })    })                 `,
    `])`,
  ].join('\n');
}
