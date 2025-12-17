import {
  NotEvenNumberError,
  NotOddNumberError
} from '@vnode/errors';
import z from 'zod';

export const NumberSchemas = {
  num: () => z.coerce.number(),
  int: () => z.coerce.number().int(),
  fraction: () => z.coerce.number().min(0).max(1),
  positive: () => z.coerce.number().positive(),
  nonnegative: () => z.coerce.number().nonnegative(),
  rate: () => z.coerce.number().int().max(5).min(0),
  even: () =>
    z.coerce.number().refine((value) => {
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
