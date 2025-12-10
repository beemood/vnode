import { DMMF } from '@prisma/generator-helper';
import { swaggerLogger } from './swagger.logger.js';

export function generateSwagger(datamodel: DMMF.Datamodel, project: string) {
  const models = datamodel.models;
  const enums = datamodel.enums;
  const classes: string[] = [];

  // Own dtos

  // Read dto: inclues all properties but hidden ones
  // Create dto: inputs
  // Update dto: optional inputs
  // Where Dto: All field queries
  // Select Dto: ALl fields selectc
  // Omit Dto: All fields omit
  // Include Dto: Relation Include
  // Order Dto: Order by
  // Projection Dto: select, omit, and inlucde
  // Query Dto: COmbine Where,

  swaggerLogger.debug(`project : ${project}`);
  swaggerLogger.debug(`models: ${models.map((e) => e.name).join(', ')} `);
  swaggerLogger.debug(`enums: ${enums.map((e) => e.name).join(', ')} `);

  return classes.join('\n\n');
}
