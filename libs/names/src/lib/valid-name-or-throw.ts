import {
  InvalidNameError,
  MinLengthError,
  NotAllowedError,
} from '@vnode/errors';

/**
 * Validate the given name.
 * The name mush
 * - contain `at least a letter`
 * - contain `only letters`, `dash`, `underscore`, and `space`
 * @param name string
 * @returns boolean
 */
export function validNameOrThrow(name: string): string {
  if (name.length < 3) {
    throw new MinLengthError(`The name must be at least 3 characters long.`);
  }

  if (!/^[a-zA-Z]/.test(name)) {
    throw new InvalidNameError(`The name must start with a letter.`);
  }

  if (!/[a-zA-Z]$/.test(name)) {
    throw new InvalidNameError(`The name must end with a letter.`);
  }

  if (!/[a-zA-Z]{1,}/.test(name)) {
    throw new InvalidNameError(
      `Name must contain at least one letter but found '${name}'.`
    );
  }

  if (!/^[a-zA-Z][a-zA-Z_-\s]{1,}$/.test(name)) {
    throw new InvalidNameError(
      `Name must contain only letters, dash, and underscore but found '${name}'.`
    );
  }

  if (name.includes('--')) {
    throw new NotAllowedError(`Double dash is not allowed in name.`);
  }
  if (name.includes('__')) {
    throw new NotAllowedError(`Double underscore is not allowed in name.`);
  }
  if (name.includes('  ')) {
    throw new NotAllowedError(`Double space is not allowed in name.`);
  }

  return name;
}
