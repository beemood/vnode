import { Printable } from '@vnode/types';
import { CommentPrinter } from '../comment/comment-printer.js';

export type ClassPropertyPrinterOptions = {
  propertyName: string;
  propertyType: string;
  required?: boolean;
  defaultValue?: string;
};

export class ClassPropertyPrinter implements Printable {
  constructor(
    protected readonly options: ClassPropertyPrinterOptions,
    protected readonly commentPrinter: typeof CommentPrinter
  ) {}

  protected printDefaultValue() {
    if (this.options.defaultValue != undefined) {
      return `= ${this.options.defaultValue}`;
    }
    return '';
  }

  protected printPropertyName() {
    return this.options.propertyName;
  }

  protected printType() {
    if (this.options.defaultValue != undefined) {
      return '';
    }

    const shouldOptionalMark = this.options.required == true ? '' : '?';
    return `${shouldOptionalMark}: ${this.options.propertyType}`;
  }

  protected printDef() {
    return [
      this.printPropertyName(),
      this.printType(),
      this.printDefaultValue(),
    ].join('');
  }

  print(): string {
    const result = [this.printDef()].filter((e) => e).join('\n');

    return `${result};`;
  }
}
