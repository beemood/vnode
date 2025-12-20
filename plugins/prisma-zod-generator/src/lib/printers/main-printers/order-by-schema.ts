import { dec } from '../../common/dec.js';
import { importInternal } from '../../common/import-internal.js';
import { importZod } from '../../common/import-zod.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';
import { orderBy } from '../order/order-by.js';

export function orderBySchema(model: Model) {
  const name = schemaName(model.name, 'OrderBy');
  const schema = orderBy(model);
  return [importZod(), importInternal(), dec(name, schema)].join('\n');
}
