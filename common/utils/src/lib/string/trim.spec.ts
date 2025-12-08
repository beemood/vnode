import { trim } from './trim.js';

describe('trim', () => {
  it.each`
    value                  | expected
    ${'  some  '}          | ${'some'}
    ${'  some     some  '} | ${'some some'}
  `('should trim the $value to $expected', ({ value, expected }) => {
    expect(trim(value)).toEqual(expected);
  });
});
