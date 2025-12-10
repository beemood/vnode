import { ClassPrinter } from './class-printer.js';

export type TypePrinterOptions = {
  typeName: string;
  properties: string;
  generics?: string[];
};

export class TypePrinter extends ClassPrinter {
  protected override printClassType(): string {
    return 'type';
  }
}
