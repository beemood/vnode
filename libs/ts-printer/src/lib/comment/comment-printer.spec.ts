import { trim } from '@vnode/utils';
import {
    CommentPrinter,
    CommentPrinterOptions as O,
} from './comment-printer.js';

describe('CommentPrinter', () => {
  it.each`
    options                     | expected
    ${{} as O}                  | ${''}
    ${{ comment: 'some' } as O} | ${'/** * some */'}
  `('should print $expected from $options', ({ options, expected }) => {
    expect(trim(new CommentPrinter(options).print())).toEqual(trim(expected));
  });
});
