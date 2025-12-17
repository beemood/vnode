export function definedOrThrow<T>(value: T | undefined | null): T {
  if (value != undefined) {
    return value;
  }

  throw new Error(`Not`);
}
