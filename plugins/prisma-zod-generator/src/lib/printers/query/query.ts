import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

export function query(model: Model) {
  const projection = schemaName(model.name, 'Projection');
  const where = schemaName(model.name, 'Where');

  return [
    `z.object({`,
    `   select: ${projection}().optional(),   `,
    `   where : ${where}().optional(),         `,
    `})`,
  ].join('\n');
}
