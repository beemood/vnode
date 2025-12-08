import { DMMF } from '@prisma/generator-helper';
import { swaggerLogger } from './swagger-logger.js';

export function generateSwagger(datamodel: DMMF.Datamodel, project: string) {
  const models = datamodel.models;
  const enums = datamodel.enums;
  swaggerLogger.debug(`project : ${project}`);
  swaggerLogger.debug(`models: ${models.map((e) => e.name).join(', ')} `);
  swaggerLogger.debug(`enums: ${enums.map((e) => e.name).join(', ')} `);

  return `// Swagger: Generated`;
}
