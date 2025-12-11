import '@prisma/generator-helper';
import type { Field, Model } from '../../types/prisma.js';
import { DtoClassPrinter } from './dto-class-printer.js';

export abstract class DtoProjectionClassPrinter extends DtoClassPrinter {
  constructor(model: Model) {
    super(model);
  }

  override map(field: Field): Field {
    if (field.relationName != undefined) {
      return { ...field };
    }

    return { ...field, type: 'Boolean', isList: false, default: undefined };
  }
}
