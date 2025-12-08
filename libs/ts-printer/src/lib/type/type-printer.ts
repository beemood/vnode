import { Printable } from '@vnode/types';

export type TypePrinterOptions = {
  typeName: string;
  typeOptions: string;
};

export class TypePrinter implements Printable {
  constructor(protected readonly options: TypePrinterOptions) {}

  print() {
    return `export type ${this.options.typeName} = ${this.options.typeOptions}`;
  }
}
