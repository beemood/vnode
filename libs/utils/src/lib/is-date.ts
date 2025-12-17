import { InvalidDateError } from '@vnode/errors';

export function isDate(value: unknown): value is Date {
  if (value instanceof Date) {
    if (value.toString() === 'Invalid Date') {
      throw new InvalidDateError(`The value, ${value}, is not a valid date.`);
    }
  }
  return false;
}
