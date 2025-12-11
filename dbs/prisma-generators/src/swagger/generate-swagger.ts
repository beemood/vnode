import { DMMF } from '@prisma/generator-helper';
import { ImportPrinter } from '@vnode/ts-printer';
import { CreateDtoClassPrinter } from './class-printers/create-dto-class-printer.js';
import { OwnCreateDtoClassPrinter } from './class-printers/own-create-dto-class-printer.js';
import { OwnReadDtoClassPrinter } from './class-printers/own-read-dto-class-printer.js';
import { OwnUpdateDtoClassPrinter } from './class-printers/own-update-dto-class-printer.js';
import { ReadDtoClassPrinter } from './class-printers/read-dto-class-printer.js';
import { UpdateDtoClassPrinter } from './class-printers/update-dto-class-printer.js';
import { swaggerLogger } from './swagger.logger.js';

export function generateSwagger(datamodel: DMMF.Datamodel, project: string) {
  const models = datamodel.models;
  const enums = datamodel.enums;
  const printedCode: string[] = [];

  // Own dtos

  // Read dto: inclues all properties but hidden ones
  // Create dto: inputs
  // Update dto: optional inputs
  // Select Dto: ALl fields selectc
  // Omit Dto: All fields omit

  // Where Dto: All field queries

  // Include Dto: Relation Include
  // Order Dto: Order by
  // Projection Dto: select, omit, and inlucde
  // Query Dto: COmbine Where,

  printedCode.push(
    new ImportPrinter({
      source: '@nestjs/swagger',
      items: ['ApiProperty'],
    }).print()
  );

  printedCode.push(
    new ImportPrinter({
      source: '../prisma/client.js',
      importAs: 'P',
    }).print()
  );

  for (const printer of [
    OwnReadDtoClassPrinter,
    OwnCreateDtoClassPrinter,
    OwnUpdateDtoClassPrinter,
    ReadDtoClassPrinter,
    CreateDtoClassPrinter,
    UpdateDtoClassPrinter,
  ]) {
    const generated = models
      .map((model) => new printer(model).print())
      .join('\n\n');
    printedCode.push(generated);
  }

  swaggerLogger.debug(`project : ${project}`);
  swaggerLogger.debug(`models: ${models.map((e) => e.name).join(', ')} `);
  swaggerLogger.debug(`enums: ${enums.map((e) => e.name).join(', ')} `);

  return printedCode.join('\n\n');
}
