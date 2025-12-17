import { InvalidNameError } from '@vnode/errors';

export function validateName(name: string): boolean {
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

  return true;
}
