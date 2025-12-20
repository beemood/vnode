import { dec } from '../../common/dec.js';
import { importInternal } from '../../common/import-internal.js';
import { importZod } from '../../common/import-zod.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';
import { createInput } from '../input/create-input.js';

export function createInputSchema(model: Model) {
  const name = schemaName(model.name, 'Create');
  const schema = createInput(model);
  return [importZod(), importInternal(), dec(name, schema)].join('\n');
}
