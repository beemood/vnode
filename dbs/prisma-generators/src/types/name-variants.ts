export type DtoNameSuffixes = {
  ReadDto: string;
  CreateDto: string;
  UpdateDto: string;
  WhereDto: string;
  SelectDto: string;
  OmitDto: string;
  IncludeDto: string;
  DistinctDto: string;
  OrderDto: string;
  QueryDto: string;
  ProjectionDto: string;

  OwnReadDto: string;
  OwnCreateDto: string;
  OwnUpdateDto: string;
  OwnWhereDto: string;
  OwnSelectDto: string;
  OwnOmitDto: string;
  OwnIncludeDto: string;
  OwnDistinctDto: string;
  OwnOrderDto: string;
  OwnQueryDto: string;
  OwnProjectionDto: string;
};

export type DtoNameSuffix = keyof DtoNameSuffixes;

export type DtoNames = {
  readDto: string;
  createDto: string;
  updateDto: string;
  whereDto: string;
  selectDto: string;
  omitDto: string;
  includeDto: string;
  distinctDto: string;
  orderDto: string;
  queryDto: string;
  projectionDto: string;

  ownReadDto: string;
  ownCreateDto: string;
  ownUpdateDto: string;
  ownWhereDto: string;
  ownSelectDto: string;
  ownOmitDto: string;
  ownIncludeDto: string;
  ownDistinctDto: string;
  ownOrderDto: string;
  ownQueryDto: string;
  ownProjectionDto: string;
};

export type DtoName = keyof DtoNames;

export type SchemaNameSuffixes = {
  ReadSchema: string;
  CreateSchema: string;
  UpdateSchema: string;
  WhereSchema: string;
  SelectSchema: string;
  OmitSchema: string;
  IncludeSchema: string;
  DistinctSchema: string;
  OrderSchema: string;
  QuerySchema: string;
  ProjectionSchema: string;

  OwnReadSchema: string;
  OwnCreateSchema: string;
  OwnUpdateSchema: string;
  OwnWhereSchema: string;
  OwnSelectSchema: string;
  OwnOmitSchema: string;
  OwnIncludeSchema: string;
  OwnDistinctSchema: string;
  OwnOrderSchema: string;
  OwnQuerySchema: string;
  OwnProjectionSchema: string;
};

export type SchemaNameSuffix = keyof SchemaNameSuffixes;

export type SchemaNames = {
  readSchema: string;
  createSchema: string;
  updateSchema: string;
  whereSchema: string;
  selectSchema: string;
  omitSchema: string;
  includeSchema: string;
  distinctSchema: string;
  orderSchema: string;
  querySchema: string;
  projectionSchema: string;

  ownReadSchema: string;
  ownCreateSchema: string;
  ownUpdateSchema: string;
  ownWhereSchema: string;
  ownSelectSchema: string;
  ownOmitSchema: string;
  ownIncludeSchema: string;
  ownDistinctSchema: string;
  ownOrderSchema: string;
  ownQuerySchema: string;
  ownProjectionSchema: string;
};

export type SchemaName = keyof SchemaNames;

export type SchemaTypeNames = {
  readSchemaType: string;
  createSchemaType: string;
  updateSchemaType: string;
  whereSchemaType: string;
  selectSchemaType: string;
  omitSchemaType: string;
  includeSchemaType: string;
  distinctSchemaType: string;
  orderSchemaType: string;
  querySchemaType: string;
  projectionSchemaType: string;

  ownReadSchemaType: string;
  ownCreateSchemaType: string;
  ownUpdateSchemaType: string;
  ownWhereSchemaType: string;
  ownSelectSchemaType: string;
  ownOmitSchemaType: string;
  ownIncludeSchemaType: string;
  ownDistinctSchemaType: string;
  ownOrderSchemaType: string;
  ownQuerySchemaType: string;
  ownProjectionSchemaType: string;
};

export type SchemaTypeName = keyof SchemaTypeNames;

