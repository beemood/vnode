import { ApiPropertyOptions } from '@nestjs/swagger';
import { DMMF } from '@prisma/generator-helper';
import { NotMatchedError } from '@vnode/errors';
import { PrismaScalarType } from '../types/prisma-scalar-types.js';
import { createDocumentation } from './create-documentation.js';

export function getApiPropertyOptions(
  model: DMMF.Model,
  field: DMMF.Field
): ApiPropertyOptions {
  const options: ApiPropertyOptions = {
    isArray: field.isList == true,
    required: field.isRequired == true,
    description: field.documentation + `\n${createDocumentation(model, field)}`,
  };

  switch (field.kind) {
    case 'object': {
      options.type = () => field.relationName;
      break;
    }
    case 'scalar': {
      switch (field.type as PrismaScalarType) {
        case 'Json':
        case 'String': {
          options.type = 'string';
          break;
        }
        case 'Boolean': {
          options.type = 'boolean';
          break;
        }
        case 'Int': {
          options.type = 'integer';
          break;
        }
        case 'Decimal':
        case 'Float':
        case 'Number': {
          options.type = 'number';
          break;
        }
        case 'DateTime':
        case 'Date': {
          options.type = 'string';
          options.format = 'datetime';
          break;
        }
      }
      break;
    }
    case 'enum': {
      options.enum = field.type as any;
      break;
    }
    case 'unsupported': {
      throw new NotMatchedError(
        `${field.name}'s type, ${field.type}, does not fint any swagger type`
      );
    }
  }

  return options;
}
