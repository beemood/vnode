import type { TypeRecordWithChildren } from '@vnode/types';
import { keys } from '@vnode/utils';
import z from 'zod';

export function distinctSchema(record: TypeRecordWithChildren) {
  return z.enum(keys(record));
}
