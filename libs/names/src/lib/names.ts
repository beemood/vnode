import { normalizeName } from './normalize-name.js';
import { toCamelCase } from './to-camel-case.js';
import { upperCaseFirst } from './uppercase-first.js';

export type Names = {
  pascal: string; // PascalCase
  camel: string; // camelCase
  snake: string; // snake_case
  kebab: string; // kebab-case
  screamingSnake: string; // SNAKE_CASE
  title: string; // Title Case
  sentence: string; // Sentence case
  dotCase: string; // dot.case
};

/**
 * Create all name variants of the given {@link name}
 * @param name non-empty string
 * @returns - {@link Names}
 */
export function names(name: string): Names {
  const kebab = normalizeName(name);
  const camel = toCamelCase(kebab);
  const pascal = upperCaseFirst(camel);
  const screamingSnake = kebab.replace(/-/g, '_').toUpperCase();
  const sentence = upperCaseFirst(kebab.replace(/-/g, ' '));
  const title = kebab.split('-').map(upperCaseFirst).join(' ');
  const snake = kebab.replace(/-/g, '_');
  const dotCase = kebab.replace(/-/g, '.');

  return {
    camel,
    pascal,
    kebab,
    screamingSnake,
    sentence,
    snake,
    title,
    dotCase,
  };
}
