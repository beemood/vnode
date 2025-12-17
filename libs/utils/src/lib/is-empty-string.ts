import { NotStringError } from '@vnode/errors';
import { isString } from './is-string.js';

export function isEmptyString(value: string): boolean {
  if (!isString(value))
    throw new NotStringError(`The value must be a string but found ${value}?`);

  return value.trim().length == 0;
}
