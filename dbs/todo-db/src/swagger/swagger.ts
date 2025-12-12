
import * as T from '@vnode/types'
import { ApiProperty } from '@nestjs/swagger'; 
import * as P from '../prisma/client.js';

export class _StringFilter { 
  @ApiProperty({ required: false,  type: "string" }) equals?: string;
  @ApiProperty({ required: false,  type: "string" }) contains?: string;
  @ApiProperty({ required: false,  type: "string" }) startsWith?: string;
  @ApiProperty({ required: false,  type: "string" }) endsWith?: string;
  @ApiProperty({ required: false,  type: "string" }) gt?: string;
  @ApiProperty({ required: false,  type: "string" }) gte?: string;
  @ApiProperty({ required: false,  type: "string" }) lt?: string;
  @ApiProperty({ required: false,  type: "string" }) lte?: string;
  @ApiProperty({ required: false,  type: "string", isArray: true }) in?: string[];
  @ApiProperty({ required: false,  type: "string", isArray: true }) notIn?: string[];
  @ApiProperty({ required: false,  type:"string", enum:["insensitive", "default"] })   mode?: 'insensitive' | "default";
}

export class StringFilter extends _StringFilter { 
  @ApiProperty({ required: false,  type: ()=> _StringFilter }) not?: _StringFilter;
}


export class _NumberFilter { 
  @ApiProperty({ required: false,  type: "number" }) equals?: number; 
  @ApiProperty({ required: false,  type: "number" }) gt?: number; 
  @ApiProperty({ required: false,  type: "number" }) gte?: number; 
  @ApiProperty({ required: false,  type: "number" }) lt?: number; 
  @ApiProperty({ required: false,  type: "number" }) lte?: number; 
  @ApiProperty({ required: false,  type: "number", isArray:true }) in?: number[]; 
  @ApiProperty({ required: false,  type: "number", isArray:true }) notIn?: number[]; 
}
      

export class NumberFilter extends _NumberFilter { 
  @ApiProperty({ required: false,  type: ()=> _NumberFilter }) not?: _NumberFilter
}

export class _DateFilter { 
    @ApiProperty({ required: false,  type: 'string', format:'datetime'}) equals?: string;
    @ApiProperty({ required: false,  type: 'string', format:'datetime'}) gt?: string;
    @ApiProperty({ required: false,  type: 'string', format:'datetime'}) gte?: string;
    @ApiProperty({ required: false,  type: 'string', format:'datetime'}) lt?: string;
    @ApiProperty({ required: false,  type: 'string', format:'datetime'}) lte?: string;
    @ApiProperty({ required: false,  type: 'string', format:'datetime', isArray:true }) in?: string[];
    @ApiProperty({ required: false,  type: 'string', format:'datetime', isArray:true }) notIn?: string[];
}

export class DateFilter extends _DateFilter { 
  @ApiProperty({ required: false,  type: ()=> _DateFilter }) not: _DateFilter;
}

export class _ArrayStringFilter { 
   @ApiProperty({ required: false,  type:"string", isArray: true }) equals?: string[]
   @ApiProperty({ required: false,  type:"string" }) has?: string;
   @ApiProperty({ required: false,  type:"string", isArray: true }) hasEvery?: string[]
   @ApiProperty({ required: false,  type:"string", isArray: true }) asSome?: string[]
   @ApiProperty({ required: false,  type:"boolean" }) isEmpty?: boolean;
}

export class ArrayStringFilter extends _ArrayStringFilter { 
  @ApiProperty({ required: false,  type: ()=> _ArrayStringFilter }) not?: _ArrayStringFilter
}

export class _ArrayNumberFilter { 
   @ApiProperty({ required: false,  type: "number", isArray: true })  equals?: number[]
   @ApiProperty({ required: false,  type: "number" })  has?: number;
   @ApiProperty({ required: false,  type: "number", isArray: true })  hasEvery?: number[]
   @ApiProperty({ required: false,  type: "number", isArray: true })  hasSome?: number[]
   @ApiProperty({ required: false,  type: "boolean" })  isEmpty?: boolean;
}

export class ArrayNumberFilter extends _ArrayNumberFilter { 
  @ApiProperty({ required: false,  type: ()=> _ArrayNumberFilter }) not?: _ArrayNumberFilter
}

