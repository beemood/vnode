import type { Field } from '../../prisma/types.js';
import { ownInputField } from './own-input-field.js';

describe('ownInputField', () => {
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
      'ownInputField($options) should print $expected',
      ({ options, expected }) => {
        expect(ownInputField(options)).toEqual(expected);
      }
    );
  });
  describe('number scalar type', () => {
    const cm: Partial<Field> = {
      name: 'name',
      kind: 'scalar',
      type: 'Number',
    };

    it.each`
      options                                                                      | expected
      ${{ ...cm } as Partial<Field>}                                               | ${'name: z.number().optional()'}
      ${{ ...cm, isRequired: true } as Partial<Field>}                             | ${'name: z.number()'}
      ${{ ...cm, isRequired: true, documentation: '@min(3)' } as Partial<Field>}   | ${'name: z.number().min(3)'}
      ${{ ...cm, isRequired: true, documentation: '@max(255)' } as Partial<Field>} | ${'name: z.number().max(255)'}
      ${{ ...cm, isList: true } as Partial<Field>}                                 | ${'name: z.number().array().optional()'}
    `(
      'ownInputField($options) should print $expected',
      ({ options, expected }) => {
        expect(ownInputField(options)).toEqual(expected);
      }
    );
  });
});
