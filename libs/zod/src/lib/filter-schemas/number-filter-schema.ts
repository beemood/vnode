import z from 'zod';
import { NumberSchemas } from '../common-schemas/number-schemas.js';

export const numberFilterSchemaShape = () => {
  const shape = () => ({
    equals: NumberSchemas.number().optional(),
    gt: NumberSchemas.number().optional(),
    lt: NumberSchemas.number().optional(),
    lte: NumberSchemas.number().optional(),
    gte: NumberSchemas.number().optional(),
    in: NumberSchemas.number().array().optional(),
    notIn: NumberSchemas.number().array().optional(),
  });
  return {
    ...shape(),
    not: z.object(shape()).optional(),
  };
};

export const numberFilterSchema = () => {
  return NumberSchemas.number().or(z.object(numberFilterSchemaShape()));
};

export const arrayNumberFilterSchemaShape = () => {
  return {
    equals: NumberSchemas.number().array().optional(),
    has: NumberSchemas.number().optional(),
    hasEvery: NumberSchemas.number().array().optional(),
    hasSome: NumberSchemas.number().array().optional(),
    isEmpty: z.boolean().optional(),
  };
};
export const arrayNumberFilterSchema = () => {
  return NumberSchemas.number()
    .array()
    .or(z.object(arrayNumberFilterSchemaShape()));
};
