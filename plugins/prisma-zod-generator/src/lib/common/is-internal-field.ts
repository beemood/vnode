import { isString } from '@vnode/utils';
import type { Field } from '../prisma/types.js';

export function isInternalField(field: Field): boolean {
  return (
    isString(field.documentation) && field.documentation.includes('@internal')
  );
}
