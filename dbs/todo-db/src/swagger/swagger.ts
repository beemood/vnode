import  {ApiProperty} from '@nestjs/swagger';

import  * as P from '../prisma/client.js';

export  class  CategoryOwnReadDto
{
@ApiProperty({ required: false,type: 'number',description: 'optional' })
id?: number;
@ApiProperty({ required: false,type: 'string',description: 'optional' })
name?: string;

}

export  class  TodoOwnReadDto
{
@ApiProperty({ required: false,type: 'number',description: 'optional' })
id?: number;
@ApiProperty({ required: false,type: 'string',description: 'optional' })
title?: string;
@ApiProperty({ required: false,type: 'string',description: 'optional' })
description?: string;
@ApiProperty({ required: false,enum: P.Status,description: 'optional' })
status?: P.Status;
@ApiProperty({ required: false,type: 'number',description: 'optional' })
categoryId?: number;

}