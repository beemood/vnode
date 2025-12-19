import { internalName } from '../../common/internal-name.js';
import type { Model } from '../../prisma/types.js';

export function ownQuery(model: Model) {
  const ownProjection = internalName(model.name, 'OwnProjection');
  const ownWhere = internalName(model.name, 'OwnWhere');

  return [
    `z.object({`,
    `   select: ${ownProjection}().optional()   `,
    `   where :${ownWhere}().optional()         `,
    `})`,
  ].join('\n');
}