export class _JsonFilter { 
    @ApiProperty({ required: false,  type: "string" , isArray:true })                   path?: string[]; 
    @ApiProperty({ required: false,  type: "string" })                                  string_contains?: string;
    @ApiProperty({ required: false,  type: "string" })                                  array_contains?: string;
    @ApiProperty({ required: false,  type: "string" })                                  equals?: string;
    @ApiProperty({ required: false,  type: "string" })                                  string_starts_with?: string;
    @ApiProperty({ required: false,  type: "string" })                                  array_starts_with?: string;
    @ApiProperty({ required: false,  type: "string" })                                  array_ends_with?: string;
    @ApiProperty({ required: false,  type: "string" })                                  string_ends_with?: string;
    @ApiProperty({ required: false,  type: "string" })                                  gt?: string;
    @ApiProperty({ required: false,  type: "string" })                                  gte?: string;
    @ApiProperty({ required: false,  type: "string" })                                  lt?: string;
    @ApiProperty({ required: false,  type: "string" })                                  lte?: string;
    @ApiProperty({ required: false,  type: "string", enum:["insensitive", "default"] })   mode?: 'insensitive' | "default";
   
}


export class JsonFilter extends _JsonFilter { 
  @ApiProperty({ required: false,  type: ()=> _JsonFilter }) not?: _JsonFilter
}


export enum OrderDirection { 
  ASC = 'asc', 
  DESC = 'desc'
}

export class OrderByCount { 
  _count: OrderDirection
}


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
@ApiProperty({ type: 'boolean',description: 'required' })
active: boolean;
@ApiProperty({ isArray: true,type: 'string',description: 'required' })
notes: string[];
@ApiProperty({ isArray: true,type: 'number',description: 'required' })
scores: number[];
@ApiProperty({ type: 'string',description: 'required' })
record: T.JsonValue;
@ApiProperty({ isArray: true,type: 'string',description: 'required' })
records: T.JsonValue[];
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
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
active?: boolean;
@ApiProperty({ isArray: true,type: 'string',description: 'required' })
notes: string[];
@ApiProperty({ isArray: true,type: 'number',description: 'required' })
scores: number[];
@ApiProperty({ type: 'string',description: 'required' })
record: T.JsonValue;
@ApiProperty({ isArray: true,type: 'string',description: 'required' })
records: T.JsonValue[];
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
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
active?: boolean;
@ApiProperty({ isArray: true,required: false,type: 'string',description: 'optional' })
notes?: string[];
@ApiProperty({ isArray: true,required: false,type: 'number',description: 'optional' })
scores?: number[];
@ApiProperty({ required: false,type: 'string',description: 'optional' })
record?: T.JsonValue;
@ApiProperty({ isArray: true,required: false,type: 'string',description: 'optional' })
records?: T.JsonValue[];
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
export  class  CategoryOwnSelectDto
{
@ApiProperty({ required: false,type: 'boolean',description: 'optional, generated' })
id?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional, generated' })
uuid?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional, timestamp' })
createdAt?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional, timestamp' })
updatedAt?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional, timestamp' })
deletedAt?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'unqiue, optional' })
name?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
parentId?: boolean;
}

export  class  TodoOwnSelectDto
{
@ApiProperty({ required: false,type: 'boolean',description: 'optional, generated' })
id?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional, timestamp' })
createdAt?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional, timestamp' })
updatedAt?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional, timestamp' })
deletedAt?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'unqiue, optional' })
title?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
description?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
active?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
notes?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
scores?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
record?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
records?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
status?: boolean;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
categoryId?: boolean;
}
export  class  CategoryOwnWhereDto
{
@ApiProperty({ required: false,type: ()=>NumberFilter,description: 'optional, generated' })
id?: NumberFilter;
@ApiProperty({ required: false,type: ()=>StringFilter,description: 'optional, generated' })
uuid?: StringFilter;
@ApiProperty({ required: false,type: ()=>DateFilter,description: 'optional, timestamp' })
createdAt?: DateFilter;
@ApiProperty({ type: ()=>DateFilter,description: 'required, timestamp' })
updatedAt: DateFilter;
@ApiProperty({ required: false,type: ()=>DateFilter,description: 'optional, timestamp' })
deletedAt?: DateFilter;
@ApiProperty({ type: ()=>StringFilter,description: 'unqiue, required' })
name: StringFilter;
@ApiProperty({ required: false,type: ()=>NumberFilter,description: 'optional' })
parentId?: NumberFilter;
}
export class CategoryManyWhereDto {
 
      @ApiProperty({ type: ()=> CategoryOwnWhereDto , required: false })
      some?: CategoryOwnWhereDto;
 
      @ApiProperty({ type: ()=> CategoryOwnWhereDto , required: false })
      every?: CategoryOwnWhereDto;
 
      @ApiProperty({ type: ()=> CategoryOwnWhereDto , required: false })
      none?: CategoryOwnWhereDto;
}

