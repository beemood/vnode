export const DtoNameSuffixes = {
  ReadDto: 'ReadDto',
  CreateDto: 'CreateDto',
  UpdateDto: 'UpdateDto',
  WhereDto: 'WhereDto',
  SelectDto: 'SelectDto',
  OmitDto: 'OmitDto',
  IncludeDto: 'IncludeDto',
  DistinctDto: 'DistinctDto',
  OrderDto: 'OrderDto',
  QueryDto: 'QueryDto',
  ProjectionDto: 'ProjectionDto',

  OwnReadDto: 'OwnReadDto',
  OwnCreateDto: 'OwnCreateDto',
  OwnUpdateDto: 'OwnUpdateDto',
  OwnWhereDto: 'OwnWhereDto',
  OwnSelectDto: 'OwnSelectDto',
  OwnOmitDto: 'OwnOmitDto',
  OwnIncludeDto: 'OwnIncludeDto',
  OwnDistinctDto: 'OwnDistinctDto',
  OwnOrderDto: 'OwnOrderDto',
  OwnQueryDto: 'OwnQueryDto',
  OwnProjectionDto: 'OwnProjectionDto',
};

export type DtoNameSuffix = keyof typeof DtoNameSuffixes;

export const SchemaNameSuffixes = {
  ReadSchema: 'ReadSchema',
  CreateSchema: 'CreateSchema',
  UpdateSchema: 'UpdateSchema',
  WhereSchema: 'WhereSchema',
  SelectSchema: 'SelectSchema',
  OmitSchema: 'OmitSchema',
  IncludeSchema: 'IncludeSchema',
  DistinctSchema: 'DistinctSchema',
  OrderSchema: 'OrderSchema',
  QuerySchema: 'QuerySchema',
  ProjectionSchema: 'ProjectionSchema',
  OwnReadSchema: 'OwnReadSchema',
  OwnCreateSchema: 'OwnCreateSchema',
  OwnUpdateSchema: 'OwnUpdateSchema',
  OwnWhereSchema: 'OwnWhereSchema',
  OwnSelectSchema: 'OwnSelectSchema',
  OwnOmitSchema: 'OwnOmitSchema',
  OwnIncludeSchema: 'OwnIncludeSchema',
  OwnDistinctSchema: 'OwnDistinctSchema',
  OwnOrderSchema: 'OwnOrderSchema',
  OwnQuerySchema: 'OwnQuerySchema',
  OwnProjectionSchema: 'OwnProjectionSchema',
};

export type SchemaNameSuffix = keyof typeof SchemaNameSuffixes;
