/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * A type guard to check if a value is a non-null, non-array,
 * non-function object (i.e., a true key-value pair object).
 * @param value The value to check.
 * @returns true if the value is an object, false otherwise.
 */
export function isPlainObject(value: any): value is Record<string, any> {
  // 1. Check if the typeof is 'object' (this will include null and arrays)
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  // 2. Check if it's an Array (since Array is an object but usually not what's intended)
  if (Array.isArray(value)) {
    return false;
  }

  // 3. Check if the value is a Function (since typeof returns 'object' for certain environments/quirks)
  if (typeof value === 'function') {
    return false;
  }

  // 4. (Optional but recommended) Check if it's a "plain" object
  //    created by {} or new Object(), by checking its prototype.
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}
