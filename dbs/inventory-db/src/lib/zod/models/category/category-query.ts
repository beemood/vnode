import z from 'zod';
import { CategoryProjection } from './category-projection.js';
import { CategoryWhere } from './category-where.js';
export const CategoryQuery = () =>
  z.object({
    select: CategoryProjection().optional(),
    where: CategoryWhere().optional(),
  });
