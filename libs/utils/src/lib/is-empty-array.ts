import { NotArrayError } from '@vnode/errors';
import { isArray } from './is-array.js';

export function isEmptyArray<T>(value: T[]): boolean {
  if (!isArray(value))
    throw new NotArrayError(`The value must be an array but found ${value}`);

  if (value instanceof Array) {
    if (value.length == 0) {
      return true;
    }
  }
  return false;
}
