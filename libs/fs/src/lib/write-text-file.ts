import { mkdir, writeFile } from 'fs/promises';
import { dirname } from 'path';

export async function writeTextFile(
  path: string,
  content: string,
  controller?: AbortController
) {
  await mkdir(dirname(path), { recursive: true });
  return await writeFile(path, content, {
    encoding: 'utf-8',
    signal: controller?.signal,
  });
}
