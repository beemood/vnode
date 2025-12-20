import { dec } from '../../common/dec.js';
import { importExternal } from '../../common/import-external.js';
import { importInternal } from '../../common/import-internal.js';
import { importZod } from '../../common/import-zod.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';
import { where } from '../query/where.js';

export function whereSchema(model: Model) {
  const name = schemaName(model.name, 'Where');
  const schema = where(model);
  return [
    importZod(),
    importExternal(),
    importInternal(),
    dec(name, schema),
  ].join('\n');
}
