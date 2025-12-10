import { AbstractPrinter, AbstractPrinterOptions } from './abstract-printer.js';

export type PropertyPrinterOptions = AbstractPrinterOptions & {
  type: string;
  value?: any;
  isRequired?: boolean;
};

export class PropertyPrinter extends AbstractPrinter<PropertyPrinterOptions> {
  constructor(options: PropertyPrinterOptions) {
    super(options);
  }

  protected isRequired() {
    return this.options.isRequired == true;
  }

  protected hasDefaultValue() {
    return this.printDefaultValue().trim().length > 0;
  }

  protected printDefaultValue() {
    if (this.options.value != undefined) {
      return `${this.options.value}`;
    }
    return '';
  }

  protected printOptionalMark() {
    if (this.hasDefaultValue()) {
      return '';
    }

    if (this.isRequired()) {
      return '';
    }

    return '?';
  }

  protected printDelimeter() {
    if (this.printDefaultValue()) {
      return '= ';
    }
    return ': ';
  }

  protected printType() {
    if (this.printDefaultValue()) {
      return '';
    }
    return `${this.options.type}`;
  }

  protected printEndOfLine() {
    return ';';
  }

  override print(): string {
    return [
      this.printName(),
      this.printOptionalMark(),
      this.printDelimeter(),
      this.printType(),
      this.printDefaultValue(),
      this.printEndOfLine(),
    ].join('');
  }
}
