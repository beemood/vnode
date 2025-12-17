import { NumberSchemas } from './number-schemas.js';
describe('NumberSchemas', () => {
  describe('number', () => {
    describe('valid', () => {
      it.each`
        value       | expected
        ${''}       | ${0}
        ${1}        | ${1}
        ${-1}       | ${-1}
        ${0}        | ${0}
        ${'1'}      | ${1}
        ${'-1'}     | ${-1}
        ${'0'}      | ${0}
        ${'0000'}   | ${0}
        ${'000056'} | ${56}
        ${'0.5555'} | ${0.5555}
      `(
        'NumberSchemas.number($value) should validate',
        ({ value, expected }) => {
          expect(NumberSchemas.number().parse(value)).toEqual(expected);
        }
      );
    });
    describe('invalid', () => {
      it.each`
        value
        ${'s'}
        ${'x'}
      `('NumberSchemas.number($value) should throw', ({ value }) => {
        expect(() => NumberSchemas.number().parse(value)).toThrowError();
      });
    });
  });
});
