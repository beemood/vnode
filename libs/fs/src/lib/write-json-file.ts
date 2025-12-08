import { JsonValue } from '@vnode/types';
import { writeTextFile } from './write-text-file.js';

export function writeJsonFile<T extends JsonValue>(
  path: string,
  content: T,
  controller?: AbortController
) {
  const jsonSring = JSON.stringify(content);
  return writeTextFile(path, jsonSring, controller);
}
