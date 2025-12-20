import { dec } from '../../common/dec.js';
import { importSchema } from '../../common/import-main.js';
import { importZod } from '../../common/import-zod.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';
import { query } from '../query/query.js';

export function querySchema(model: Model) {
  const name = schemaName(model.name, 'Query');
  const schema = query(model);

  return [
    importZod(),
    importSchema(model.name, 'Where'),
    importSchema(model.name, 'Projection'),
    dec(name, schema),
  ].join('\n');
}
