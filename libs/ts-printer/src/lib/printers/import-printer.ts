import { Printable } from '@vnode/types';
import { isNotEmptyArray, isNotEmptyString } from '@vnode/utils';

export type ImportPrinterOptions = {
  items?: string[];
  source: string;
  importAs?: string;
};

export class ImportPrinter implements Printable {
  constructor(protected readonly options: ImportPrinterOptions) {}

  protected printSource() {
    return `'${this.options.source}'`;
  }

  protected printItems() {
    if (isNotEmptyArray(this.options.items)) {
      return `{${this.options.items.join(', ')}}`;
    } else if (isNotEmptyString(this.options.importAs)) {
      return `* as ${this.options.importAs}`;
    }

    return '';
  }

  print(): string {
    if (isNotEmptyString(this.printItems())) {
      return `import  ${this.printItems()} from ${this.printSource()};`;
    }
    return `import ${this.printSource()};`;
  }
}
