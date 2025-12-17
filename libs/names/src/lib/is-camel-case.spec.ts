import { isCamelCase } from './is-camel-case.js';

describe('isCamelCase', () => {
  it.each`
    value           | expected
    ${''}           | ${false}
    ${'some'}       | ${false}
    ${'someO'}      | ${true}
    ${'someOther'}  | ${true}
    ${'some Other'} | ${false}
    ${'some_Other'} | ${false}
    ${'some-Other'} | ${false}
  `('isCamelCase($value) should return $expected', ({ value, expected }) => {
    expect(isCamelCase(value)).toEqual(expected);
  });
});