export  class  TodoOwnWhereDto
{
@ApiProperty({ required: false,type: ()=>NumberFilter,description: 'optional, generated' })
id?: NumberFilter;
@ApiProperty({ required: false,type: ()=>DateFilter,description: 'optional, timestamp' })
createdAt?: DateFilter;
@ApiProperty({ type: ()=>DateFilter,description: 'required, timestamp' })
updatedAt: DateFilter;
@ApiProperty({ required: false,type: ()=>DateFilter,description: 'optional, timestamp' })
deletedAt?: DateFilter;
@ApiProperty({ type: ()=>StringFilter,description: 'unqiue, required' })
title: StringFilter;
@ApiProperty({ required: false,type: ()=>StringFilter,description: 'optional' })
description?: StringFilter;
@ApiProperty({ required: false,type: 'boolean',description: 'optional' })
active?: boolean;
@ApiProperty({ type: ()=>ArrayStringFilter,description: 'required' })
notes: ArrayStringFilter;
@ApiProperty({ type: ()=>ArrayNumberFilter,description: 'required' })
scores: ArrayNumberFilter;
@ApiProperty({ type: ()=>JsonFilter,description: 'required' })
record: JsonFilter;
@ApiProperty({ type: ()=>ArrayStringFilter,description: 'required' })
records: ArrayStringFilter;
@ApiProperty({ required: false,enum: P.Status,description: 'optional' })
status?: P.Status;
@ApiProperty({ required: false,type: ()=>NumberFilter,description: 'optional' })
categoryId?: NumberFilter;
}
export class TodoManyWhereDto {
 
      @ApiProperty({ type: ()=> TodoOwnWhereDto , required: false })
      some?: TodoOwnWhereDto;
 
      @ApiProperty({ type: ()=> TodoOwnWhereDto , required: false })
      every?: TodoOwnWhereDto;
 
      @ApiProperty({ type: ()=> TodoOwnWhereDto , required: false })
      none?: TodoOwnWhereDto;
}
export  class  CategoryWhereDto  extends CategoryOwnWhereDto
{
@ApiProperty({ required: false,type: ()=>CategoryOwnWhereDto,description: 'optional' })
parent?: CategoryOwnWhereDto;
@ApiProperty({ required: false,type: ()=>CategoryManyWhereDto,description: 'optional' })
children?: CategoryManyWhereDto;
@ApiProperty({ required: false,type: ()=>TodoManyWhereDto,description: 'optional' })
todos?: TodoManyWhereDto;
}


export  class  TodoWhereDto  extends TodoOwnWhereDto
{
@ApiProperty({ required: false,type: ()=>CategoryOwnWhereDto,description: 'optional' })
category?: CategoryOwnWhereDto;
}

export  class  CategoryOwnProjectionDto

    { 
      @ApiProperty({ type: ()=> CategoryOwnSelectDto, required: false })
      select?: CategoryOwnSelectDto;
      
      
      @ApiProperty({ type: ()=> CategoryOwnSelectDto, required: false })
      omit?: CategoryOwnSelectDto;


      @ApiProperty({ type: ()=> CategoryOwnWhereDto , required: false })
      where?: CategoryOwnWhereDto;
    }
    

export  class  TodoOwnProjectionDto

    { 
      @ApiProperty({ type: ()=> TodoOwnSelectDto, required: false })
      select?: TodoOwnSelectDto;
      
      
      @ApiProperty({ type: ()=> TodoOwnSelectDto, required: false })
      omit?: TodoOwnSelectDto;


      @ApiProperty({ type: ()=> TodoOwnWhereDto , required: false })
      where?: TodoOwnWhereDto;
    }
    
export  class  CategorySelectDto  extends CategoryOwnSelectDto 
{
@ApiProperty({ required: false,type: ()=>CategoryOwnProjectionDto,description: 'optional' })
parent?: CategoryOwnProjectionDto;
@ApiProperty({ required: false,type: ()=>CategoryOwnProjectionDto,description: 'optional' })
children?: CategoryOwnProjectionDto;
@ApiProperty({ required: false,type: ()=>TodoOwnProjectionDto,description: 'optional' })
todos?: TodoOwnProjectionDto;
}

export  class  TodoSelectDto  extends TodoOwnSelectDto 
{
@ApiProperty({ required: false,type: ()=>CategoryOwnProjectionDto,description: 'optional' })
category?: CategoryOwnProjectionDto;
}
export  class  CategoryProjectionDto

    { 
    @ApiProperty({ type: ()=> CategorySelectDto, required: false }) 
    select?: CategorySelectDto;

    @ApiProperty({ type: ()=> CategorySelectDto, required: false })
    omit?: CategorySelectDto;

    @ApiProperty({ type: ()=> CategoryWhereDto , required: false })
    where?: CategoryWhereDto;
    }
    

