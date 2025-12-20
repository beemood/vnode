import z from 'zod';
import * as Internal from '../../internal/internal.js';
export const CategoryUpdate = () =>
  z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    status: Internal.StatusEnum().optional(),
    statuses: Internal.StatusEnum().array().optional(),
    parent: Internal.CategoryRelationUpdate().optional(),
    children: Internal.CategoryManyRelationUpdate().optional(),
  });
