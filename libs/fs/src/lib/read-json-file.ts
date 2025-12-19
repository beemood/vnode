import type { ParsedJsonValue } from '@vnode/types';
import { readTextFile } from './read-text-file.js';

export async function readJsonFile<T extends ParsedJsonValue>(
  path: string,
  controller?: AbortController
): Promise<T> {
  const content = await readTextFile(path, controller);
  return JSON.parse(content);
}
