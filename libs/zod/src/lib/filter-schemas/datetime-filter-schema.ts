import z from 'zod';
import { DateSchemas } from '../common-schemas/date-schemas.js';
import { dateFilterSchemaShape } from './date-filter-schema.js';

export const datetimeFilterSchemaShape = () => {
  const shape = () => ({
    equals: DateSchemas.datetime().optional(),
    gt: DateSchemas.datetime().optional(),
    gte: DateSchemas.datetime().optional(),
    lt: DateSchemas.datetime().optional(),
    lte: DateSchemas.datetime().optional(),
    in: DateSchemas.datetime().array().optional(),
    notIn: DateSchemas.datetime().array().optional(),
  });

  return {
    ...shape(),
    not: DateSchemas.datetime().or(z.object(shape())).optional(),
  };
};

export const datetimeFilterSchema = () => {
  return DateSchemas.datetime().or(z.object(dateFilterSchemaShape()));
};

export const arrayDatetimeFilterSchemaShape = () => {
  return {
    equals: DateSchemas.datetime().array().optional(),
    has: DateSchemas.datetime().optional(),
    hasEvery: DateSchemas.datetime().array().optional(),
    hasSome: DateSchemas.datetime().array().optional(),
    isEmpty: z.boolean().optional(),
  };
};

export const arrayDatetimeFilterSchema = () => {
  return DateSchemas.datetime()
    .array()
    .or(z.object(arrayDatetimeFilterSchemaShape()));
};
