import z from 'zod';
import { NumberSchemas } from '../schemas/number-schemas.js';

export const numberFilterSchema = () => {
  const shape = () => ({
    equals: NumberSchemas.number().optional(),
    gt: NumberSchemas.number().optional(),
    lt: NumberSchemas.number().optional(),
    lte: NumberSchemas.number().optional(),
    gte: NumberSchemas.number().optional(),
    in: NumberSchemas.number().array().optional(),
    notIn: NumberSchemas.number().array().optional(),
  });
  return NumberSchemas.number().or(
    z.object({
      ...shape(),
      not: z.object(shape()).optional(),
    })
  );
};

export const arrayNumberFilterSchema = () => {
  return NumberSchemas.number()
    .array()
    .or(
      z.object({
        equals: NumberSchemas.number().array().optional(),
        has: NumberSchemas.number().optional(),
        hasEvery: NumberSchemas.number().array().optional(),
        hasSome: NumberSchemas.number().array().optional(),
        isEmpty: z.boolean().optional(),
      })
    );
};
