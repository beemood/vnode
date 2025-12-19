import { isString } from '@vnode/utils';
import type { Field } from '../prisma/types.js';

export function isWriteonlyField(field: Field): boolean {
  return (
    isString(field.documentation) && field.documentation.includes('@writeonly')
  );
}
