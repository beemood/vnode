import * as External from '@vnode/zod';
import z from 'zod';
import * as Internal from '../../internal/internal.js';
export const CategoryWhere = () =>
  z.object({
    id: External.integerFilterSchema().optional(),
    uuid: External.stringFilterSchema().optional(),
    createdAt: External.datetimeFilterSchema().optional(),
    updatedAt: External.datetimeFilterSchema().optional(),
    deletedAt: External.datetimeFilterSchema().optional(),
    name: External.stringFilterSchema().optional(),
    description: External.stringFilterSchema().optional(),
    status: Internal.StatusEnumFilter().optional(),
    statuses: Internal.StatusArrayEnumFilter().optional(),
    parent: Internal.CategoryOwnWhere().optional(),
    parentId: External.integerFilterSchema().optional(),
    children: Internal.CategoryManyRelationWhere().optional(),
  });
