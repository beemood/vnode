import { writeFile } from 'fs/promises';
import { dirname } from 'path';
import { mkdir } from './mkdir.js';

export async function writeTextFile(
  path: string,
  content: string,
  controller?: AbortController
) {
  await mkdir(dirname(path));
  return await writeFile(path, content, {
    encoding: 'utf8',
    signal: controller?.signal,
  });
}
