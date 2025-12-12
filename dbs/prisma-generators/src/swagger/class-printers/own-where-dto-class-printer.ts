import {
  isInternalField,
  isRelationField,
} from '../../helpers/field-type-checkers.js';
import { getFilterType } from '../../helpers/get-filter-type.js';
import { DtoNameSuffixes } from '../../types/name-variants.js';
import { Field } from '../../types/prisma.js';
import { DtoClassPrinter } from '../base-printers/dto-class-printer.js';

export class OwnWhereDtoClassPrinter extends DtoClassPrinter {
  protected override printNameSuffix(): string {
    return DtoNameSuffixes.OwnWhereDto;
  }

  protected override printPropertyTypeSuffix(options: any): string {
    return '';
  }

  protected override filter(field: Field): boolean {
    if (isInternalField(field)) {
      return false;
    }

    if (isRelationField(field)) {
      return false;
    }

    return true;
  }

  protected override map(field: Field): Field {
    if (field.kind === 'enum') {
      return field;
    }

    if (field.type === 'Boolean') {
      return field;
    }
    return {
      ...field,
      kind: 'object',
      type: getFilterType(field),
      isList: false,
    };
  }

  protected printManyWhereDto() {
    const dtoName = this.printName();
    return [
      `export class ${this.model.name}${DtoNameSuffixes.ManyWhereDto} {`,
      ` 
      @ApiProperty({ type: ()=> ${dtoName} , required: false })
      some?: ${dtoName};`,
      ` 
      @ApiProperty({ type: ()=> ${dtoName} , required: false })
      every?: ${dtoName};`,
      ` 
      @ApiProperty({ type: ()=> ${dtoName} , required: false })
      none?: ${dtoName};`,
      `}`,
    ].join('\n');
  }

  override print(): string {
    return [super.print(), this.printManyWhereDto()].join('\n');
  }
}
