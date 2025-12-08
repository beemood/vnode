import { DMMF } from '@prisma/generator-helper';
import { zodLogger } from './zod.logger.js';

export function generateZod(datamodel: DMMF.Datamodel, project: string) {
  const models = datamodel.models;
  const enums = datamodel.enums;
  zodLogger.debug(`project : ${project}`);
  zodLogger.debug(`models: ${models.map((e) => e.name).join(', ')} `);
  zodLogger.debug(`enums: ${enums.map((e) => e.name).join(', ')} `);

  return `// Zod: Generated`;
}
