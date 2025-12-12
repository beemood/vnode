import { DMMF } from '@prisma/generator-helper';
import { ClassPrinter } from '@vnode/ts-printer';
import { DtoNameSuffixes } from '../../types/name-variants.js';

export class QueryDtoClassPrinter extends ClassPrinter {
  constructor(protected readonly model: DMMF.Model) {
    super({ targetName: model.name });
  }

  protected override printNameSuffix(): string {
    return DtoNameSuffixes.QueryDto;
  }

  protected override printProperties() {
    const selectDtoName = `${this.model.name}${DtoNameSuffixes.SelectDto}`;
    const includeDtoName = `${this.model.name}${DtoNameSuffixes.IncludeDto}`;
    const whereDtoName = `${this.model.name}${DtoNameSuffixes.WhereDto}`;
    const orderDtoName = `${this.model.name}${DtoNameSuffixes.OrderDto}`;
    return `
    { 

    @ApiProperty({ type: "integer", minimum:0 , default: 20, required: false})
    take?: number; 
    
    @ApiProperty({ type: "integer", minimum:0 , default: 0, required: false})
    skip?: number; 
    
    @ApiProperty({ enum: P.Prisma.${this.model.name}ScalarFieldEnum, required: false})
    distinct?: P.Prisma.${this.model.name}ScalarFieldEnum;

    @ApiProperty({ type: ()=> ${selectDtoName}, required: false }) 
    select?: ${selectDtoName};

    @ApiProperty({ type: ()=> ${selectDtoName}, required: false })
    omit?: ${selectDtoName};

    @ApiProperty({ type: ()=> ${includeDtoName}, required: false }) 
    include?: ${includeDtoName};
    
    @ApiProperty({ type: ()=> ${orderDtoName}, required: false }) 
    orderBy: ${orderDtoName}; 

    @ApiProperty({ type: ()=> ${whereDtoName} , required: false })
    where?: ${whereDtoName};

    }
    `;
  }
}
