import { NumberSchemas, StringSchemas } from '@vnode/zod';
import z from 'zod';

export const CreateCategory = z.object({
  name: StringSchemas.short(),
  description: StringSchemas.string().optional(),
  parentId: NumberSchemas.integer().positive().optional(),
});
