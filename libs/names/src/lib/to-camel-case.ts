import { normalizeName } from './normalize-name.js';
import { upperCaseFirst } from './uppercase-first.js';

/**
 *
 * @param name name
 * @param normalizedName normalized kebab-case value
 * @returns camelCase string
 */
export function toCamelCase(name: string) {
  const normalizedName = normalizeName(name);
  const [first, ...rest] = normalizedName.split('-');
  return first + rest.map(upperCaseFirst).join('');
}
