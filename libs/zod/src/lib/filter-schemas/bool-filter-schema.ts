import z from 'zod';

export const booleanFilterSchemaShape = () => {
  const shape = () => ({
    equals: z.coerce.boolean().optional(),
  });

  return {
    ...shape(),
    not: z.boolean().or(z.object({ ...shape() }).optional()),
  };
};

export const booleanFilterSchema = () => {
  return z.coerce.boolean().or(z.object(booleanFilterSchemaShape()));
};

export const arrayBooleanFilterSchemaShape = () => {
  return {
    equals: z.boolean().array().optional(),
    has: z.boolean().optional(),
    hasEvery: z.boolean().array().optional(),
    hasSome: z.boolean().array().optional(),
    isEmpty: z.boolean().optional(),
  };
};
export const arrayBooleanFilterSchema = () => {
  return z.coerce
    .boolean()
    .array()
    .or(z.object(arrayBooleanFilterSchemaShape()));
};
