import { MismatchError } from '@vnode/errors';
import { internalName } from '../../common/internal-name.js';
import { isRequiredField } from '../../common/is-required-field.js';
import type { Field } from '../../prisma/types.js';

/**
 * Determine the relations' type (one or many), and required or optional,
 * Then return the dedicated RelationCreate or ManyRelationCreate schema string
 * @param field {@link Field}
 * @returns object schema field string
 */
export function relationCreateInputField(field: Field) {
  console.log('relationToFields: ', field.relationToFields);
  console.log('relationFromFields: ', field.relationFromFields);
  switch (field.kind) {
    case 'object': {
      if (field.isList) {
        const schema = `${internalName(field.type, 'ManyRelationCreate')}()`;
        return `${field.name}: ${schema}.optional()`;
      } else {
        const schema = `${internalName(field.type, 'RelationCreate')}()`;
        if (isRequiredField(field)) {
          return `${field.name}: ${schema}`;
        }
        return `${field.name}: ${schema}.optional()`;
      }
    }
    case 'scalar':
    case 'enum':
    case 'unsupported': {
      throw new MismatchError(
        `The field kind, ${field.kind}, is not supported.`
      );
    }
  }
}
