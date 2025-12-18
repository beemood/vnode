import { MismatchError } from '@vnode/errors';
import { getStringFiledMetadata } from '../common/get-field-metadata.js';
import { isRequiredField } from '../common/is-required-field.js';
import { NameSuffixes } from '../common/name-suffixes.js';
import type { PrismaScalarType } from '../common/prisma-scalar-type.js';
import type { Field } from '../prisma/types.js';

export function ownCreateField(field: Field) {
  const schemaParts: string[] = [];

  const push = (part: string) => schemaParts.push(part);

  switch (field.kind) {
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          push(`z.string()`);

          const metadata = getStringFiledMetadata(field);

          if (metadata.min != undefined) {
            push(`.min(${metadata.min})`);
          }

          if (metadata.max != undefined) {
            push(`.max(${metadata.max})`);
          }

          break;
        }
        case 'Number':
        case 'Float':
        case 'Decimal': {
          push(`z.coerce.number()`);

          const metadata = getStringFiledMetadata(field);

          if (metadata.min != undefined) {
            push(`.min(${metadata.min})`);
          }

          if (metadata.max != undefined) {
            push(`.max(${metadata.max})`);
          }
          break;
        }
        case 'Int':
        case 'Integer': {
          push(`z.coerce.number().int()`);

          const metadata = getStringFiledMetadata(field);

          if (metadata.min != undefined) {
            push(`.min(${metadata.min})`);
          }

          if (metadata.max != undefined) {
            push(`.max(${metadata.max})`);
          }
          break;
        }
        case 'Boolean':
        case 'Bool': {
          push('z.coerce.boolean()');
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
      push(`${field.type}${NameSuffixes.Enum}`);
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
    push('.optional()');
  }

  return schemaParts.join('');
}
