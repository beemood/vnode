import z from 'zod';
import * as Internal from '../../internal/internal.js';
export const CategoryCreate = ()=> z.object({
name: z.string(),
description: z.string().optional(),
status: Internal.StatusEnum(),
statuses: Internal.StatusEnum().array(),
parent: Internal.CategoryRelationCreate().optional(),
children: Internal.CategoryManyRelationCreate().optional()
})