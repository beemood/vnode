import { isScreamingSnakeCase, isSnakeCase } from './is-snake-case.js';

describe('isSnakeCase', () => {
  describe('isSnakeCase', () => {
    it.each`
      value           | expected
      ${''}           | ${false}
      ${' '}          | ${false}
      ${'Some Other'} | ${false}
      ${'Some_Other'} | ${false}
      ${'some-Other'} | ${false}
      ${'Some'}       | ${false}
      ${'SomeO'}      | ${false}
      ${'SomeOther'}  | ${false}
      ${'some'}       | ${true}
      ${'some_o'}     | ${true}
    `('isSnakeCase($value) should return $expected', ({ value, expected }) => {
      expect(isSnakeCase(value)).toEqual(expected);
    });
  });

  describe('isScreamingSnakeCase', () => {
    it.each`
      value            | expected
      ${''}            | ${false}
      ${' '}           | ${false}
      ${'Some Other'}  | ${false}
      ${'Some_Other'}  | ${false}
      ${'some-Other'}  | ${false}
      ${'Some'}        | ${false}
      ${'SomeO'}       | ${false}
      ${'SomeOther'}   | ${false}
      ${'some_o'}      | ${false}
      ${'some'}        | ${false}
      ${' SOME_OTHER'} | ${false}
      ${'SOME_ OTHER'} | ${false}
      ${'SOME'}        | ${true}
      ${'SOME_OTHER'}  | ${true}
    `(
      'isScreamingSnakeCase($value) should return $expected',
      ({ value, expected }) => {
        expect(isScreamingSnakeCase(value)).toEqual(expected);
      }
    );
  });
});
