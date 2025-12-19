import { internalName } from '../../common/internal-name.js';
import type { Model } from '../../prisma/types.js';

export function ownManyQuery(model: Model) {
  const ownProjection = internalName(model.name, 'OwnProjection');
  const ownWhere = internalName(model.name, 'OwnWhere');
  const ownOrderBy = internalName(model.name, 'OwnOrderBy');
  const distinct = internalName(model.name, 'Distinct');

  return [
    `z.object({`,
    `   take: z.int().min(1).default(20).optional(), `,
    `   skip: z.int().min(0).default(0).optional(),  `,
    `   distinct: ${distinct}().optional() `,
    `   orderBy:  ${ownOrderBy}().optional(),  `,
    `   select: ${ownProjection}().optional(),  `,
    `   where :${ownWhere}().optional(), `,
    `})`,
  ].join('\n');
}
