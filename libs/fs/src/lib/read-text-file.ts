import { readFile } from 'fs/promises';

export async function readTextFile(path: string, controller?: AbortController) {
  return await readFile(path, {
    encoding: 'utf-8',
    signal: controller?.signal,
  });
}
