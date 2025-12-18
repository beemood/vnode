import z from 'zod';
import { NumberSchemas } from '../schemas/number-schemas.js';

export const paginationSchemaShape = () => ({
  take: NumberSchemas.nonnegative().min(1).default(20).optional(),
  skip: NumberSchemas.nonnegative().min(0).default(0).optional(),
});

export const paginationSchema = () => {
  return z.object(paginationSchemaShape());
};
