import { names } from '@vnode/names';
import type { NameSuffix } from './name-suffixes.js';

export function fileName(modelName: string, suffix: NameSuffix) {
  return [[names(modelName).kebab, names(suffix).kebab].join('-')].join('');
}
