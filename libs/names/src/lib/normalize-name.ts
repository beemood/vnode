import { isPascalCase } from './is-pascal-case.js';
import { isScreamingSnakeCase } from './is-snake-case.js';
import { validNameOrThrow } from './valid-name-or-throw.js';

/**
 * Normalize the given {@link name} transforming it into `kebab-case`. Also check the validation function {@link validNameOrThrow} for more information.
 * @param name name in any format such as camel, kebab, title, pascal...
 * @return `kebab-case` name
 */
export function normalizeName(name: string): string {
  name = validNameOrThrow(name);

  if (isScreamingSnakeCase(name)) {
    name = name.toLowerCase();
  }

  if (isPascalCase(name)) {
    name = name.replace(/(?<!^)(?=[A-Z])/, '-').toLowerCase();
  }

  return name.replace(/[_\s,-]{1,}/g, '-').toLowerCase();
}
