import z from 'zod';
import * as Internal from '../../internal/internal.js';
import { CategoryOrderBy } from './category-order-by.js';
import { CategoryProjection } from './category-projection.js';
import { CategoryWhere } from './category-where.js';
export const CategoryQueryMany = () =>
  z.object({
    take: z.int().min(1).default(20).optional(),
    skip: z.int().min(0).default(0).optional(),
    distinct: Internal.CategoryDistinct().optional(),
    orderBy: CategoryOrderBy().optional(),
    select: CategoryProjection().optional(),
    where: CategoryWhere().optional(),
  });
