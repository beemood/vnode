import { Printable } from '@vnode/types';

export type DecoratorPrinterOptions = {
  decoratorName: string;
  decoratorOptions: string;
};

export class DecoratorPrinter implements Printable {
  constructor(protected readonly options: DecoratorPrinterOptions) {}

  print(): string {
    return `@${this.options.decoratorName}(${this.options.decoratorOptions})`;
  }
}
