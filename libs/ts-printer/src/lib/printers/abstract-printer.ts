import { NotImplementedError } from '@vnode/errors';
import { Printable } from '@vnode/types';

export type AbstractPrinterOptions = { targetName: string };

export class AbstractPrinter<T extends AbstractPrinterOptions>
  implements Printable
{
  constructor(protected readonly options: T) {}

  protected printNamePrefix() {
    return '';
  }

  protected printNameSuffix() {
    return '';
  }

  protected printName() {
    return [
      this.printNamePrefix(),
      this.options.targetName,
      this.printNameSuffix(),
    ].join('');
  }

  print(): string {
    throw new NotImplementedError();
  }
}
