import { dec } from '../../common/dec.js';
import { importInternal } from '../../common/import-internal.js';
import { importZod } from '../../common/import-zod.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';
import { projection } from '../projection/projection.js';

export function projectionSchema(model: Model) {
  const name = schemaName(model.name, 'Projection');
  const schema = projection(model);
  return [importZod(), importInternal(), dec(name, schema)].join('\n');
}
