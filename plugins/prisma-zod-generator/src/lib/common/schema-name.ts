import type { NameSuffix } from './name-suffixes.js';

export function schemaName(modelName: string, suffix: NameSuffix) {
  return `${modelName}${suffix}`;
}
