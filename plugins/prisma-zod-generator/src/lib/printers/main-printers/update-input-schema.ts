import { dec } from '../../common/dec.js';
import { importInternal } from '../../common/import-internal.js';
import { importZod } from '../../common/import-zod.js';
import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';
import { updateInput } from '../input/update-input.js';

export function updateInputSchema(model: Model) {
  const name = schemaName(model.name, 'Update');
  const schema = updateInput(model);
  return [importZod(), importInternal(), dec(name, schema)].join('\n');
}
