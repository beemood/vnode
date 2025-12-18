import type { AnyRecord, Keys } from '@vnode/types';

export function keys<T extends AnyRecord>(record: T): Keys<T> {
  return Object.keys(record);
}
