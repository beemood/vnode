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

export function getNumberFieldMetadata(field: Field) {
  const doc = field.documentation;
  const metadata: NumberFieldMetadata = {};
  if (!isString(doc)) {
    return {};
  }

  {
    const matches = doc.match(/@min\(\d\)/);
    if (matches) {
      metadata.min = parseInt(matches[1]);
    }
  }
  {
    const matches = doc.match(/@max\(\d\)/);
    if (matches) {
      metadata.max = parseInt(matches[1]);
    }
  }
  {
    const matches = doc.match(/@notIn\(\[\d{1,}\]\)/);
    if (matches) {
      metadata.notIn = JSON.parse(matches[1]);
    }
  }
  {
    const matches = doc.match(/@in\(\[\d{1,}\]\)/);
    if (matches) {
      metadata.in = JSON.parse(matches[1]);
    }
  }

  return {};
}

export function getStringFiledMetadata(field: Field) {
  const doc = field.documentation;
  const metadata: StringFiledMetadata = {};
  if (!isString(doc)) {
    return {};
  }

  {
    const matches = doc.match(/@startsWith\(\d\)/);
    if (matches) {
      metadata.startsWith = matches[1];
    }
  }
  {
    const matches = doc.match(/@endsWith\(\d\)/);
    if (matches) {
      metadata.endsWith = matches[1];
    }
  }
  {
    const matches = doc.match(/@contains\(\d\)/);

    if (matches) {
      metadata.contains = matches[1];
    }
  }
  {
    const matches = doc.match(/@notContains\(\d\)/);
    if (matches) {
      metadata.notContains = matches[1];
    }
  }

  {
    const matches = doc.match(/@notIn\(\[\w{1,}\]\)/);
    if (matches) {
      metadata.notIn = JSON.parse(matches[1]);
    }
  }
  {
    const matches = doc.match(/@in\(\[\w{1,}\]\)/);
    if (matches) {
      metadata.in = JSON.parse(matches[1]);
    }
  }

  return metadata;
}
