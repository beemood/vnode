import z from 'zod';
import { DateSchemas } from '../common-schemas/date-schemas.js';

export const dateFilterSchemaShape = () => {
  const shape = () => ({
    equals: DateSchemas.date().optional(),
    gt: DateSchemas.date().optional(),
    gte: DateSchemas.date().optional(),
    lt: DateSchemas.date().optional(),
    lte: DateSchemas.date().optional(),
    in: DateSchemas.date().array().optional(),
    notIn: DateSchemas.date().array().optional(),
  });

  return {
    ...shape(),
    not: DateSchemas.date().or(z.object(shape())).optional(),
  };
};

export const dateFilterSchema = () => {
  return DateSchemas.date().or(z.object(dateFilterSchemaShape()));
};

export const arrayDateFilterSchemaShape = () => {
  return {
    equals: DateSchemas.date().array().optional(),
    has: DateSchemas.date().optional(),
    hasEvery: DateSchemas.date().array().optional(),
    hasSome: DateSchemas.date().array().optional(),
    isEmpty: z.boolean().optional(),
  };
};

export const arrayDateFilterSchema = () => {
  return DateSchemas.date().array().or(z.object(arrayDateFilterSchemaShape()));
};
