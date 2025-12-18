/**
 * Generate error classes
 */

import { writeFile } from 'fs/promises';

function printErrorClass(name) {
  const className = `${name}Error`;

  return [
    `export class ${className} extends VnodeError {`,
    `   constructor(message: Message = '') {`,
    `       super(\`${className}: \${message}\`, '${className}');`,
    `   }`,
    `}`,
  ].join('\n');
}

const requiredImports = `
import { VnodeError } from './vnode-error.js';
import type { Message } from '@vnode/types';
`;

const listOfErrors = new Set([
  'Type',
  'InvalidFormat',
  'PatternMismatch',
  'NotNumber',
  'NotDate',
  'NotFutureDate',
  'NotPastDate',
  'NotAfternoon',
  'NotMorgning',
  'NotEvening',
  'NotNight',
  'NotEvenNumber',
  'NotOddNumber',
  'NotInteger',
  'NonNumeric',
  'NotString',
  'NotArray',

  'InvalidCharacter',
  'Encoding',
  'MalformedJSON',
  'InvalidDate',
  'InvalidEncriptedData',
  'InvalidJson',
  'Undefined',
  'Missing',
  'Required',
  'NullValue',
  'EmptyString',
  'InvalidPrefix',

  'InvalidBarcode',
  'EmptyArray',
  'EmptyCollection',
  'NoSelection',
  'TooFew',
  'TooMany',
  'MinLength',
  'MaxLength',
  'Length',
  'Minimum',
  'Maximum',
  'Range',
  'Negative',
  'Positive',
  'Precision',
  'TooSmall',
  'TooLarge',
  'Unique',
  'DuplicateEntry',
  'ForbiddenName',
  'InvalidName',
  'ForbiddenValue',
  'Mismatch',
  'NotAllowed',
  'CircularReference',
  'ConstraintViolation',
  'ReadOnly',
  'Unauthorized',
  'Forbidden',
  'InvalidCredentials',
  'AccountLocked',
  'SessionExpired',
  'AccountDisabled',
  'InvalidState',
  'InUse',
  'NotImplemented',
  'System',
  'Timeout',
  'NotFound',
  'ResourceExhausted',
  'IOError',
  'Network',
  'PermissionDenied',
  'DiskFull',
  'Configuration',
  'Dependency',
  'SyntaxError',
  'Reference',
  'Arithmetic',
  'IndexError',
  'KeyError',
  'NotCallable',
  'Assertion',
]);

const generatedErrors = [...listOfErrors].map(printErrorClass).join('\n');

writeFile('src/lib/errors.ts', [requiredImports, generatedErrors].join('\n'), {
  encoding: 'utf-8',
})
  .then(() => {
    console.log('Successfully generated the error classews');
  })
  .catch((err) => {
    console.error('Something went wrong generating the error classes!');
    throw err;
  });
