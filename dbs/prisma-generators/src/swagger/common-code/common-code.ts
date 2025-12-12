export const commonSwaggerCode = `
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

`;
