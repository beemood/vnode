import z from 'zod';

export const IntegerSchema = z.coerce.number().int();

export const PositiveIntegerSchema = IntegerSchema.clone().min(0);