// export function dtoNames(modelName: string): DtoNames {
//   return {
//     readDto: `Read${modelName}Dto`,
//     createDto: `Create${modelName}Dto`,
//     updateDto: `Update${modelName}Dto`,
//     whereDto: `Where${modelName}Dto`,
//     selectDto: `Select${modelName}Dto`,
//     omitDto: `Omit${modelName}Dto`,
//     includeDto: `Include${modelName}Dto`,
//     distinctDto: `Distinct${modelName}Dto`,
//     orderDto: `Order${modelName}Dto`,
//     queryDto: `Query${modelName}Dto`,
//     projectionDto: `Projection${modelName}Dto`,

//     ownReadDto: `OwnRead${modelName}Dto`,
//     ownCreateDto: `OwnCreate${modelName}Dto`,
//     ownUpdateDto: `OwnUpdate${modelName}Dto`,
//     ownWhereDto: `OwnWhere${modelName}Dto`,
//     ownSelectDto: `OwnSelect${modelName}Dto`,
//     ownOmitDto: `OwnOmit${modelName}Dto`,
//     ownIncludeDto: `OwnInclude${modelName}Dto`,
//     ownDistinctDto: `OwnDistinct${modelName}Dto`,
//     ownOrderDto: `OwnOrder${modelName}Dto`,
//     ownQueryDto: `OwnQuery${modelName}Dto`,
//     ownProjectionDto: `OwnProjection${modelName}Dto`,
//   };
// }

export function schemaNames(modelName: string): SchemaNames {
  return {
    readSchema: `Read${modelName}Schema`,
    createSchema: `Create${modelName}Schema`,
    updateSchema: `Update${modelName}Schema`,
    whereSchema: `Where${modelName}Schema`,
    selectSchema: `Select${modelName}Schema`,
    omitSchema: `Omit${modelName}Schema`,
    includeSchema: `Include${modelName}Schema`,
    distinctSchema: `Distinct${modelName}Schema`,
    orderSchema: `Order${modelName}Schema`,
    querySchema: `Query${modelName}Schema`,
    projectionSchema: `Projection${modelName}Schema`,

    ownReadSchema: `OwnRead${modelName}Schema`,
    ownCreateSchema: `OwnCreate${modelName}Schema`,
    ownUpdateSchema: `OwnUpdate${modelName}Schema`,
    ownWhereSchema: `OwnWhere${modelName}Schema`,
    ownSelectSchema: `OwnSelect${modelName}Schema`,
    ownOmitSchema: `OwnOmit${modelName}Schema`,
    ownIncludeSchema: `OwnInclude${modelName}Schema`,
    ownDistinctSchema: `OwnDistinct${modelName}Schema`,
    ownOrderSchema: `OwnOrder${modelName}Schema`,
    ownQuerySchema: `OwnQuery${modelName}Schema`,
    ownProjectionSchema: `OwnProjection${modelName}Schema`,
  };
}

export function schemaTypeNames(modelName: string): SchemaTypeNames {
  return {
    readSchemaType: `Read${modelName}Type`,
    createSchemaType: `Create${modelName}Type`,
    updateSchemaType: `Update${modelName}Type`,
    whereSchemaType: `Where${modelName}Type`,
    selectSchemaType: `Select${modelName}Type`,
    omitSchemaType: `Omit${modelName}Type`,
    includeSchemaType: `Include${modelName}Type`,
    distinctSchemaType: `Distinct${modelName}Type`,
    orderSchemaType: `Order${modelName}Type`,
    querySchemaType: `Query${modelName}Type`,
    projectionSchemaType: `Projection${modelName}Type`,

    ownReadSchemaType: `OwnRead${modelName}Type`,
    ownCreateSchemaType: `OwnCreate${modelName}Type`,
    ownUpdateSchemaType: `OwnUpdate${modelName}Type`,
    ownWhereSchemaType: `OwnWhere${modelName}Type`,
    ownSelectSchemaType: `OwnSelect${modelName}Type`,
    ownOmitSchemaType: `OwnOmit${modelName}Type`,
    ownIncludeSchemaType: `OwnInclude${modelName}Type`,
    ownDistinctSchemaType: `OwnDistinct${modelName}Type`,
    ownOrderSchemaType: `OwnOrder${modelName}Type`,
    ownQuerySchemaType: `OwnQuery${modelName}Type`,
    ownProjectionSchemaType: `OwnProjection${modelName}Type`,
  };
}
