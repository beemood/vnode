import { isString } from '@vnode/utils';
import type { Field } from '../prisma/types.js';

export type NumberFieldMetadata = {
  min?: number;
  max?: number;
  in?: number[];
  notIn?: number[];
};

export type StringFiledMetadata = {
  min?: number;
  max?: number;
  startsWith?: string;
  endsWith?: string;
  contains?: string;
  notContains?: string;
  in?: string[];
  notIn?: string[];
};

export function getNumberFieldMetadata(field: Field): NumberFieldMetadata {
  const doc = field.documentation;
  const metadata: NumberFieldMetadata = {};
  if (!isString(doc)) {
    return {};
  }

  {
    const matches = doc.match(/@min\((\d{1,})\)/);
    if (matches) {
      metadata.min = parseInt(matches[1]);
    }
  }
  {
    const matches = doc.match(/@max\((\d{1,})\)/);
    if (matches) {
      metadata.max = parseInt(matches[1]);
    }
  }
  {
    const matches = doc.match(/@notIn\((\[[\d,\s]+\])\)/);
    if (matches) {
      metadata.notIn = JSON.parse(matches[1]);
    }
  }
  {
    const matches = doc.match(/@in\((\[[\d,\s]+\])\)/);
    if (matches) {
      metadata.in = JSON.parse(matches[1]);
    }
  }

  return metadata;
}

export function getStringFiledMetadata(field: Field) {
  const doc = field.documentation;
  const metadata: StringFiledMetadata = {};
  if (!isString(doc)) {
    return {};
  }

  {
    const matches = doc.match(/@min\((\d{1,})\)/);
    if (matches) {
      metadata.min = parseInt(matches[1]);
    }
  }
  {
    const matches = doc.match(/@max\((\d{1,})\)/);
    if (matches) {
      metadata.max = parseInt(matches[1]);
    }
  }

  {
    const matches = doc.match(/@startsWith\((\w{1,})\)/);
    if (matches) {
      metadata.startsWith = matches[1];
    }
  }
  {
    const matches = doc.match(/@endsWith\((\w{1,})\)/);
    if (matches) {
      metadata.endsWith = matches[1];
    }
  }
  {
    const matches = doc.match(/@contains\((\w{1,})\)/);

    if (matches) {
      metadata.contains = matches[1];
    }
  }
  {
    const matches = doc.match(/@notContains\((\w{1,})\)/);
    if (matches) {
      metadata.notContains = matches[1];
    }
  }

  {
    const matches = doc.match(/@notIn\((\[[\w,\s]+\])\)/);
    if (matches) {
      metadata.notIn = JSON.parse(matches[1]);
    }
  }
  {
    const matches = doc.match(/@in\((\[[\w,\s]+\])\)/);
    if (matches) {
      metadata.in = JSON.parse(matches[1]);
    }
  }

  return metadata;
}
