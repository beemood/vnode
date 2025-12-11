import type { DMMF } from '@prisma/generator-helper';

export type PrismaScalarTypes = {
  String: 'String';
  Boolean: 'Boolean';
  Int: 'Int';
  Number: 'Number';
  Float: 'Float';
  Decimal: 'Decimal';
  Date: 'Date';
  DateTime: 'DateTime';
  Json: 'Json';
};

export type PrismaScalarType = keyof PrismaScalarTypes;

export type Model = DMMF.Model;
export type Field = DMMF.Field;
export type Datamodel = DMMF.Datamodel;
export type EnumValue = DMMF.EnumValue;
export type FieldDefault = DMMF.FieldDefault;
