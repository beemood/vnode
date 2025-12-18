import { isEAN13 } from '@vnode/barcode';
import { errorMessage } from '@vnode/types';
import z from 'zod';

export const StringSchemas = {
  string: () => z.string(),
  name: () => z.string().max(255),
  short: () => z.string().max(255),
  long: () => z.string().max(2000),
  email: () => z.email(),
  uuid7: () => z.uuidv7(),
  uuid4: () => z.uuidv4(),
  slug: () => z.string().slugify(),
  ean13: () =>
    z.string().refine(
      (value) => {
        if (isEAN13(value)) {
          return true;
        }
        return false;
      },
      { error: errorMessage('NotEanError: The value must be a valid ean.') }
    ),
  orderDirection: () => z.enum(['asc', 'desc', 'ASC', 'DESC']),
  enums: (names: string[]) => z.enum(names),
};
