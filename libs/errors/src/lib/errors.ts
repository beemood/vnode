
import { VnodeError } from './vnode-error.js';
import { Message } from '@vnode/types';

export class TypeError extends VnodeError {
   constructor(message: Message = '') {
       super(`TypeError: ${message}`, 'TypeError');
   }
}
export class InvalidFormatError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidFormatError: ${message}`, 'InvalidFormatError');
   }
}
export class PatternMismatchError extends VnodeError {
   constructor(message: Message = '') {
       super(`PatternMismatchError: ${message}`, 'PatternMismatchError');
   }
}
export class NotNumberError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotNumberError: ${message}`, 'NotNumberError');
   }
}
export class NotEvenNumberError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotEvenNumberError: ${message}`, 'NotEvenNumberError');
   }
}
export class NotOddNumberError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotOddNumberError: ${message}`, 'NotOddNumberError');
   }
}
export class NotIntegerError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotIntegerError: ${message}`, 'NotIntegerError');
   }
}
export class NonNumericError extends VnodeError {
   constructor(message: Message = '') {
       super(`NonNumericError: ${message}`, 'NonNumericError');
   }
}
export class NotStringError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotStringError: ${message}`, 'NotStringError');
   }
}
export class NotArrayError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotArrayError: ${message}`, 'NotArrayError');
   }
}
export class InvalidCharacterError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidCharacterError: ${message}`, 'InvalidCharacterError');
   }
}
export class EncodingError extends VnodeError {
   constructor(message: Message = '') {
       super(`EncodingError: ${message}`, 'EncodingError');
   }
}
export class MalformedJSONError extends VnodeError {
   constructor(message: Message = '') {
       super(`MalformedJSONError: ${message}`, 'MalformedJSONError');
   }
}
export class InvalidDateError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidDateError: ${message}`, 'InvalidDateError');
   }
}
export class UndefinedError extends VnodeError {
   constructor(message: Message = '') {
       super(`UndefinedError: ${message}`, 'UndefinedError');
   }
}
export class MissingError extends VnodeError {
   constructor(message: Message = '') {
       super(`MissingError: ${message}`, 'MissingError');
   }
}
export class RequiredError extends VnodeError {
   constructor(message: Message = '') {
       super(`RequiredError: ${message}`, 'RequiredError');
   }
}
export class NullValueError extends VnodeError {
   constructor(message: Message = '') {
       super(`NullValueError: ${message}`, 'NullValueError');
   }
}
export class EmptyStringError extends VnodeError {
   constructor(message: Message = '') {
       super(`EmptyStringError: ${message}`, 'EmptyStringError');
   }
}
export class InvalidPrefixError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidPrefixError: ${message}`, 'InvalidPrefixError');
   }
}
export class InvalidBarcodeError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidBarcodeError: ${message}`, 'InvalidBarcodeError');
   }
}
export class EmptyArrayError extends VnodeError {
   constructor(message: Message = '') {
       super(`EmptyArrayError: ${message}`, 'EmptyArrayError');
   }
}
export class EmptyCollectionError extends VnodeError {
   constructor(message: Message = '') {
       super(`EmptyCollectionError: ${message}`, 'EmptyCollectionError');
   }
}
export class NoSelectionError extends VnodeError {
   constructor(message: Message = '') {
       super(`NoSelectionError: ${message}`, 'NoSelectionError');
   }
}
export class TooFewError extends VnodeError {
   constructor(message: Message = '') {
       super(`TooFewError: ${message}`, 'TooFewError');
   }
}
export class TooManyError extends VnodeError {
   constructor(message: Message = '') {
       super(`TooManyError: ${message}`, 'TooManyError');
   }
}
export class MinLengthError extends VnodeError {
   constructor(message: Message = '') {
       super(`MinLengthError: ${message}`, 'MinLengthError');
   }
}
export class MaxLengthError extends VnodeError {
   constructor(message: Message = '') {
       super(`MaxLengthError: ${message}`, 'MaxLengthError');
   }
}
export class LengthError extends VnodeError {
   constructor(message: Message = '') {
       super(`LengthError: ${message}`, 'LengthError');
   }
}
export class MinimumError extends VnodeError {
   constructor(message: Message = '') {
       super(`MinimumError: ${message}`, 'MinimumError');
   }
}
export class MaximumError extends VnodeError {
   constructor(message: Message = '') {
       super(`MaximumError: ${message}`, 'MaximumError');
   }
}
export class RangeError extends VnodeError {
   constructor(message: Message = '') {
       super(`RangeError: ${message}`, 'RangeError');
   }
}
export class NegativeError extends VnodeError {
   constructor(message: Message = '') {
       super(`NegativeError: ${message}`, 'NegativeError');
   }
}
export class PositiveError extends VnodeError {
   constructor(message: Message = '') {
       super(`PositiveError: ${message}`, 'PositiveError');
   }
}
export class PrecisionError extends VnodeError {
   constructor(message: Message = '') {
       super(`PrecisionError: ${message}`, 'PrecisionError');
   }
}
export class TooSmallError extends VnodeError {
   constructor(message: Message = '') {
       super(`TooSmallError: ${message}`, 'TooSmallError');
   }
}
export class TooLargeError extends VnodeError {
   constructor(message: Message = '') {
       super(`TooLargeError: ${message}`, 'TooLargeError');
   }
}
export class UniqueError extends VnodeError {
   constructor(message: Message = '') {
       super(`UniqueError: ${message}`, 'UniqueError');
   }
}
export class DuplicateEntryError extends VnodeError {
   constructor(message: Message = '') {
       super(`DuplicateEntryError: ${message}`, 'DuplicateEntryError');
   }
}
export class ForbiddenNameError extends VnodeError {
   constructor(message: Message = '') {
       super(`ForbiddenNameError: ${message}`, 'ForbiddenNameError');
   }
}
export class InvalidNameError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidNameError: ${message}`, 'InvalidNameError');
   }
}
export class ForbiddenValueError extends VnodeError {
   constructor(message: Message = '') {
       super(`ForbiddenValueError: ${message}`, 'ForbiddenValueError');
   }
}
export class MismatchError extends VnodeError {
   constructor(message: Message = '') {
       super(`MismatchError: ${message}`, 'MismatchError');
   }
}
export class NotAllowedError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotAllowedError: ${message}`, 'NotAllowedError');
   }
}
export class CircularReferenceError extends VnodeError {
   constructor(message: Message = '') {
       super(`CircularReferenceError: ${message}`, 'CircularReferenceError');
   }
}
export class ConstraintViolationError extends VnodeError {
   constructor(message: Message = '') {
       super(`ConstraintViolationError: ${message}`, 'ConstraintViolationError');
   }
}
export class ReadOnlyError extends VnodeError {
   constructor(message: Message = '') {
       super(`ReadOnlyError: ${message}`, 'ReadOnlyError');
   }
}
export class UnauthorizedError extends VnodeError {
   constructor(message: Message = '') {
       super(`UnauthorizedError: ${message}`, 'UnauthorizedError');
   }
}
export class ForbiddenError extends VnodeError {
   constructor(message: Message = '') {
       super(`ForbiddenError: ${message}`, 'ForbiddenError');
   }
}
export class InvalidCredentialsError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidCredentialsError: ${message}`, 'InvalidCredentialsError');
   }
}
export class AccountLockedError extends VnodeError {
   constructor(message: Message = '') {
       super(`AccountLockedError: ${message}`, 'AccountLockedError');
   }
}
export class SessionExpiredError extends VnodeError {
   constructor(message: Message = '') {
       super(`SessionExpiredError: ${message}`, 'SessionExpiredError');
   }
}
export class AccountDisabledError extends VnodeError {
   constructor(message: Message = '') {
       super(`AccountDisabledError: ${message}`, 'AccountDisabledError');
   }
}
export class InvalidStateError extends VnodeError {
   constructor(message: Message = '') {
       super(`InvalidStateError: ${message}`, 'InvalidStateError');
   }
}
export class InUseError extends VnodeError {
   constructor(message: Message = '') {
       super(`InUseError: ${message}`, 'InUseError');
   }
}
export class NotImplementedError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotImplementedError: ${message}`, 'NotImplementedError');
   }
}
export class SystemError extends VnodeError {
   constructor(message: Message = '') {
       super(`SystemError: ${message}`, 'SystemError');
   }
}
export class TimeoutError extends VnodeError {
   constructor(message: Message = '') {
       super(`TimeoutError: ${message}`, 'TimeoutError');
   }
}
export class NotFoundError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotFoundError: ${message}`, 'NotFoundError');
   }
}
export class ResourceExhaustedError extends VnodeError {
   constructor(message: Message = '') {
       super(`ResourceExhaustedError: ${message}`, 'ResourceExhaustedError');
   }
}
export class IOErrorError extends VnodeError {
   constructor(message: Message = '') {
       super(`IOErrorError: ${message}`, 'IOErrorError');
   }
}
export class NetworkError extends VnodeError {
   constructor(message: Message = '') {
       super(`NetworkError: ${message}`, 'NetworkError');
   }
}
export class PermissionDeniedError extends VnodeError {
   constructor(message: Message = '') {
       super(`PermissionDeniedError: ${message}`, 'PermissionDeniedError');
   }
}
export class DiskFullError extends VnodeError {
   constructor(message: Message = '') {
       super(`DiskFullError: ${message}`, 'DiskFullError');
   }
}
export class ConfigurationError extends VnodeError {
   constructor(message: Message = '') {
       super(`ConfigurationError: ${message}`, 'ConfigurationError');
   }
}
export class DependencyError extends VnodeError {
   constructor(message: Message = '') {
       super(`DependencyError: ${message}`, 'DependencyError');
   }
}
export class SyntaxErrorError extends VnodeError {
   constructor(message: Message = '') {
       super(`SyntaxErrorError: ${message}`, 'SyntaxErrorError');
   }
}
export class ReferenceError extends VnodeError {
   constructor(message: Message = '') {
       super(`ReferenceError: ${message}`, 'ReferenceError');
   }
}
export class ArithmeticError extends VnodeError {
   constructor(message: Message = '') {
       super(`ArithmeticError: ${message}`, 'ArithmeticError');
   }
}
export class IndexErrorError extends VnodeError {
   constructor(message: Message = '') {
       super(`IndexErrorError: ${message}`, 'IndexErrorError');
   }
}
export class KeyErrorError extends VnodeError {
   constructor(message: Message = '') {
       super(`KeyErrorError: ${message}`, 'KeyErrorError');
   }
}
export class NotCallableError extends VnodeError {
   constructor(message: Message = '') {
       super(`NotCallableError: ${message}`, 'NotCallableError');
   }
}
export class AssertionError extends VnodeError {
   constructor(message: Message = '') {
       super(`AssertionError: ${message}`, 'AssertionError');
   }
}