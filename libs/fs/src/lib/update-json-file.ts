import { JsonValue } from '@vnode/types';
import { readJsonFile } from './read-json-file.js';
import { writeJsonFile } from './write-json-file.js';

export async function updateJsonFile<T extends JsonValue>(
  path: string,
  updateHandler: (value: T) => T | Promise<T>,
  controller?: AbortController
) {
  const result = await updateHandler(await readJsonFile(path, controller));
  await writeJsonFile(path, result, controller);
}
