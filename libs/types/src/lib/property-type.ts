import type { KeyOf } from './other-types.js';

export const PropertyTypes = {
  string: 'string',
  number: 'number',
  integer: 'integer',
  boolean: 'boolean',
  object: 'object',
  json: 'json',
  'array-string': 'array-string',
  'array-number': 'array-number',
  'array-boolean': 'array-boolean',
  'array-integer': 'array-integer',
  'array-object': 'array-object',
  'array-json': 'array-json',
};

export type PropertyType = KeyOf<typeof PropertyTypes>;
