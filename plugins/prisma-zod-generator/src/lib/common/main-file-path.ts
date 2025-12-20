import { names } from '@vnode/names';
import { fileName } from './file-name.js';
import type { MainNameSuffix } from './name-suffixes.js';

export function mainFilePath(modelName: string, suffix: MainNameSuffix) {
  const kebab = names(modelName).kebab;
  return `models/${kebab}/${fileName(modelName, suffix)}.ts`;
}
