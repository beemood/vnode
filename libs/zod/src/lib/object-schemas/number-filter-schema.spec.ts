import { numberFilterSchema } from './number-filter-schema.js';

describe('numberFilterSchema', () => {
  describe('numberFilterSchema', () => {
    describe('valid', () => {
      it.each`
        value                      | expected
        ${''}                      | ${0}
        ${0}                       | ${0}
        ${{}}                      | ${{}}
        ${{ unknownProperty: '' }} | ${{}}
        ${{ equals: '' }}           | ${{ equals: 0 }}
        ${{ equals: '' }}           | ${{ equals: 0 }}
      `(
        'numberFilterSchema().parse(value) should return $expected',
        ({ value, expected }) => {
          expect(numberFilterSchema().parse(value)).toEqual(expected);
        }
      );
    });
  });
});
