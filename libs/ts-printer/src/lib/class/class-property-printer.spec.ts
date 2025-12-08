import { trim } from '@vnode/utils';
import { CommentPrinter } from '../comment/comment-printer.js';
import {
  ClassPropertyPrinter,
  ClassPropertyPrinterOptions as O,
} from './class-property-printer.js';

describe('should print class property', () => {
  it.each`
    options                                                                                           | expected
    ${{ propertyName: 'name', propertyType: 'string' } as O}                                          | ${'name?: string;'}
    ${{ propertyName: 'name', propertyType: 'string', required: true } as O}                          | ${'name: string;'}
    ${{ propertyName: 'name', propertyType: 'string', required: true, defaultValue: '"value"' } as O} | ${'name= "value";'}
    ${{ propertyName: 'name', propertyType: 'string', required: true, defaultValue: '1' } as O}       | ${'name= 1;'}
  `('should print $expected from $options', ({ options, expected }) => {
    const pritner = new ClassPropertyPrinter(options, CommentPrinter);

    expect(trim(pritner.print())).toEqual(trim(expected));
  });
});
