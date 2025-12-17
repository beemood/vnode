import z from 'zod';
import { NumberSchemas } from '../schemas/number-schemas.js';

export const integerFilterSchema = () => {
  const shape = () => ({
    equals: NumberSchemas.integer().optional(),
    gt: NumberSchemas.integer().optional(),
    lt: NumberSchemas.integer().optional(),
    lte: NumberSchemas.integer().optional(),
    gte: NumberSchemas.integer().optional(),
    in: NumberSchemas.integer().array().optional(),
    notIn: NumberSchemas.integer().array().optional(),
  });
  return NumberSchemas.integer().or(
    z.object({
      ...shape(),
      not: NumberSchemas.integer().or(z.object(shape())).optional(),
    })
  );
};

export const arrayIntegerFilterSchema = () => {
  return NumberSchemas.number()
    .array()
    .or(
      z.object({
        equals: NumberSchemas.integer().array().optional(),
        has: NumberSchemas.integer().optional(),
        hasEvery: NumberSchemas.integer().array().optional(),
        hasSome: NumberSchemas.integer().array().optional(),
        isEmpty: z.boolean().optional(),
      })
    );
};
