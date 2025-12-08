import { Printable } from '@vnode/types';

export type ClassPrinterOptions = {
  className: string;
  classProperties?: string;
  extends?: string;
  implements?: string[];
};

export class ClassPrinter implements Printable {
  constructor(protected readonly options: ClassPrinterOptions) {}

  protected printClassName() {
    return this.options.className;
  }

  protected printClassProperties() {
    return this.options.classProperties || '';
  }

  protected printExtends() {
    if (this.options.extends != undefined) {
      return ` extends ${this.options.extends} `;
    }

    return '';
  }

  protected printImplements() {
    if (this.options.implements && this.options.implements.length > 0) {
      return ` implements ${this.options.implements.join(', ')} `;
    }

    return '';
  }
  print(): string {
    return [
      `export class ${this.printClassName()}${this.printExtends()}${this.printImplements()}{ `,
      `     ${this.printClassProperties()}`,
      '}',
    ].join('\n');
  }
}
