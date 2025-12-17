import z from 'zod';

export const boolFilterSchema = () => {
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
