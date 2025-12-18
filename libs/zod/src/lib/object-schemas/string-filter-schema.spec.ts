import { stringFilterSchema } from './string-filter-schema.js';
describe('stringFilterSchema', () => {
  describe('stringFilterSchema', () => {
    describe('valid', () => {
      it.each`
        value                      | expected
        ${''}                      | ${''}
        ${'exact-string'}          | ${'exact-string'}
        ${{}}                      | ${{}}
        ${{ unknownProperty: '' }} | ${{}}
        ${{ equals: '' }}          | ${{ equals: '' }}
        ${{ startsWith: '' }}      | ${{ startsWith: '' }}
        ${{ endsWith: '' }}        | ${{ endsWith: '' }}
        ${{ contains: '' }}        | ${{ contains: '' }}
        ${{ gt: '' }}              | ${{ gt: '' }}
        ${{ lt: '' }}              | ${{ lt: '' }}
        ${{ gte: '' }}             | ${{ gte: '' }}
        ${{ lte: '' }}             | ${{ lte: '' }}
        ${{ in: [''] }}            | ${{ in: [''] }}
        ${{ notIn: [''] }}         | ${{ notIn: [''] }}
        ${{ not: '' }}             | ${{ not: '' }}
        ${{ not: { equals: '' } }} | ${{ not: { equals: '' } }}
      `(
        'stringFilterSchema().parse(value) should return $expected',
        ({ value, expected }) => {
          expect(stringFilterSchema().parse(value)).toEqual(expected);
        }
      );
    });
  });
});
