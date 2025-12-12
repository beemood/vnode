import { DMMF } from '@prisma/generator-helper';
import { ClassPrinter } from '@vnode/ts-printer';
import { DtoNameSuffixes } from '../../types/name-variants.js';

export class OwnProjectionDtoClassPrinter extends ClassPrinter {
  constructor(protected readonly model: DMMF.Model) {
    super({ targetName: model.name });
  }

  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnProjectionDto;
  }

  protected override printProperties() {
    const ownSelectName = `${this.model.name}${DtoNameSuffixes.OwnSelectDto}`;
    const includeNmae = `${this.model.name}${DtoNameSuffixes.IncludeDto}`;
    const ownWhereName = `${this.model.name}${DtoNameSuffixes.OwnWhereDto}`;
    return `
    { 
      @ApiProperty({ type: ()=> ${ownSelectName}, required: false })
      select?: ${ownSelectName};
      
      
      @ApiProperty({ type: ()=> ${ownSelectName}, required: false })
      omit?: ${ownSelectName};
      
      @ApiProperty({ type: ()=> ${includeNmae} , required: false })
      include?: ${includeNmae};

      @ApiProperty({ type: ()=> ${ownWhereName} , required: false })
      where?: ${ownWhereName};
    }
    `;
  }
}
