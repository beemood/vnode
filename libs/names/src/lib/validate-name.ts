import { InvalidNameError } from '@vnode/errors';

/**
 * Validate the given name that contains at least a letter, and contains only letters, dash, underscore, and space. Also, no dobule dash, underscore, and space allowed.
 *
 * @param name string
 * @returns boolean
 */
export function validateName(name: string): string {
  if (!/[a-zA-Z]{1,}/.test(name)) {
    throw new InvalidNameError(
      `Name must contain at least one letter but found ${name}.`
    );
  }

  if (!/^[a-zA-Z][a-zA-Z_-\s]{1,}$/.test(name)) {
    throw new InvalidNameError(
      `Name must contain only letters, dash, and underscore but found ${name}.`
    );
  }

  if (/--|__|\s{2}/.test(name)) {
    throw new InvalidNameError(
      `Name must not have following dash, underscore, or space but found ${name}.`
    );
  }

  return name;
}