export  class  TodoProjectionDto

    { 
    @ApiProperty({ type: ()=> TodoSelectDto, required: false }) 
    select?: TodoSelectDto;

    @ApiProperty({ type: ()=> TodoSelectDto, required: false })
    omit?: TodoSelectDto;

    @ApiProperty({ type: ()=> TodoWhereDto , required: false })
    where?: TodoWhereDto;
    }
    
export  class  CategoryIncludeDto
{
@ApiProperty({ required: false,type: ()=>CategoryOwnProjectionDto,description: 'optional' })
parent?: CategoryOwnProjectionDto;
@ApiProperty({ required: false,type: ()=>CategoryOwnProjectionDto,description: 'optional' })
children?: CategoryOwnProjectionDto;
@ApiProperty({ required: false,type: ()=>TodoOwnProjectionDto,description: 'optional' })
todos?: TodoOwnProjectionDto;
}

export  class  TodoIncludeDto
{
@ApiProperty({ required: false,type: ()=>CategoryOwnProjectionDto,description: 'optional' })
category?: CategoryOwnProjectionDto;
}
export  class  CategoryOwnOrderDto
{
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, generated' })
id?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, generated' })
uuid?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, timestamp' })
createdAt?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, timestamp' })
updatedAt?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, timestamp' })
deletedAt?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'unqiue, optional' })
name?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
parentId?: OrderDirection;
}

export  class  TodoOwnOrderDto
{
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, generated' })
id?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, timestamp' })
createdAt?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, timestamp' })
updatedAt?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional, timestamp' })
deletedAt?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'unqiue, optional' })
title?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
description?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
active?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
notes?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
scores?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
record?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
records?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
status?: OrderDirection;
@ApiProperty({ required: false,type: ()=>OrderDirection,description: 'optional' })
categoryId?: OrderDirection;
}
export  class  CategoryOrderDto  extends CategoryOwnOrderDto 
{
@ApiProperty({ required: false,type: ()=>CategoryOwnOrderDto,description: 'optional' })
parent?: CategoryOwnOrderDto;
@ApiProperty({ isArray: true,required: false,type: ()=>CategoryOwnOrderDto,description: 'optional' })
children?: CategoryOwnOrderDto[];
@ApiProperty({ isArray: true,required: false,type: ()=>TodoOwnOrderDto,description: 'optional' })
todos?: TodoOwnOrderDto[];
}

export  class  TodoOrderDto  extends TodoOwnOrderDto 
{
@ApiProperty({ required: false,type: ()=>CategoryOwnOrderDto,description: 'optional' })
category?: CategoryOwnOrderDto;
}
export  class  CategoryQueryDto

    { 

    @ApiProperty({ type: "integer", minimum:0 , default: 20, required: false})
    take?: number; 
    
    @ApiProperty({ type: "integer", minimum:0 , default: 0, required: false})
    skip?: number; 
    
    @ApiProperty({ enum: P.Prisma.CategoryScalarFieldEnum, required: false})
    distinct?: P.Prisma.CategoryScalarFieldEnum;

    @ApiProperty({ type: ()=> CategorySelectDto, required: false }) 
    select?: CategorySelectDto;

    @ApiProperty({ type: ()=> CategorySelectDto, required: false })
    omit?: CategorySelectDto;

    @ApiProperty({ type: ()=> CategoryIncludeDto, required: false }) 
    include?: CategoryIncludeDto;
    
    @ApiProperty({ type: ()=> CategoryOrderDto, required: false }) 
    orderBy: CategoryOrderDto; 

    @ApiProperty({ type: ()=> CategoryWhereDto , required: false })
    where?: CategoryWhereDto;

    }
    

export  class  TodoQueryDto

    { 

    @ApiProperty({ type: "integer", minimum:0 , default: 20, required: false})
    take?: number; 
    
    @ApiProperty({ type: "integer", minimum:0 , default: 0, required: false})
    skip?: number; 
    
    @ApiProperty({ enum: P.Prisma.TodoScalarFieldEnum, required: false})
    distinct?: P.Prisma.TodoScalarFieldEnum;

    @ApiProperty({ type: ()=> TodoSelectDto, required: false }) 
    select?: TodoSelectDto;

    @ApiProperty({ type: ()=> TodoSelectDto, required: false })
    omit?: TodoSelectDto;

    @ApiProperty({ type: ()=> TodoIncludeDto, required: false }) 
    include?: TodoIncludeDto;
    
    @ApiProperty({ type: ()=> TodoOrderDto, required: false }) 
    orderBy: TodoOrderDto; 

    @ApiProperty({ type: ()=> TodoWhereDto , required: false })
    where?: TodoWhereDto;

    }
    