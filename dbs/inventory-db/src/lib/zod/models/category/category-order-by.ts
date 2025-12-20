import z from 'zod';
import * as Internal from '../../internal/internal.js';
export const CategoryOrderBy = () =>
  z.object({
    id: z.enum(['asc', 'desc']).optional(),
    uuid: z.enum(['asc', 'desc']).optional(),
    createdAt: z.enum(['asc', 'desc']).optional(),
    updatedAt: z.enum(['asc', 'desc']).optional(),
    deletedAt: z.enum(['asc', 'desc']).optional(),
    name: z.enum(['asc', 'desc']).optional(),
    description: z.enum(['asc', 'desc']).optional(),
    status: z.enum(['asc', 'desc']).optional(),
    statuses: z.enum(['asc', 'desc']).optional(),
    parent: Internal.CategoryOwnOrderBy().optional(),
    parentId: z.enum(['asc', 'desc']).optional(),
    children: z.object({ _count: z.enum(['asc', 'desc']) }).optional(),
  });
