import { DMMF } from '@prisma/generator-helper';
import { NotSupporedError } from '@vnode/errors';
import { PrismaScalarType } from 'src/types/prisma.js';
import { isRequiredField } from './field-type-checkers.js';

export function getSchemaType(
  datamodel: DMMF.Datamodel,
  field: DMMF.Field,
  schemaTypeSuffix: string
): string {
  const parts: string[] = [];

  switch (field.kind) {
    case 'object': {
      parts.push(`${field.type}${schemaTypeSuffix}.clone()`);
      break;
    }
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          parts.push('z.string()');
          break;
        }
        case 'Boolean': {
          parts.push('z.coerce.boolean()');
          break;
        }
        case 'Int': {
          parts.push('z.coerce.number().int()');
          break;
        }
        case 'Number':
        case 'Decimal':
        case 'Float': {
          parts.push('z.coerce.number()');
          break;
        }
        case 'DateTime':
        case 'Date': {
          parts.push('z.iso.datetime()');
          break;
        }
        case 'Json': {
          parts.push('z.any()');
          break;
        }
        default: {
          throw new NotSupporedError(`${field.name}'s kind is not supported`);
        }
      }
      break;
    }
    case 'enum': {
      const found = datamodel.enums.find((e) => e.name === field.type);
      parts.push(
        `z.enum([${found?.values.map((f) => `'${f.name}'`).join(', ')}])`
      );
      break;
    }
    case 'unsupported': {
      throw new NotSupporedError(`${field.name}'s kind is not supported`);
    }
  }

  if (field.isList) {
    parts.push('.array()');
  }

  if (!isRequiredField(field)) {
    parts.push('.optional()');
  }

  return parts.join('');
}
