import { definedOrThrow } from './defined-or-throw.js';
describe('definedOrThrow', () => {
  describe('defined', () => {
    it.each`
      value
      ${''}
    `('definedOrThrow($value) should return $value', ({ value }) => {
      expect(definedOrThrow(value)).toEqual(value);
    });
  });
});
