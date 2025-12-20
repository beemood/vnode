import z from 'zod';
import * as External from '@vnode/zod';



// 
// Enum schemas
// 

export const StatusEnum = ()=> z.enum([ 'OPEN','CLOSE','IN_PROGRESS' ])

// 
// Enum filter schemas
// 

export const StatusEnumFilter = ()=> z.object({ 
    equals: StatusEnum().optional(), 
    in:     StatusEnum().array().optional(), 
    notIn:  StatusEnum().array().optional(),
    not:    StatusEnum().or(z.object({ 
        equals: StatusEnum().optional(), 
        in: StatusEnum().array().optional(), 
        notIn: StatusEnum().array().optional()
    })).optional()
  })
export const StatusArrayEnumFilter = ()=> z.object({ 
        equals: StatusEnum().array().optional(), 
        has: StatusEnum().optional(), 
        hasEvery: StatusEnum().array().optional(), 
        hasSome: StatusEnum().array().optional(), 
        isEmpty: z.boolean().optional()
  })

// 
// distinct schemas
// 

export const CategoryDistinct = ()=> z.enum(['id','uuid','createdAt','updatedAt','deletedAt','name','description','status','statuses','parentId']).array()

// 
// Own projection schemas
// 

export const CategoryOwnProjection = ()=> z.object({
id: z.boolean().optional(),
uuid: z.boolean().optional(),
createdAt: z.boolean().optional(),
updatedAt: z.boolean().optional(),
deletedAt: z.boolean().optional(),
name: z.boolean().optional(),
description: z.boolean().optional(),
status: z.boolean().optional(),
statuses: z.boolean().optional(),
parentId: z.boolean().optional()
})

// 
// Own order by  schemas
// 

export const CategoryOwnOrderBy = ()=> z.object({
id: z.enum(['asc', 'desc']).optional(),
uuid: z.enum(['asc', 'desc']).optional(),
createdAt: z.enum(['asc', 'desc']).optional(),
updatedAt: z.enum(['asc', 'desc']).optional(),
deletedAt: z.enum(['asc', 'desc']).optional(),
name: z.enum(['asc', 'desc']).optional(),
description: z.enum(['asc', 'desc']).optional(),
status: z.enum(['asc', 'desc']).optional(),
statuses: z.enum(['asc', 'desc']).optional(),
parentId: z.enum(['asc', 'desc']).optional()
})

// 
// Own where schemas
// 

export const CategoryOwnWhere = ()=> z.object({ id: External.integerFilterSchema().optional(),
uuid: External.stringFilterSchema().optional(),
createdAt: External.datetimeFilterSchema().optional(),
updatedAt: External.datetimeFilterSchema().optional(),
deletedAt: External.datetimeFilterSchema().optional(),
name: External.stringFilterSchema().optional(),
description: External.stringFilterSchema().optional(),
status: StatusEnumFilter().optional(),
statuses: StatusArrayEnumFilter().optional(),
parentId: External.integerFilterSchema().optional() })

// 
// Own many relation where schemas
// 

export const CategoryManyRelationWhere = ()=> z.object({ 
        every:CategoryOwnWhere(),
        some: CategoryOwnWhere(),
        none: CategoryOwnWhere()
    })

// 
// Own create/update input schemas
// 

export const CategoryOwnCreate = ()=> z.object({
name: z.string(),
description: z.string().optional(),
status: StatusEnum(),
statuses: StatusEnum().array()
})
export const CategoryOwnUpdate = ()=> z.object({
name: z.string().optional(),
description: z.string().optional(),
status: StatusEnum().optional(),
statuses: StatusEnum().array().optional()
})

// 
// Relation create input schema
// 

export const CategoryRelationCreate = ()=> z.union([
       z.object({  connect: z.object({ id: z.int()           })    }),   
       z.object({  create:  z.object({ data: CategoryOwnCreate()  })    })                 
])
export const CategoryManyRelationCreate = ()=> z.union([
   z.object({  connect:    z.object({ id: z.int() }).array()               }),
   z.object({  createMany: z.object({ data: CategoryOwnCreate().array()     })  })
])

// 
// Relation update input schema
// 

export const CategoryRelationUpdate = ()=> z.union([ 
        z.object({ connect: z.object({ id: z.int() }) }),
        z.object({ disconnect: z.object({ id: z.int() }) }),
        z.object({ create: CategoryOwnCreate() }),
        z.object({ update: CategoryOwnUpdate() }),
    ])
export const CategoryManyRelationUpdate = ()=> z.union([ 
        z.object({ connect: z.object({ id: z.int() }).array() }),
        z.object({ disconnect: z.object({ id: z.int() }).array() }),

        z.object({ createMany: z.object({ data: CategoryOwnCreate() }).array() }),
        z.object({ updateMany: z.object({ data: CategoryOwnUpdate(), where: CategoryOwnWhere() }).array() })
    ])

// 
// Own query/many-query schemas
// 

export const CategoryOwnQuery = ()=> z.object({
   select: CategoryOwnProjection().optional(),   
   where : CategoryOwnWhere().optional(),         
})
export const CategoryOwnManyQuery = ()=> z.object({
   take: z.int().min(1).default(20).optional(), 
   skip: z.int().min(0).default(0).optional(),  
   distinct: CategoryDistinct().optional(), 
   orderBy:  CategoryOwnOrderBy().optional(),  
   select: CategoryOwnProjection().optional(),  
   where :CategoryOwnWhere().optional(), 
})