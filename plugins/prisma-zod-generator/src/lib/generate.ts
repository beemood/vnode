import helper from '@prisma/generator-helper';
import { RequiredError } from '@vnode/errors';
import { writeTextFile } from '@vnode/fs';
import { join } from 'path';
import { mainFilePath } from './common/main-file-path.js';
import { createInputSchema } from './printers/main-printers/create-input-schema.js';
import { internalSchemas } from './printers/main-printers/internal-schemas.js';

export function generate() {
  return helper.generatorHandler({
    onGenerate: async (options) => {
      const outputPath = options.generator.output?.value;

      if (!outputPath) {
        throw new RequiredError('The output parameter is required.');
      }
      const datamodel = options.dmmf.datamodel;
      const models = datamodel.models;

      // Write internal schemas
      {
        const content = internalSchemas(datamodel);
        const dirpath = join(outputPath, 'internal');
        const filepath = join(dirpath, 'internal.ts');
        await writeTextFile(filepath, content);
      }

      // Create input
      {
        for (const model of models) {
          const content = createInputSchema(model);
          const relativeFilePath = mainFilePath(model.name, 'Create');
          const filePath = join(outputPath, relativeFilePath);
          await writeTextFile(filePath, content);
        }
      }
    },

    onManifest: () => ({
      prettyName: 'Prisma zod schema generator',
      defaultOutput: '../src/lib/zod',
    }),
  });
}
