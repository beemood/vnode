import { ClassPrinter } from './class-printer.js';

export class EnumPrinter extends ClassPrinter {
  protected override printClassType(): string {
    return 'enum';
  }
}
