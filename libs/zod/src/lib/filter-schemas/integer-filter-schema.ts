import z from 'zod';
import { NumberSchemas } from '../common-schemas/number-schemas.js';

export const integerFilterSchemaShape = () => {
  const shape = () => ({
    equals: NumberSchemas.integer().optional(),
    gt: NumberSchemas.integer().optional(),
    lt: NumberSchemas.integer().optional(),
    lte: NumberSchemas.integer().optional(),
    gte: NumberSchemas.integer().optional(),
    in: NumberSchemas.integer().array().optional(),
    notIn: NumberSchemas.integer().array().optional(),
  });
  return {
    ...shape(),
    not: NumberSchemas.integer().or(z.object(shape())).optional(),
  };
};
export const integerFilterSchema = () => {
  return NumberSchemas.integer().or(z.object(integerFilterSchemaShape()));
};

export const arrayIntegerFilterSchemaShape = () => {
  return {
    equals: NumberSchemas.integer().array().optional(),
    has: NumberSchemas.integer().optional(),
    hasEvery: NumberSchemas.integer().array().optional(),
    hasSome: NumberSchemas.integer().array().optional(),
    isEmpty: z.boolean().optional(),
  };
};
export const arrayIntegerFilterSchema = () => {
  return NumberSchemas.number()
    .array()
    .or(z.object(arrayIntegerFilterSchemaShape()));
};
