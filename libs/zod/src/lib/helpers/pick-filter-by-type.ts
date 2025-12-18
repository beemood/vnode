import { MismatchError } from '@vnode/errors';
import { PropertyTypes, type PropertyType } from '@vnode/types';
import type { ZodType } from 'zod';
import {
  arrayBooleanFilterSchema,
  booleanFilterSchema,
} from '../object-schemas/bool-filter-schema.js';
import {
  arrayIntegerFilterSchema,
  integerFilterSchema,
} from '../object-schemas/integer-filter-schema.js';
import { jsonFilterSchema } from '../object-schemas/json-filter-schema.js';
import {
  arrayNumberFilterSchema,
  numberFilterSchema,
} from '../object-schemas/number-filter-schema.js';
import {
  arrayStringFilterSchemea,
  stringFilterSchema,
} from '../object-schemas/string-filter-schema.js';

export function pickFilterByType(type: PropertyType): ZodType {
  switch (type) {
    case 'string': {
      return stringFilterSchema();
    }
    case 'number': {
      return numberFilterSchema();
    }
    case 'integer': {
      return integerFilterSchema();
    }
    case 'boolean': {
      return booleanFilterSchema();
    }

    case 'json': {
      return jsonFilterSchema();
    }
    case 'array-string': {
      return arrayStringFilterSchemea();
    }
    case 'array-number': {
      return arrayNumberFilterSchema();
    }
    case 'array-boolean': {
      return arrayBooleanFilterSchema();
    }
    case 'array-integer': {
      return arrayIntegerFilterSchema();
    }
    case 'array-json': {
      return arrayStringFilterSchemea();
    }

    case 'object':
    case 'array-object':
    default: {
      throw new MismatchError(
        `The property type, ${type}, does not match any of property types ${PropertyTypes} but not object or array-object.`
      );
    }
  }
}
