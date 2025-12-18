export const NameSuffixes = {
  OwnCreate: 'OwnCreate',
  Create: 'Create',
  RelationCreate: 'RelationCreate',
  ManyRelationCreate: 'ManyRelationCreate',

  OwnUpdate: 'OwnUpdate',
  Update: 'Update',
  RelationUpdate: 'RelationUpdate',
  ManyRelationUpdate: 'ManyRelationUpdate',

  OwnProjection: 'OwnProjection',
  Projection: 'Projection',

  // parent:{ include, omit, select, where}
  RelationProjection: 'RelationProjection',

  // Each model should have such schema that will be used by a model that has many relation with this model
  // {
  //  distinct: ProductDistinct,
  //  select: ProductOwnProjection,
  //  orderBy:ProducOwnOrderBy,
  //  skip: number,
  //  take: number
  //  where:ProductOwnWhere
  //  },
  ManyRelationProjection: 'ManyRelationProjection',

  OwnOrderBy: 'OwnOrderBy',

  OrderBy: 'OrderBy',

  // All schemas of the model-field enums are suffixed by this such as `ProductDistinct = z.enum(['id', 'name', 'description'])`
  Distinct: 'Distinct',

  // All schemas of enum types in the prisma-schema are suffixed by this such as `StatusEnum = z.enum(["OPEN", "CLOSED", "IN_PROGRESS"])`
  Enum: 'Enum',
};

export type NameSuffix = keyof typeof NameSuffixes;
