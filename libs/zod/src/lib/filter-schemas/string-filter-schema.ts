import z from 'zod';
import { StringSchemas } from '../common-schemas/string-schemas.js';

export const stringFilterSchemaShape = () => {
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
  return {
    ...shape(),
    not: StringSchemas.string().or(z.object(shape())).optional(),
  };
};

export const stringFilterSchema = () => {
  return StringSchemas.string().or(z.object(stringFilterSchemaShape()));
};

export const arrayStringFilterSchemeaShape = () => {
  return {
    equals: StringSchemas.string().array().optional(),
    has: StringSchemas.string().optional(),
    hasEvery: StringSchemas.string().array().optional(),
    hasSome: StringSchemas.string().array().optional(),
    isEmpty: z.boolean().optional(),
  };
};

export const arrayStringFilterSchemea = () => {
  return StringSchemas.string()
    .array()
    .or(z.object(arrayStringFilterSchemeaShape()));
};
