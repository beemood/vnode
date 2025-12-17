import { InvalidNameError } from '@vnode/errors';
import { validateName } from './validate-name.js';

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
      expect(validateName(value)).toEqual(true);
    });
  });

  describe('invalid', () => {
    it.each`
      value
      ${'.some'}
      ${'some  some'}
      ${'some__some'}
      ${'some--some'}
    `('validateName($value) should throw  InvalidNameError', ({ value }) => {
      expect(() => validateName(value)).toThrowError(InvalidNameError.name);
    });
  });
});
