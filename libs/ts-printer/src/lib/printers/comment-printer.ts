import { Printable } from '@vnode/types';
import { isNotEmptyArray } from '@vnode/utils';

export type CommentPrinterOptions = {
  comments?: string[];
  inline?: boolean;
};

export class CommentPrinter implements Printable {
  constructor(protected readonly options?: CommentPrinterOptions) {}

  protected printInline() {
    if (isNotEmptyArray(this.options?.comments)) {
      return this.options.comments.map((e) => `// ${e}`).join('\n');
    }
    return '';
  }

  /**
   * 

   */
  protected printMultiline() {
    if (isNotEmptyArray(this.options?.comments)) {
      return [
        '/**',
        this.options.comments.map((e) => `* ${e}`).join('\n'),
        '*/',
      ].join('\n');
    }

    return '';
  }

  print(): string {
    if (this.options?.inline == true) {
      return this.printInline();
    }

    return this.printMultiline();
  }
}
