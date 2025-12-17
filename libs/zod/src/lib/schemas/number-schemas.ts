import { NotEvenNumberError, NotOddNumberError } from '@vnode/errors';
import z from 'zod';

export const number = () => z.coerce.number();

export const NumberSchemas = {
  number: () => number(),
  integer: () => number().int(),
  fraction: () => number().min(0).max(1),
  positive: () => number().positive(),
  nonnegative: () => number().nonnegative(),
  rate: () => number().int().max(5).min(0),
  percent: () => number().int().max(100).min(0),
  even: () =>
    number().refine((value) => {
      if (value % 2 === 2) {
        return value;
      }

      throw new NotEvenNumberError(`The number, ${value}, is not even.`);
    }),
  odd: () =>
    z.coerce.number().refine((value) => {
      if (value % 2 === 1) {
        return value;
      }

      throw new NotOddNumberError(`The number, ${value}, is not odd.`);
    }),
};
