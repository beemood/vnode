import z from 'zod';
import { StringSchemas } from '../schemas/string-schemas.js';

export const stringFilterSchema = () => {
  const shape = () => ({
    contains: StringSchemas.string().optional(),
    endsWith: StringSchemas.string().optional(),
    equals: StringSchemas.string().optional(),
    gt: StringSchemas.string().optional(),
    gte: StringSchemas.string().optional(),
    lt: StringSchemas.string().optional(),
    lte: StringSchemas.string().optional(),
    startsWith: StringSchemas.string().optional(),
    in: StringSchemas.string().array().optional(),
    notIn: StringSchemas.string().array().optional(),
  });

  return StringSchemas.string().or(
    z.object({
      ...shape(),
      not: StringSchemas.string().or(z.object(shape())).optional(),
    })
  );
};

export const arrayStringFilterSchemea = () => {
  return StringSchemas.string()
    .array()
    .or(
      z.object({
        equals: StringSchemas.string().array().optional(),
        has: StringSchemas.string().optional(),
        hasEvery: StringSchemas.string().array().optional(),
        hasSome: StringSchemas.string().array().optional(),
        isEmpty: z.boolean().optional(),
      })
    );
};
