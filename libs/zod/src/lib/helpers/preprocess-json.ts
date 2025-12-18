import { parseJsonOrUndefined } from '@vnode/utils';
import { z, type ZodType } from 'zod';

export function jsonPreprocessror<T>(value: T) {
  if (typeof value === 'string') {
    return parseJsonOrUndefined(value);
  }
  return value;
}

export function preprocessJsonSchema(schema: ZodType) {
  return z.preprocess(jsonPreprocessror, schema);
}
