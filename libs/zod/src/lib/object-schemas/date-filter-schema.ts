import z from 'zod';
import { DateSchemas } from './date-schemas.js';

export const dateFilterSchema = () => {
  const shape = () => ({
    equals: DateSchemas.date().optional(),
    gt: DateSchemas.date().optional(),
    gte: DateSchemas.date().optional(),
    lt: DateSchemas.date().optional(),
    lte: DateSchemas.date().optional(),
    in: DateSchemas.date().array().optional(),
    notIn: DateSchemas.date().array().optional(),
  });

  return DateSchemas.date().or(
    z.object({
      ...shape(),
      not: DateSchemas.date().or(z.object(shape())).optional(),
    })
  );
};

export const arrayDateFilterSchema = () => {
  return DateSchemas.date()
    .array()
    .or(
      z.object({
        equals: DateSchemas.date().array().optional(),
        has: DateSchemas.date().optional(),
        hasEvery: DateSchemas.date().array().optional(),
        hasSome: DateSchemas.date().array().optional(),
        isEmpty: z.boolean().optional(),
      })
    );
};
