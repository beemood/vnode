import { normalizeName } from './normalize-name.js';
import { upperCaseFirstLetter } from './uppercase-first.js';

/**
 * Transform the given {@link name} into `camelCase`
 * @param name name
 * @param normalizedName normalized kebab-case value
 * @returns `camelCase` string
 */
export function toCamelCase(name: string) {
  const normalizedName = normalizeName(name);
  const [first, ...rest] = normalizedName.split('-');
  return first + rest.map(upperCaseFirstLetter).join('');
}
