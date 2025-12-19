import type { ParsedJsonValue } from '@vnode/types';
import { writeTextFile } from './write-text-file.js';

export async function writeJsonFile<T extends ParsedJsonValue>(
  path: string,
  content: T,
  controller?: AbortController
) {
  const stringContent = JSON.stringify(content);
  return await writeTextFile(path, stringContent, controller);
}
