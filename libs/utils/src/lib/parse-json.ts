import { InvalidJsonError } from '@vnode/errors';
import type { ParsedJsonValue } from '@vnode/types';

export function parseJsonOrUndefined<T extends ParsedJsonValue>(
  value: string
): T | undefined {
  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
}

export function parseJsonOrNull<T extends ParsedJsonValue>(
  value: string
): T | null {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

export function parseJsonOrDefault<T extends ParsedJsonValue>(
  value: string,
  defaultValue: T
): T {
  try {
    return JSON.parse(value);
  } catch {
    return defaultValue;
  }
}

export function parseJsonOrThrow<T>(value: string): T {
  try {
    return JSON.parse(value);
  } catch {
    throw new InvalidJsonError(`The value, "${value}", is not a valid json.`);
  }
}
