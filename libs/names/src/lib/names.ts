import { normalizeName } from './normalize-name.js';
import { toCamelCase } from './to-camel-case.js';
import { upperCaseFirstLetter } from './uppercase-first.js';

export type Names = {
  /**
   * PascalCase
   */
  pascal: string;

  /**
   * camelCase
   */
  camel: string;

  /**
   * snake_case
   */
  snake: string;

  /**
   * kebab-case
   */
  kebab: string;

  /**
   * SCREAMING_SNAKE_CASE
   */
  screamingSnake: string;

  /**
   * Title Case
   */
  title: string;

  /**
   * Sentence case
   */
  sentence: string;

  /**
   * dot.case
   */
  dot: string;
};

/**
 * Create name variants of the given {@link name}
 *
 * @param name string
 * @returns - {@link Names}
 */
export function names(name: string): Names {
  const kebab = normalizeName(name);
  const camel = toCamelCase(kebab);
  const pascal = upperCaseFirstLetter(camel);
  const screamingSnake = kebab.replace(/-/g, '_').toUpperCase();
  const sentence = upperCaseFirstLetter(kebab.replace(/-/g, ' '));
  const title = kebab.split('-').map(upperCaseFirstLetter).join(' ');
  const snake = kebab.replace(/-/g, '_');
  const dot = kebab.replace(/-/g, '.');

  return {
    camel,
    pascal,
    kebab,
    screamingSnake,
    sentence,
    snake,
    title,
    dot,
  };
}
