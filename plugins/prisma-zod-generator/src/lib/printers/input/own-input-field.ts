import { MismatchError } from '@vnode/errors';
import {
  getNumberFieldMetadata,
  getStringFiledMetadata,
} from '../../common/get-field-metadata.js';
import { isRequiredField } from '../../common/is-required-field.js';
import type { PrismaScalarType } from '../../common/prisma-scalar-type.js';
import { schemaName } from '../../common/schema-name.js';
import type { Field } from '../../prisma/types.js';

export function ownInputField(field: Field) {
  const validationSchemaParts: string[] = [];
  const schemaParts: string[] = [];

  const push = (part: string) => schemaParts.push(part);
  const pushValidation = (part: string) => validationSchemaParts.push(part);

  switch (field.kind) {
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          push(`z.string()`);

          const metadata = getStringFiledMetadata(field);

          if (metadata.min != undefined) {
            pushValidation(`.min(${metadata.min})`);
          }

          if (metadata.max != undefined) {
            pushValidation(`.max(${metadata.max})`);
          }

          break;
        }
        case 'Number':
        case 'Float':
        case 'Decimal': {
          push(`z.number()`);

          const metadata = getNumberFieldMetadata(field);

          if (metadata.min != undefined) {
            pushValidation(`.min(${metadata.min})`);
          }

          if (metadata.max != undefined) {
            pushValidation(`.max(${metadata.max})`);
          }
          break;
        }
        case 'Int':
        case 'Integer': {
          push(`z.int()`);

          const metadata = getNumberFieldMetadata(field);

          if (metadata.min != undefined) {
            pushValidation(`.min(${metadata.min})`);
          }

          if (metadata.max != undefined) {
            pushValidation(`.max(${metadata.max})`);
          }
          break;
        }
        case 'Boolean':
        case 'Bool': {
          push('z.boolean()');
          break;
        }
        case 'Json':
        case 'JSON': {
          push('z.json()');
          break;
        }
        case 'Date': {
          push('z.iso.date()');
          break;
        }
        case 'DateTime':
        case 'Datetime':
        case 'Timestamp': {
          push('z.iso.datetime()');
          break;
        }
      }

      break;
    }
    case 'enum': {
      push(schemaName(field.type, 'Enum') + '()');

      const metadata = getStringFiledMetadata(field);

      if (metadata.min != undefined) {
        pushValidation(`.min(${metadata.min})`);
      }

      if (metadata.max != undefined) {
        pushValidation(`.max(${metadata.max})`);
      }
      break;
    }
    case 'object':
    case 'unsupported':
    default: {
      throw new MismatchError(
        `The field kind, ${field.kind}, is not suppored in this context.`
      );
    }
  }

  if (field.isList == true) {
    push('.array()');
  }

  if (!isRequiredField(field)) {
    pushValidation('.optional()');
  }

  const schema = [schemaParts.join(''), validationSchemaParts.join('')].join(
    ''
  );

  return `${field.name}: ${schema}`;
}
