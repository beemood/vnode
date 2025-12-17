import { isKebabCase } from './is-kebab-case.js';

describe('isKebabCase', () => {
  it.each`
    value           | expected
    ${''}           | ${false}
    ${' '}          | ${false}
    ${'Some Other'} | ${false}
    ${'Some_Other'} | ${false}
    ${'some-Other'} | ${false}
    ${'some'}       | ${true}
    ${'some-'}      | ${true}
    ${'some-other'} | ${true}
  `('isKebabCase($value) should return $expected', ({ value, expected }) => {
    expect(isKebabCase(value)).toEqual(expected);
  });
});
