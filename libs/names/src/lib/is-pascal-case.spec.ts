import { isPascalCase } from './is-pascal-case.js';

describe('isPascalCase', () => {
  it.each`
    value           | expected
    ${''}           | ${false}
    ${' '}          | ${false}
    ${'some'}       | ${false}
    ${'Some Other'} | ${false}
    ${'Some_Other'} | ${false}
    ${'some-Other'} | ${false}
    ${'Some'}       | ${true}
    ${'SomeO'}      | ${true}
    ${'SomeOther'}  | ${true}
  `('isPascalCase($value) should return $expected', ({ value, expected }) => {
    expect(isPascalCase(value)).toEqual(expected);
  });
});
