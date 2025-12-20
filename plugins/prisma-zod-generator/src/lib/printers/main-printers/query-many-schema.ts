import { dec } from '../../common/dec.js';
import { importInternal } from '../../common/import-internal.js';
import { importSchema } from '../../common/import-main.js';
import { importZod } from '../../common/import-zod.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';
import { queryMany } from '../query/query-many.js';

export function queryManySchema(model: Model) {
  const name = schemaName(model.name, 'QueryMany');
  const schema = queryMany(model);

  return [
    importZod(),
    importInternal(),
    importSchema(model.name, 'Where'),
    importSchema(model.name, 'OrderBy'),
    importSchema(model.name, 'Projection'),
    dec(name, schema),
  ].join('\n');
}
