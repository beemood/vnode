export function isArray<T>(value: unknown): value is Array<T> {
  if (Array.isArray(value)) {
    return true;
  }

  return false;
}
