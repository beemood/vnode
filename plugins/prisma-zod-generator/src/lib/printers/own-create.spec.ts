import type { Field } from '../prisma/types.js';
import { ownCreateField } from './own-create-field.js';

describe('ownCreate', () => {
  describe('string scalar type', () => {
    const cm: Partial<Field> = {
      name: 'name',
      kind: 'scalar',
      type: 'String',
    };

    it.each`
      options                                                                      | expected
      ${{ ...cm } as Partial<Field>}                                               | ${'name: z.string().optional()'}
      ${{ ...cm, isRequired: true } as Partial<Field>}                             | ${'name: z.string()'}
      ${{ ...cm, isRequired: true, documentation: '@min(3)' } as Partial<Field>}   | ${'name: z.string().min(3)'}
      ${{ ...cm, isRequired: true, documentation: '@max(255)' } as Partial<Field>} | ${'name: z.string().max(255)'}
      ${{ ...cm, isList: true } as Partial<Field>}                                 | ${'name: z.string().array().optional()'}
    `(
      'ownCreateField($options) should print $expected',
      ({ options, expected }) => {
        expect(ownCreateField(options)).toEqual(expected);
      }
    );
  });
});
