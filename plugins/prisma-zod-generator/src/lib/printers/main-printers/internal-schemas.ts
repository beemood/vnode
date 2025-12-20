import { dec } from '../../common/dec.js';
import { importExternal } from '../../common/import-external.js';
import { schemaName } from '../../common/schema-name.js';
import type { Datamodel } from '../../prisma/types.js';
import { distinct } from '../enums/distinct.js';
import { enumModel } from '../enums/enum-model.js';
import { ownCreateInput } from '../input/own-create-input.js';
import { ownUpdateInput } from '../input/own-update-input.js';
import { ownOrderBy } from '../order/own-order-by.js';
import { ownProjection } from '../projection/own-projection.js';
import { enumArrayFilter } from '../query/enum-array-filter.js';
import { enumFilter } from '../query/enum-filter.js';
import { manyRelationWhere } from '../query/many-relation-where.js';
import { ownManyQuery } from '../query/own-many-query.js';
import { ownQuery } from '../query/own-query.js';
import { ownWhere } from '../query/own-where.js';
import { manyRelationCreateInput } from '../relations/many-relation-create-input.js';
import { manyRelationUpdateInput } from '../relations/many-relation-update-input.js';
import { relationCreateInput } from '../relations/relation-create-input.js';
import { relationUpdateInput } from '../relations/relation-update-input.js';

/**
 * Create the model distinct enums, enum schemas, enum filter, enum array filter, and all own schemas.
 * @param datamodel
 * @returns
 */
export function internalSchemas(datamodel: Datamodel) {
  const schemas: string[] = ["import z from 'zod';", importExternal(), '', ''];

  const models = datamodel.models;
  const enums = datamodel.enums;

  schemas.push('');
  schemas.push('// ');
  schemas.push('// Enum schemas');
  schemas.push('// ');
  schemas.push('');

  // Enum schemas: export const StatusEnum = z.enum(['OPEN', 'CLOSE'])
  for (const model of enums) {
    const name = schemaName(model.name, 'Enum');
    const schema = enumModel(model);
    schemas.push(dec(name, schema));
  }

  //
  // Enum filter/array-fitler schemas: export const StatusEnumFilter = z.object({ equal, in, notIn, not })
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Enum filter schemas');
    schemas.push('// ');
    schemas.push('');

    for (const model of enums) {
      // Filter schema
      {
        const name = schemaName(model.name, 'EnumFilter');
        const schema = enumFilter(model);
        schemas.push(dec(name, schema));
      }

      // Array filter schema
      {
        const name = schemaName(model.name, 'ArrayEnumFilter');
        const schema = enumArrayFilter(model);
        schemas.push(dec(name, schema));
      }
    }
  }

  //
  // Distinct schemas: export const CategoryDistinct = z.enum(['id', 'name', ...])
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// distinct schemas');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      const name = schemaName(model.name, 'Distinct');
      const schema = distinct(model);
      schemas.push(dec(name, schema));
    }
  }

  //
  // Own projection schemas: export const CategoryOwnProjection = z.object({ id: z.boolean().optinoal(),...})
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Own projection schemas');
    schemas.push('// ');
    schemas.push('');

    //
    // Own projection schemas: export const CategoryOwnProjection = z.object({ id: z.boolean().optinoal(),...})
    for (const model of models) {
      const name = schemaName(model.name, 'OwnProjection');
      const schema = ownProjection(model);
      schemas.push(dec(name, schema));
    }
  }

  //
  // Own order-by schemas: export const CategoryOwnProjection = z.object({ id: z.enum(['asc', 'desc']).optinoal(),...})
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Own order by  schemas');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      const name = schemaName(model.name, 'OwnOrderBy');
      const schema = ownOrderBy(model);
      schemas.push(dec(name, schema));
    }
  }

  //
  // Own where schemas: export const CategoryOwnProjection = z.object({ id: z.enum(['asc', 'desc']).optinoal(),...})
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Own where schemas');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      const name = schemaName(model.name, 'OwnWhere');
      const schema = ownWhere(model);
      schemas.push(dec(name, schema));
    }
  }
  //
  // Own many relation where schemas: export const CategoryOwnProjection = z.object({ id: z.enum(['asc', 'desc']).optinoal(),...})
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Own many relation where schemas');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      const name = schemaName(model.name, 'ManyRelationWhere');
      const schema = manyRelationWhere(model);
      schemas.push(dec(name, schema));
    }
  }

  //
  // Own create/update input schema: export const CategoryOwnCreate = z.object({ name: z.string().min(3).max(255), desc: z.string().optional() })
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Own create/update input schemas');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      // Own create schema
      {
        const name = schemaName(model.name, 'OwnCreate');
        const schema = ownCreateInput(model);
        schemas.push(dec(name, schema));
      }

      // Own update schema
      {
        const name = schemaName(model.name, 'OwnUpdate');
        const schema = ownUpdateInput(model);
        schemas.push(dec(name, schema));
      }
    }
  }

  //
  // Own create/update input schema: export const CategoryOwnCreate = z.object({ name: z.string().min(3).max(255), desc: z.string().optional() })
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Relation create input schema');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      // Relation create input
      {
        const name = schemaName(model.name, 'RelationCreate');
        const schema = relationCreateInput(model);
        schemas.push(dec(name, schema));
      }

      // Relation many create input
      {
        const name = schemaName(model.name, 'ManyRelationCreate');
        const schema = manyRelationCreateInput(model);
        schemas.push(dec(name, schema));
      }
    }
  }
  //
  // Own create/update input schema: export const CategoryOwnCreate = z.object({ name: z.string().min(3).max(255), desc: z.string().optional() })
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Relation update input schema');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      // Relation create input
      {
        const name = schemaName(model.name, 'RelationUpdate');
        const schema = relationUpdateInput(model);
        schemas.push(dec(name, schema));
      }

      // Relation many create input
      {
        const name = schemaName(model.name, 'ManyRelationUpdate');
        const schema = manyRelationUpdateInput(model);
        schemas.push(dec(name, schema));
      }
    }
  }

  //
  // Own query/many-query schema: export const
  // CategoryOwnQuery = z.object({ take: z.int(), skip: z.int(), where: CategoryOwnWhere, select: CategoryOwnProjection, distinct: CategoryDistinct, orderBy: CategoryOwnOrderBy })
  {
    schemas.push('');
    schemas.push('// ');
    schemas.push('// Own query/many-query schemas');
    schemas.push('// ');
    schemas.push('');

    for (const model of models) {
      // Own query schema
      {
        const name = schemaName(model.name, 'OwnQuery');
        const schema = ownQuery(model);
        schemas.push(dec(name, schema));
      }

      // Own many query schema
      {
        const name = schemaName(model.name, 'OwnManyQuery');
        const schema = ownManyQuery(model);
        schemas.push(dec(name, schema));
      }
    }
  }

  return schemas.join('\n');
}
