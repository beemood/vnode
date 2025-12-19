import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

export function ownQuery(model: Model) {
  const ownProjection = schemaName(model.name, 'OwnProjection');
  const ownWhere = schemaName(model.name, 'OwnWhere');

  return [
    `z.object({`,
    `   select: ${ownProjection}().optional(),   `,
    `   where : ${ownWhere}().optional(),         `,
    `})`,
  ].join('\n');
}
