import { errorMessage } from '@vnode/utils';
import { CreateCategory } from './create-category.js';

export const UpdateCategory = CreateCategory.clone()
  .partial()
  .refine(
    (value) => {
      try {
        return Object.keys(value).length > 0;
      } catch {
        return false;
      }
    },
    {
      error: errorMessage(
        `EmptyObjectError: The update input must have at least a property.`
      ),
    }
  );
