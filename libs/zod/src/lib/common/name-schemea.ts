import z from 'zod';

export const NameSchema = z.string().max(255);
