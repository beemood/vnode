import { validNameOrThrow } from './valid-name-or-throw.js';

describe('validateName', () => {
  describe('valid', () => {
    it.each`
      value
      ${'some'}
      ${'Some'}
      ${'SomeOther'}
      ${'some-other'}
      ${'some_other'}
      ${'some other'}
      ${'some other'}
    `('validateName($value) should return true', ({ value }) => {
      expect(validNameOrThrow(value)).toEqual(value);
    });
  });

  describe('invalid', () => {
    it.each`
      value            | error
      ${'s'}           | ${/3 characters/i}
      ${'ss'}          | ${/3 characters/i}
      ${'.some'}       | ${/start with/i}
      ${' some-some '} | ${/start with/i}
      ${'some.'}       | ${/end with/i}
      ${'some  some'}  | ${/double space/i}
      ${'some__some'}  | ${/double underscore/i}
      ${'some--some'}  | ${/double dash/i}
    `(
      'validateName($value) should throw error contains $error',
      ({ value, error }) => {
        expect(() => validNameOrThrow(value)).toThrowError(error);
      }
    );
  });
});
