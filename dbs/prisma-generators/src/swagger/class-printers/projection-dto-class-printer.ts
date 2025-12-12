import { DMMF } from '@prisma/generator-helper';
import { ClassPrinter } from '@vnode/ts-printer';
import { DtoNameSuffixes } from '../../types/name-variants.js';

export class ProjectionDtoClassPrinter extends ClassPrinter {
  constructor(protected readonly model: DMMF.Model) {
    super({ targetName: model.name });
  }

  protected override printNameSuffix(): string {
    return DtoNameSuffixes.ProjectionDto;
  }

  protected override printProperties() {
    const selectDtoName = `${this.model.name}${DtoNameSuffixes.SelectDto}`;
    const includeDtoName = `${this.model.name}${DtoNameSuffixes.IncludeDto}`;
    const whereDtoName = `${this.model.name}${DtoNameSuffixes.WhereDto}`;
    return `
    { 
    @ApiProperty({ type: ()=> ${selectDtoName}, required: false }) 
    select?: ${selectDtoName};

    @ApiProperty({ type: ()=> ${selectDtoName}, required: false })
    omit?: ${selectDtoName};

    @ApiProperty({ type: ()=> ${includeDtoName} , required: false })
    include?: ${includeDtoName};
    
    @ApiProperty({ type: ()=> ${whereDtoName} , required: false })
    where?: ${whereDtoName};
    }
    `;
  }
}
