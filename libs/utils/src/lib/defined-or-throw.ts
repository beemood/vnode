import { UndefinedError } from '@vnode/errors';
import { Some } from '@vnode/types';
import { isDate } from './is-date.js';
import { isNumber } from './is-number.js';
import { isString } from './is-string.js';

/**
 * If the given {@link value} is defined number, string, date, or object, return the {@link value}, else throw {@link UndefinedError}
 *
 * @template T actual value type
 * @param value any value
 * @returns - {@link T}
 */
export function definedOrThrow<T>(value: Some<T>): T {
  if (isNumber(value)) {
    if (!isNaN(value)) {
      return value;
    }
  } else if (isString(value)) {
    return value;
  } else if (isDate(value)) {
    if (value.toString() != 'Invalid Date') {
      return value;
    }
  } else if (value != undefined) {
    return value;
  }
  throw new UndefinedError(`The value must be defined but found ${value}.`);
}
