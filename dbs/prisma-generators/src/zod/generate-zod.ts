import { DMMF } from '@prisma/generator-helper';
import { CreateSchemaPrinter } from './base-printers/create-schema-printer.js';
import { OwnCreateSchemaPrinter } from './base-printers/own-create-schema-printer.js';
import { UpdateSchemaPrinter } from './base-printers/update-schema-printer.js';
import { commonZodCode } from './common-code/common-code.js';
import { zodLogger as logger } from './zod.logger.js';

export function generateZod(datamodel: DMMF.Datamodel, project: string) {
  logger.debug(`Generating the ${project}'s schemas`);
  const models = datamodel.models;
  const enums = datamodel.enums;

  const printedCode: string[] = [];

  printedCode.push(commonZodCode);

  for (const e of enums) {
    printedCode.push(
      [
        `export const ${e.name}Schema = z.enum([${e.values
          .map((e) => `'${e.name}'`)
          .join(',')} ])`,
      ].join('\n')
    );
  }

  for (const printer of [
    OwnCreateSchemaPrinter,
    CreateSchemaPrinter,
    UpdateSchemaPrinter,
  ]) {
    logger.debug(`Generating ${printer.name}`);
    const generated = models
      .map((model) => new printer(datamodel, model).print())
      .join('\n\n');
    printedCode.push(generated);
  }

  return printedCode.join('\n');
}
