import { NotImplementedError } from '@vnode/errors';
import { AbstractPrinter, AbstractPrinterOptions } from './abstract-printer.js';

export type ClassPrinterOptions = AbstractPrinterOptions;

export abstract class ClassPrinter extends AbstractPrinter<ClassPrinterOptions> {
  constructor(options: ClassPrinterOptions) {
    super(options);
  }

  protected printProperties() {
    throw new NotImplementedError();
  }

  protected printExtends() {
    return '';
  }

  protected printGenerics() {
    return '';
  }

  protected printImplements() {
    return '';
  }

  protected printClassType() {
    return ' class ';
  }

  protected printAccessModifer() {
    return 'export';
  }

  override print(): string {
    return [
      [
        this.printAccessModifer(),
        this.printClassType(),

        [this.printName(), this.printGenerics()].join(''),

        this.printExtends(),
        this.printImplements(),
      ]
        .filter((e) => e)
        .join(' '),
      `${this.printProperties()}`,
    ].join('\n');
  }
}
