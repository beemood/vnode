import type { ParsedJsonValue } from '@vnode/types';
import { dump } from 'js-yaml';
import { writeTextFile } from './write-text-file.js';

export async function writeYamlFile(
  path: string,
  content: ParsedJsonValue,
  controller?: AbortController
) {
  const stringContent = dump(content);
  return await writeTextFile(path, stringContent, controller);
}
