import { internalName } from '../../common/internal-name.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

export function queryMany(model: Model) {
  const projection = schemaName(model.name, 'Projection');
  const where = schemaName(model.name, 'Where');
  const orderBy = schemaName(model.name, 'OrderBy');
  const distinct = internalName(model.name, 'Distinct');

  return [
    `z.object({`,
    `   take: z.int().min(1).default(20).optional(), `,
    `   skip: z.int().min(0).default(0).optional(),  `,
    `   distinct: ${distinct}().optional(), `,
    `   orderBy:  ${orderBy}().optional(),  `,
    `   select: ${projection}().optional(),  `,
    `   where :${where}().optional(), `,
    `})`,
  ].join('\n');
}
