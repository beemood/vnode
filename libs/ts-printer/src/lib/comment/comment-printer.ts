import { Printable } from '@vnode/types';

export type CommentPrinterOptions = {
  comment?: string;
};

export class CommentPrinter implements Printable {
  constructor(protected readonly options?: CommentPrinterOptions) {}
  print(): string {
    if (this.options?.comment != undefined) {
      return [`/**`, ` * ${this.options?.comment}`, ` */`].join('\n');
    }
    return '';
  }
}
