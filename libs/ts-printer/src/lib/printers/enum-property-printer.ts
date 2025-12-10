import { PropertyPrinter } from './property-printer.js';

export class EnumPropertyPrinter extends PropertyPrinter {
  protected override printType(): string {
    return '';
  }

  protected override printEndOfLine(): string {
    return ',';
  }
}
