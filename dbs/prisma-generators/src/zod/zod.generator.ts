import helper from '@prisma/generator-helper';
import { writeTextFile } from '@vnode/fs';
import { stringOrThrow } from '@vnode/utils';
import { join } from 'path';
import { generateZod } from './generate-zod.js';
import { zodLogger } from './zod.logger.js';

helper.generatorHandler({
  onGenerate: async ({ dmmf, generator }) => {
    const project = stringOrThrow(generator.config.project, 'project');
    const output = stringOrThrow(generator.output?.value, 'output');

    zodLogger.debug(`project : ${project}`);
    zodLogger.debug(`output : ${output}`);

    const code = generateZod(dmmf.datamodel, project);
    await writeTextFile(join(output), code);
    zodLogger.debug(`Success`);
  },
  onManifest() {
    return {
      version: '0.0.1',
      prettyName: 'Zod Generator',
      defaultOutput: '../src/zod/zod.ts',
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
