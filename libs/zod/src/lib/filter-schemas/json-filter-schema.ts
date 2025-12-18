import z from 'zod';
import { StringSchemas } from '../common-schemas/string-schemas.js';

export const jsonFilterSchemaShape = () => {
  const shape = () => ({
    path: StringSchemas.string().array().optional(),
    array_contains: StringSchemas.string().optional(),
    array_ends_with: StringSchemas.string().optional(),
    array_starts_with: StringSchemas.string().optional(),
    equals: StringSchemas.string().optional(),
    gt: StringSchemas.string().optional(),
    gte: StringSchemas.string().optional(),
    lt: StringSchemas.string().optional(),
    lte: StringSchemas.string().optional(),
    string_contains: StringSchemas.string().optional(),
    string_ends_with: StringSchemas.string().optional(),
    string_starts_with: StringSchemas.string().optional(),
  });

  return {
    ...shape(),
    not: z.object(shape()).optional(),
  };
};
export const jsonFilterSchema = () => {
  return StringSchemas.string().or(z.object(jsonFilterSchemaShape()));
};
