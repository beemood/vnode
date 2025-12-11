import helper from '@prisma/generator-helper';
import { writeTextFile } from '@vnode/fs';
import { stringOrThrow } from '@vnode/utils';
import { join } from 'path';
import { generateSwagger } from './generate-swagger.js';
import { swaggerLogger as logger } from './swagger.logger.js';

helper.generatorHandler({
  onGenerate: async ({ dmmf, generator }) => {
    const project = stringOrThrow(generator.config.project, 'project');
    const output = stringOrThrow(generator.output?.value, 'output');

    logger.debug(`Generator Options:  project: ${generator.config.project}`);
    logger.debug(`Generator Options:  output:  ${generator.output?.value}`);

    const code = generateSwagger(dmmf.datamodel, project);
    await writeTextFile(join(output), code);
  },
  onManifest() {
    return {
      version: '0.0.1',
      prettyName: 'Swagger Generator',
      defaultOutput: '../src/swagger/swagger.ts',
      config: {
        project: {
          type: 'string',
          description: 'Prisma project name such as @vnode/todo-db',
          required: true,
        },
      },
    };
  },
});
