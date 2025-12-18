import type { AnyRecord, RecordKey } from '@vnode/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function entries<T extends AnyRecord>(record: T): [RecordKey, any][] {
  return Object.entries(record);
}
