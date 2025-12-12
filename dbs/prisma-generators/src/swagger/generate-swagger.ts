import { DMMF } from '@prisma/generator-helper';
import { CreateDtoClassPrinter } from './class-printers/create-dto-class-printer.js';
import { IncludeDtoClassPrinter } from './class-printers/include-dto-class-printer.js';
import { OrderDtoClassPrinter } from './class-printers/order-dto-class-printer.js';
import { OwnCreateDtoClassPrinter } from './class-printers/own-create-dto-class-printer.js';
import { OwnOrderDtoClassPrinter } from './class-printers/own-order-dto-class-printer.js';
import { OwnProjectionDtoClassPrinter } from './class-printers/own-projection-dto-class-printer copy.js';
import { OwnReadDtoClassPrinter } from './class-printers/own-read-dto-class-printer.js';
import { OwnSelectDtoClassPrinter } from './class-printers/own-select-dto-class-printer.js';
import { OwnUpdateDtoClassPrinter } from './class-printers/own-update-dto-class-printer.js';
import { OwnWhereDtoClassPrinter } from './class-printers/own-where-dto-class-printer.js';
import { ProjectionDtoClassPrinter } from './class-printers/projection-dto-class-printer.js';
import { ReadDtoClassPrinter } from './class-printers/read-dto-class-printer.js';
import { SelectDtoClassPrinter } from './class-printers/select-dto-class-printer.js';
import { UpdateDtoClassPrinter } from './class-printers/update-dto-class-printer.js';
import { WhereDtoClassPrinter } from './class-printers/where-dto-class-printer.js';
import { commonSwaggerCode } from './common-code/common-code.js';
import { swaggerLogger as logger } from './swagger.logger.js';

export function generateSwagger(datamodel: DMMF.Datamodel, project: string) {
  logger.debug(`Generating the ${project}'s dtos`);
  const models = datamodel.models;

  const printedCode: string[] = [];

  printedCode.push(commonSwaggerCode);

  for (const printer of [
    OwnReadDtoClassPrinter,
    OwnCreateDtoClassPrinter,
    OwnUpdateDtoClassPrinter,
    ReadDtoClassPrinter,
    CreateDtoClassPrinter,
    UpdateDtoClassPrinter,
    OwnSelectDtoClassPrinter,
    SelectDtoClassPrinter,
    OwnWhereDtoClassPrinter,
    WhereDtoClassPrinter,
    IncludeDtoClassPrinter,
    OwnProjectionDtoClassPrinter,
    ProjectionDtoClassPrinter,
    OwnOrderDtoClassPrinter,
    OrderDtoClassPrinter,
  ]) {
    logger.debug(`Generating ${printer.name}`);
    const generated = models
      .map((model) => new printer(model).print())
      .join('\n\n');
    printedCode.push(generated);
  }

  return printedCode.join('\n');
}
