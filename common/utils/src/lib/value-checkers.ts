import { NotStringError, UndefinedError } from '@vnode/errors';
import { Any, Nullable } from '@vnode/types';

/**
 * Check the given {@link value} is defined or not
 * If defined return `true`, otherwise `false`.
 * @param value {@link Nullable<T>}
 * @returns boolean
 */
export function isDefined<T>(value: Nullable<T>): value is T {
  if (value != undefined) {
    return true;
  }
  return false;
}

/**
 * Check the given {@link value} is defined.
 * If defined, return the {@link value}, otherwise throw {@link UndefinedError}
 * @template T type of the value
 * @param value {@link Nullable<T>}
 * @returns - T | never
 * @throws - {@link UndefinedError}
 */
export function definedOrThrow<T>(value: Nullable<T>, debugName?: string): T {
  if (isDefined(value)) {
    return value;
  }
  throw new UndefinedError(`${debugName} is not defined`);
}

export function stringOrThrow(value: Any, debugName?: string): string {
  if (typeof value === 'string') {
    return value;
  }
  throw new NotStringError(`${debugName} is not a string`);
}

export function definedOr<T>(value: Nullable<T>, defaultValue: T): T {
  if (isDefined(value)) {
    return value;
  }
  return defaultValue;
}
