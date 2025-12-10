import { AbstractPrinter, AbstractPrinterOptions } from './abstract-printer.js';

export type DecoratorPrinterOptions = AbstractPrinterOptions & {
  options: string;
};

export class DecoratorPrinter extends AbstractPrinter<DecoratorPrinterOptions> {
  protected printOptions() {
    return this.options.options;
  }

  protected printSymbol() {
    return '@';
  }

  override print(): string {
    return `${this.printSymbol()}${this.printName()}(${this.printOptions()})`;
  }
}
