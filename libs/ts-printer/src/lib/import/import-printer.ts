import { Printable } from '@vnode/types';

export type ImportPrinterOptions = {
  items: string[];
  from: string;
};

export class ImportPrinter implements Printable {
  constructor(protected readonly options: ImportPrinterOptions) {}

  protected printFromPath() {
    return `'${this.options.from}'`;
  }

  protected printItems() {
    return this.options.items.join(', ');
  }

  print(): string {
    return `import { ${this.printItems()} } from ${this.printFromPath()};`;
  }
}
