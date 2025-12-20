import { fileName } from './file-name.js';
import type { MainNameSuffix } from './name-suffixes.js';
import { schemaName } from './schema-name.js';

export function importSchema(modelName: string, suffix: MainNameSuffix) {
  return `import { ${schemaName(modelName, suffix)} } from './${fileName(
    modelName,
    suffix
  )}.js';`;
}
