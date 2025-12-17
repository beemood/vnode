import { normalizeName } from './normalize-name.js';

describe('normalizeName', () => {
  describe('valid', () => {
    it.each`
      value           | expected
      ${'som'}        | ${'som'}
      ${'some'}       | ${'some'}
      ${'Some'}       | ${'some'}
      ${'SomeOther'}  | ${'some-other'}
      ${'SOME_OTHER'} | ${'some-other'}
      ${'some other'} | ${'some-other'}
      ${'Some Other'} | ${'some-other'}
      ${'SOME OTHER'} | ${'some-other'}
    `(
      'normalizeName($value) should return $expected',
      ({ value, expected }) => {
        expect(normalizeName(value)).toEqual(expected);
      }
    );
  });
});
