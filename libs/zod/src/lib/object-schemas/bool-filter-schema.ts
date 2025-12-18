import z from 'zod';

export const booleanFilterSchema = () => {
  const shape = () => ({
    equals: z.coerce.boolean().optional(),
  });
  return z.coerce.boolean().or(
    z.object({
      ...shape(),
      not: z.boolean().or(z.object({ ...shape() }).optional()),
    })
  );
};

export const arrayBooleanFilterSchema = () => {
  return z.coerce
    .boolean()
    .array()
    .or(
      z.object({
        equals: z.boolean().array().optional(),
        has: z.boolean().optional(),
        hasEvery: z.boolean().array().optional(),
        hasSome: z.boolean().array().optional(),
        isEmpty: z.boolean().optional(),
      })
    );
};
