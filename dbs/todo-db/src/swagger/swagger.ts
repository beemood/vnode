import  {ApiProperty} from '@nestjs/swagger';

import  * as P from '../prisma/client.js';

export  class  CategoryOwnReadDto
{
@ApiProperty({ required: false,type: 'number',description: 'optional, generated' })
id?: number;
@ApiProperty({ required: false,type: 'string',description: 'optional, generated' })
uuid?: string;
@ApiProperty({ required: false,type: 'string',format: 'datetime',description: 'optional, timestamp' })
createdAt?: Date;
@ApiProperty({ type: 'string',format: 'datetime',description: 'required, timestamp' })
updatedAt: Date;
@ApiProperty({ type: 'string',format: 'datetime',description: 'required, timestamp' })
deletedAt: Date;
@ApiProperty({ type: 'string',description: 'unqiue, required' })
name: string;
@ApiProperty({ type: 'number',description: 'required' })
parentId: number;
}

export  class  TodoOwnReadDto
{
@ApiProperty({ required: false,type: 'number',description: 'optional, generated' })
id?: number;
@ApiProperty({ required: false,type: 'string',format: 'datetime',description: 'optional, timestamp' })
createdAt?: Date;
@ApiProperty({ type: 'string',format: 'datetime',description: 'required, timestamp' })
updatedAt: Date;
@ApiProperty({ type: 'string',format: 'datetime',description: 'required, timestamp' })
deletedAt: Date;
@ApiProperty({ type: 'string',description: 'unqiue, required' })
title: string;
@ApiProperty({ type: 'string',description: 'required' })
description: string;
@ApiProperty({ required: false,enum: P.Status,description: 'optional' })
status?: P.Status;
@ApiProperty({ type: 'number',description: 'required' })
categoryId: number;
}

export  class  CategoryOwnCreateDto
{
@ApiProperty({ type: 'string',description: 'unqiue, required' })
name: string;
@ApiProperty({ required: false,type: 'number',description: 'optional' })
parentId?: number;
}

export  class  TodoOwnCreateDto
{
@ApiProperty({ type: 'string',description: 'unqiue, required' })
title: string;
@ApiProperty({ required: false,type: 'string',description: 'optional' })
description?: string;
@ApiProperty({ required: false,enum: P.Status,description: 'optional' })
status?: P.Status;
@ApiProperty({ required: false,type: 'number',description: 'optional' })
categoryId?: number;
}

export  class  CategoryOwnUpdateDto
{
@ApiProperty({ required: false,type: 'string',description: 'unqiue, optional' })
name?: string;
@ApiProperty({ required: false,type: 'number',description: 'optional' })
parentId?: number;
}

export  class  TodoOwnUpdateDto
{
@ApiProperty({ required: false,type: 'string',description: 'unqiue, optional' })
title?: string;
@ApiProperty({ required: false,type: 'string',description: 'optional' })
description?: string;
@ApiProperty({ required: false,enum: P.Status,description: 'optional' })
status?: P.Status;
@ApiProperty({ required: false,type: 'number',description: 'optional' })
categoryId?: number;
}

export  class  CategoryReadDto  extends CategoryOwnReadDto
{
@ApiProperty({ required: false,type: ()=>CategoryReadDto,description: 'optional' })
parent?: CategoryReadDto;
@ApiProperty({ isArray: true,required: false,type: ()=>CategoryReadDto,description: 'optional' })
children?: CategoryReadDto[];
@ApiProperty({ isArray: true,required: false,type: ()=>TodoReadDto,description: 'optional' })
todos?: TodoReadDto[];
}

export  class  TodoReadDto  extends TodoOwnReadDto
{
@ApiProperty({ required: false,type: ()=>CategoryReadDto,description: 'optional' })
category?: CategoryReadDto;
}

export  class  CategoryCreateDto extends CategoryOwnCreateDto
{

}

export  class  TodoCreateDto extends TodoOwnCreateDto
{

}

export  class  CategoryUpdateDto extends CategoryOwnUpdateDto
{

}

export  class  TodoUpdateDto extends TodoOwnUpdateDto
{

}