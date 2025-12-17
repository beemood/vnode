import { isEAN13 } from '@vnode/barcode';
import { InvalidBarcodeError } from '@vnode/errors';
import z from 'zod';

export const StringSchemas = {
  string: () => z.string(),
  name: () => z.string().max(255),
  short: () => z.string().max(255),
  long: () => z.string().max(2000),
  email: () => z.email(),
  uuid7: () => z.uuidv7(),
  uuid4: () => z.uuidv4(),
  slug: () => z.string().regex(/^[a-z-]{1,}$/),
  ean13: () =>
    z.string().refine((value) => {
      if (isEAN13(value)) {
        return value;
      }
      throw new InvalidBarcodeError(
        `The value, ${value}, is not a valid barcode.`
      );
    }),
  orderDirection: () => z.enum(['asc', 'desc', 'ASC', 'DESC']),
  enums: (names: string[]) => z.enum(names),
};
