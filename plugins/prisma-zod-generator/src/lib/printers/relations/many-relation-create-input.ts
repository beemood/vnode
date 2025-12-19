import { schemaName } from '../../common/schema-name.js';
import type { Model } from '../../prisma/types.js';

/**
 * Create input schema to insert or connect many-relations. 
 * The schema validates the relation schemas, in the example, (tags and attributes). 
 * The input should be either `connect` or `createMany`
 * 
 * @param model {@link Model}
 * @returns schema string
 * 
 * 
 * @example
 * ````typescript

 *  ProductRepo.create({ 
 *    name: "Some name",
 *    description: "Some description",
 *    tags:{
 *      connect: [
 *        { id:1 },
 *        { id:2 }
 *      ]
 *    }
 *  })
 *
 *
 *  ProductRepo.create({
 *    name: "Some name",
 *    description: "Some description",
 *    attributes: {
 *      createMany: {
 *        data: [
 *          { key: 'color', value: 'orange' },
 *          { key: 'size',  value: '400x200' },
 *        ]
 *      }
 *    }
 *  })
 *
 *
 * ````
 * 
 */
export function manyRelationCreateInput(model: Model) {
  const ownCreate = schemaName(model.name, 'OwnCreate');

  return [
    `z.union([`,
    `   z.object({  connect:    z.object({ id: z.int() }).array()               }),`,
    `   z.object({  createMany: z.object({ data: ${ownCreate}().array()     })  })`,
    `])`,
  ].join('\n');
}
