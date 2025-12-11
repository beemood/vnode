import { NotImplementedError } from '@vnode/errors';
import { AbstractPrinter, AbstractPrinterOptions } from './abstract-printer.js';

export type ClassPrinterOptions = AbstractPrinterOptions;

export abstract class ClassPrinter extends AbstractPrinter<ClassPrinterOptions> {
  constructor(options: ClassPrinterOptions) {
    super(options);
  }

  protected printPropertyTypeSuffix(options: any) {
    return '';
  }

  protected printProperties(): string {
    throw new NotImplementedError();
  }

  protected printExtends(): string {
    return '';
  }

  protected printGenerics(): string {
    return '';
  }

  protected printImplements(): string {
    return '';
  }

  protected printClassType(): string {
    return ' class ';
  }

  protected printAccessModifer(): string {
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
