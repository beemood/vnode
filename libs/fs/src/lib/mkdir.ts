import { fsp } from './_.js';

export async function mkdir(path: string) {
  return await fsp.mkdir(path, { recursive: true });
}
