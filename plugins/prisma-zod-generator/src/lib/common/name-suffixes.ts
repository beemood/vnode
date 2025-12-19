export const ExternalSchemaNames = {
  StringFilter: 'StringFilter',
  NumberFilter: 'NumberFilter',
  IntegerFilter: 'IntegerFilter',
  BooleanFilter: 'BooleanFilter',
  JsonFilter: 'JsonFilter',
  DateFilter: 'DateFilter',
  DateTimeFilter: 'DateTimeFilter',

  ArrayStringFilter: 'ArrayStringFilter',
  ArrayNumberFilter: 'ArrayNumberFilter',
  ArrayIntegerFilter: 'ArrayIntegerFilter',
  ArrayBooleanFilter: 'ArrayBooleanFilter',
  ArrayJsonFilter: 'ArrayJsonFilter',

  ArrayDateFilter: 'ArrayDateFilter',
  ArrayDateTimeFilter: 'ArrayDateTimeFilter',
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

  // parent:{ include, omit, select, where}

  OwnQuery: 'OwnQuery',
  // Each model should have such schema that will be used by a model that has many relation with this model
  // {
  //  distinct: ProductDistinct,
  //  select: ProductOwnProjection,
  //  orderBy:ProducOwnOrderBy,
  //  skip: number,
  //  take: number
  //  where:ProductOwnWhere
  //  },
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
  // All schemas of the model-field enums are suffixed by this such as `ProductDistinct = z.enum(['id', 'name', 'description'])`

  // All schemas of enum types in the prisma-schema are suffixed by this such as `StatusEnum = z.enum(["OPEN", "CLOSED", "IN_PROGRESS"])`
};

export const NameSuffixes = {
  ...MainNameSuffixes,
  ...InternalNameSuffixes,
};

export type InternalNameSuffixes = keyof typeof InternalNameSuffixes;

export type ExternalSchemaName = keyof typeof ExternalSchemaNames;

export type MainNameSuffix = keyof typeof MainNameSuffixes;

export type NameSuffix = keyof typeof NameSuffixes;
