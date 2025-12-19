import helper from '@prisma/generator-helper';
import { RequiredError } from '@vnode/errors';
import { writeTextFile } from '@vnode/fs';
import { join } from 'path';
import { internalSchemas } from './printers/internal-schemas.js';

export function generate() {
  return helper.generatorHandler({
    onGenerate: async (options) => {
      const outputPath = options.generator.output?.value;

      if (!outputPath) {
        throw new RequiredError('The output parameter is required.');
      }
      const datamodel = options.dmmf.datamodel;

      // Write internal schemas
      {
        const content = internalSchemas(datamodel);
        const dirpath = join(outputPath, 'internal');
        const filepath = join(dirpath, 'internal.ts');
        await writeTextFile(filepath, content);
      }
    },

    onManifest: () => ({
      prettyName: 'Prisma zod schema generator',
      defaultOutput: '../src/lib/zod',
    }),
  });
}
