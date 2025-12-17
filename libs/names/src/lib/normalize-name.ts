import { isPascalCase } from './is-pascal-case.js';
import { isScreamingSnakeCase } from './is-snake-case.js';

/**
 * Normalize the given {@link name} transforming it into **kebab-case**
 * @param name name in any format such as camel, kebab, title, pascal...
 */
export function normalizeName(name: string) {
  if (isScreamingSnakeCase(name)) {
    name = name.toLowerCase();
  }

  if (isPascalCase(name)) {
    name = name.replace(/(?<!^)(?=[A-Z])/, '-').toLowerCase();
  }

  return name.replace(/[_\s,-]{1,}/g, '-').toLowerCase();
}
