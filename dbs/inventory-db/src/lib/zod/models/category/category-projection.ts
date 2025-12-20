import z from 'zod';
import * as Internal from '../../internal/internal.js';
export const CategoryProjection = () =>
  z.object({
    id: z.boolean().optional(),
    uuid: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    status: z.boolean().optional(),
    statuses: z.boolean().optional(),
    parent: Internal.CategoryOwnQuery().optional(),
    parentId: z.boolean().optional(),
    children: Internal.CategoryOwnManyQuery().optional(),
  });
