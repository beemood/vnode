import { readFile } from 'fs/promises';

export function readTextFile(path: string, controller?: AbortController) {
  return readFile(path, { encoding: 'utf-8', signal: controller?.signal });
}
