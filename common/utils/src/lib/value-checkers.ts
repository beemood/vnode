import { UndefinedError } from '@vnode/errors';
import { Some } from '@vnode/types';

/**
 * Check the given {@link value} is defined or not
 * If defined return `true`, otherwise `false`.
 * @param value {@link Some<T>}
 * @returns boolean
 */
export function isDefined<T>(value: Some<T>): value is T {
  if (value != undefined) {
    return true;
  }
  return false;
}

/**
 * Check the given {@link value} is defined.
 * If defined, return the {@link value}, otherwise throw {@link UndefinedError}
 * @template T type of the value
 * @param value {@link Some<T>}
 * @returns - T | never
 * @throws - {@link UndefinedError}
 */
export function definedOrThrow<T>(value: Some<T>): T {
  if (isDefined(value)) {
    return value;
  }
  throw new UndefinedError();
}
