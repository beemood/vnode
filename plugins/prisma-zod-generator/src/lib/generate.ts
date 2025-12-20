import helper from '@prisma/generator-helper';
import { RequiredError } from '@vnode/errors';
import { writeTextFile } from '@vnode/fs';
import { join } from 'path';
import { mainFilePath } from './common/main-file-path.js';
import { createInputSchema } from './printers/main-printers/create-input-schema.js';
import { internalSchemas } from './printers/main-printers/internal-schemas.js';
import { orderBySchema } from './printers/main-printers/order-by-schema.js';
import { projectionSchema } from './printers/main-printers/projection-schema.js';
import { queryManySchema } from './printers/main-printers/query-many-schema.js';
import { querySchema } from './printers/main-printers/query-schema.js';
import { updateInputSchema } from './printers/main-printers/update-input-schema.js';
import { whereSchema } from './printers/main-printers/where-schema.js';

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

      // Create schema
      {
        for (const model of models) {
          const content = createInputSchema(model);
          const relativeFilePath = mainFilePath(model.name, 'Create');
          const filePath = join(outputPath, relativeFilePath);
          await writeTextFile(filePath, content);
        }
      }

      // Update schema
      {
        for (const model of models) {
          const content = updateInputSchema(model);
          const relativeFilePath = mainFilePath(model.name, 'Update');
          const filePath = join(outputPath, relativeFilePath);
          await writeTextFile(filePath, content);
        }
      }

      // Where schema
      {
        for (const model of models) {
          const content = whereSchema(model);
          const relativeFilePath = mainFilePath(model.name, 'Where');
          const filePath = join(outputPath, relativeFilePath);
          await writeTextFile(filePath, content);
        }
      }

      // Projection schema
      {
        for (const model of models) {
          const content = projectionSchema(model);
          const relativeFilePath = mainFilePath(model.name, 'Projection');
          const filePath = join(outputPath, relativeFilePath);
          await writeTextFile(filePath, content);
        }
      }

      // Order by schema
      {
        for (const model of models) {
          const content = orderBySchema(model);
          const relativeFilePath = mainFilePath(model.name, 'OrderBy');
          const filePath = join(outputPath, relativeFilePath);
          await writeTextFile(filePath, content);
        }
      }

      // Query schema
      {
        for (const model of models) {
          const content = querySchema(model);
          const relativeFilePath = mainFilePath(model.name, 'Query');
          const filePath = join(outputPath, relativeFilePath);
          await writeTextFile(filePath, content);
        }
      }

      // Many query schema
      {
        for (const model of models) {
          const content = queryManySchema(model);
          const relativeFilePath = mainFilePath(model.name, 'QueryMany');
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
