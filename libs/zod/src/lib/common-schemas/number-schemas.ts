import { errorMessage } from '@vnode/utils';
import z from 'zod';

export const number = () => z.coerce.number();

export const NumberSchemas = {
  number: () => number(),
  integer: () => number().int(),
  fraction: () => number().min(0).max(0.999999),
  positive: () => number().positive(),
  nonnegative: () => number().nonnegative(),
  rate: () => number().int().max(5).min(0),
  percent: () => number().max(100).min(0),
  even: () =>
    number().refine(
      (value) => {
        if (value % 2 === 2) {
          return true;
        }

        return false;
      },
      {
        error: errorMessage(
          'NotEvenNumberError: The value must be an even number.'
        ),
      }
    ),
  odd: () =>
    z.coerce.number().refine(
      (value) => {
        if (value % 2 === 1) {
          return true;
        }
        return false;
      },
      {
        error: errorMessage(
          'NotOddNumberError: The value must be an odd number.'
        ),
      }
    ),
};
