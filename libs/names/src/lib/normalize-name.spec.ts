import { normalizeName } from './normalize-name.js';

describe('normalizeName', () => {
  it.each`
    value  | expected
    ${''}  | ${''}
    ${' '} | ${'-'}
  `('normalizeName($value) should return $expected', ({ value, expected }) => {
    expect(normalizeName(value)).toEqual(expected);
  });
});
