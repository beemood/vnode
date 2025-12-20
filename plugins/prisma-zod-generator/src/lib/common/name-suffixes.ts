export const ExternalSchemaNames = {
  stringFilterSchema: 'stringFilterSchema',
  numberFilterSchema: 'numberFilterSchema',
  integerFilterSchema: 'integerFilterSchema',
  booleanFilterSchema: 'booleanFilterSchema',
  jsonFilterSchema: 'jsonFilterSchema',
  dateFilterSchema: 'dateFilterSchema',
  datetimeFilterSchema: 'datetimeFilterSchema',
  arrayStringFilterSchema: 'arrayStringFilterSchema',
  arrayNumberFilterSchema: 'arrayNumberFilterSchema',
  arrayIntegerFilterSchema: 'arrayIntegerFilterSchema',
  arrayBooleanFilterSchema: 'arrayBooleanFilterSchema',
  arrayJsonFilterSchema: 'arrayJsonFilterSchema',
  arrayDateFilterSchema: 'arrayDateFilterSchema',
  arrayDatetimeFilterSchema: 'arrayDatetimeFilterSchema',
};

export const InternalNameSuffixes = {
  OwnCreate: 'OwnCreate',
  OwnUpdate: 'OwnUpdate',
  OwnProjection: 'OwnProjection',
  OwnOrderBy: 'OwnOrderBy',
  OwnWhere: 'OwnWhere',
  RelationCreate: 'RelationCreate',
  ManyRelationCreate: 'ManyRelationCreate',

  RelationUpdate: 'RelationUpdate',
  ManyRelationUpdate: 'ManyRelationUpdate',
  ManyRelationWhere: 'ManyRelationWhere',

  // parent:{ include, omit, select, where}

  OwnQuery: 'OwnQuery',
  OwnManyQuery: 'OwnManyQuery',

  Distinct: 'Distinct',

  Enum: 'Enum',

  EnumFilter: 'EnumFilter',
  ArrayEnumFilter: 'ArrayEnumFilter',
};

export const MainNameSuffixes = {
  Create: 'Create',
  Update: 'Update',
  Projection: 'Projection',
  OrderBy: 'OrderBy',
  Where: 'Where',
  Query: 'Query',
  QueryMany: 'QueryMany',
  Distinct: 'Distinct',
};

export const NameSuffixes = {
  ...MainNameSuffixes,
  ...InternalNameSuffixes,
};

export type InternalNameSuffixes = keyof typeof InternalNameSuffixes;

export type ExternalSchemaName = keyof typeof ExternalSchemaNames;

export type MainNameSuffix = keyof typeof MainNameSuffixes;

export type NameSuffix = keyof typeof NameSuffixes;
