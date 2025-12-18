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

  describe('integer', () => {
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
      `(
        'NumberSchemas.integer($value) should validate',
        ({ value, expected }) => {
          expect(NumberSchemas.integer().parse(value)).toEqual(expected);
        }
      );
    });
    describe('invalid', () => {
      it.each`
        value
        ${'s'}
        ${'x'}
        ${0.2}
        ${'0.2'}
      `('NumberSchemas.integer($value) should throw', ({ value }) => {
        expect(() => NumberSchemas.integer().parse(value)).toThrowError();
      });
    });
  });

  describe('fraction', () => {
    describe('valid', () => {
      it.each`
        value        | expected
        ${''}        | ${0}
        ${'0.1'}     | ${0.1}
        ${'0.99999'} | ${0.99999}
      `(
        'NumberSchemas.fraction($value) should validate',
        ({ value, expected }) => {
          expect(NumberSchemas.fraction().parse(value)).toEqual(expected);
        }
      );
    });
    describe('invalid', () => {
      it.each`
        value
        ${'s'}
        ${'x'}
        ${1}
        ${'1.2'}
      `('NumberSchemas.fraction($value) should throw', ({ value }) => {
        expect(() => NumberSchemas.fraction().parse(value)).toThrowError();
      });
    });
  });

  //

  describe('nonnegative', () => {
    describe('valid', () => {
      it.each`
        value  | expected
        ${''}  | ${0}
        ${'1'} | ${1}
        ${1}   | ${1}
      `(
        'NumberSchemas.nonnegative($value) should validate',
        ({ value, expected }) => {
          expect(NumberSchemas.nonnegative().parse(value)).toEqual(expected);
        }
      );
    });
    describe('invalid', () => {
      it.each`
        value
        ${'s'}
        ${'x'}
        ${-1}
        ${'-1.2'}
      `('NumberSchemas.nonnegative($value) should throw', ({ value }) => {
        expect(() => NumberSchemas.nonnegative().parse(value)).toThrowError();
      });
    });
  });
});
