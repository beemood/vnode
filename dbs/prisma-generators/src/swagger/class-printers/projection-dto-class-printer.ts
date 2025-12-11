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
    return `
    { 
      select: ${this.model.name}${DtoNameSuffixes.SelectDto};
      omit: ${this.model.name}${DtoNameSuffixes.SelectDto};
      include: ${this.model.name}${DtoNameSuffixes.IncludeDto};
      where: ${this.model.name}${DtoNameSuffixes.WhereDto};
    }
    `;
  }
}
