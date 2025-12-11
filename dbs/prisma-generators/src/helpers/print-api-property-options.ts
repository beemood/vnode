import { ApiPropertyOptions } from '@nestjs/swagger';
import { DMMF } from '@prisma/generator-helper';
import { NotSupporedError } from '@vnode/errors';
import { PrismaScalarType } from '../types/prisma.js';
import { createDocumentation } from './create-documentation.js';
import { isRequiredField } from './field-type-checkers.js';

export function printApiPropertyOptions(
  model: DMMF.Model,
  field: DMMF.Field,
  dtoNameSuffix: string
) {
  const options: string[] = [];

  const setOption = (key: keyof ApiPropertyOptions, value: string) => {
    options.push(`${key}: ${value}`);
  };

  if (field.isList) {
    setOption('isArray', 'true');
  }

  if (!isRequiredField(field)) {
    setOption('required', 'false');
  }

  switch (field.kind) {
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'String': {
          setOption('type', "'string'");
          break;
        }
        case 'Boolean': {
          setOption('type', "'boolean'");
          break;
        }
        case 'Float':
        case 'Number':
        case 'Decimal':
        case 'Int': {
          setOption('type', "'number'");
          break;
        }
        case 'DateTime':
        case 'Date': {
          setOption('type', "'string'");
          setOption('format', "'datetime'");
          break;
        }
        case 'Json': {
          setOption('type', "'string'");
          break;
        }
      }
      break;
    }
    case 'enum': {
      setOption('enum', `P.${field.type}`);
      break;
    }
    case 'object': {
      setOption('type', `()=>${field.type}${dtoNameSuffix}`);
      break;
    }
    case 'unsupported': {
      throw new NotSupporedError(
        `${field.name}'s type, ${field.type}, is not supported`
      );
    }

    default: {
      throw new NotSupporedError(
        `${field.name}'s type, ${field.type}, is not supported`
      );
    }
  }

  setOption('description', `'${createDocumentation(model, field)}'`);

  return `{ ${options} }`;
}
