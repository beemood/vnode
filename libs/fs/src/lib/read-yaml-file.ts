import type { ParsedJsonValue } from '@vnode/types';
import { load } from 'js-yaml';
import { readTextFile } from './read-text-file.js';
export async function readYamlFile<T extends ParsedJsonValue>(
  path: string,
  controller?: AbortController
): Promise<T> {
  const content = await readTextFile(path, controller);
  return (await load(content)) as T;
}
