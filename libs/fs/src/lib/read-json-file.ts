import { JsonValue } from '@vnode/types';
import { readTextFile } from './read-text-file.js';

export async function readJsonFile<T extends JsonValue>(
  path: string,
  controller?: AbortController
) {
  const content = await readTextFile(path, controller);
  return JSON.parse(content) as T;
}
