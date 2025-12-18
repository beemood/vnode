import type { AnyRecord } from '@vnode/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function values<T extends AnyRecord>(record: T): any[] {
  return Object.values(record);
}
