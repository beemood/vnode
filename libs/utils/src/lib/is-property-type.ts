import type { PropertyType } from '@vnode/types';
import { PropertyTypes } from '@vnode/types';

export function isPropertyType(type: unknown): type is PropertyType {
  if (PropertyTypes[type as PropertyType] != undefined) {
    return true;
  }

  return false;
}
