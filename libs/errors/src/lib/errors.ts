import { VnodeError } from './vnode-error.js';
export class TypeError extends VnodeError {
   constructor(message = '') {
       super('TypeError: ' + message, 'TypeError');
   }
}
export class TypeErrorError extends VnodeError {
   constructor(message = '') {
       super('TypeErrorError: ' + message, 'TypeErrorError');
   }
}
export class InvalidFormatError extends VnodeError {
   constructor(message = '') {
       super('InvalidFormatError: ' + message, 'InvalidFormatError');
   }
}
export class PatternMismatchError extends VnodeError {
   constructor(message = '') {
       super('PatternMismatchError: ' + message, 'PatternMismatchError');
   }
}
export class NotANumberError extends VnodeError {
   constructor(message = '') {
       super('NotANumberError: ' + message, 'NotANumberError');
   }
}
export class NotAnIntegerError extends VnodeError {
   constructor(message = '') {
       super('NotAnIntegerError: ' + message, 'NotAnIntegerError');
   }
}
export class NonNumericError extends VnodeError {
   constructor(message = '') {
       super('NonNumericError: ' + message, 'NonNumericError');
   }
}
export class InvalidCharacterError extends VnodeError {
   constructor(message = '') {
       super('InvalidCharacterError: ' + message, 'InvalidCharacterError');
   }
}
export class EncodingError extends VnodeError {
   constructor(message = '') {
       super('EncodingError: ' + message, 'EncodingError');
   }
}
export class MalformedJSONError extends VnodeError {
   constructor(message = '') {
       super('MalformedJSONError: ' + message, 'MalformedJSONError');
   }
}
export class InvalidDateError extends VnodeError {
   constructor(message = '') {
       super('InvalidDateError: ' + message, 'InvalidDateError');
   }
}
export class UndefinedError extends VnodeError {
   constructor(message = '') {
       super('UndefinedError: ' + message, 'UndefinedError');
   }
}
export class MissingError extends VnodeError {
   constructor(message = '') {
       super('MissingError: ' + message, 'MissingError');
   }
}
export class RequiredError extends VnodeError {
   constructor(message = '') {
       super('RequiredError: ' + message, 'RequiredError');
   }
}
export class NullValueError extends VnodeError {
   constructor(message = '') {
       super('NullValueError: ' + message, 'NullValueError');
   }
}
export class EmptyStringError extends VnodeError {
   constructor(message = '') {
       super('EmptyStringError: ' + message, 'EmptyStringError');
   }
}
export class EmptyArrayError extends VnodeError {
   constructor(message = '') {
       super('EmptyArrayError: ' + message, 'EmptyArrayError');
   }
}
export class EmptyCollectionError extends VnodeError {
   constructor(message = '') {
       super('EmptyCollectionError: ' + message, 'EmptyCollectionError');
   }
}
export class NoSelectionError extends VnodeError {
   constructor(message = '') {
       super('NoSelectionError: ' + message, 'NoSelectionError');
   }
}
export class TooFewError extends VnodeError {
   constructor(message = '') {
       super('TooFewError: ' + message, 'TooFewError');
   }
}
export class TooManyError extends VnodeError {
   constructor(message = '') {
       super('TooManyError: ' + message, 'TooManyError');
   }
}
export class MinLengthError extends VnodeError {
   constructor(message = '') {
       super('MinLengthError: ' + message, 'MinLengthError');
   }
}
export class MaxLengthError extends VnodeError {
   constructor(message = '') {
       super('MaxLengthError: ' + message, 'MaxLengthError');
   }
}
export class LengthError extends VnodeError {
   constructor(message = '') {
       super('LengthError: ' + message, 'LengthError');
   }
}
export class MinimumError extends VnodeError {
   constructor(message = '') {
       super('MinimumError: ' + message, 'MinimumError');
   }
}
export class MaximumError extends VnodeError {
   constructor(message = '') {
       super('MaximumError: ' + message, 'MaximumError');
   }
}
export class RangeError extends VnodeError {
   constructor(message = '') {
       super('RangeError: ' + message, 'RangeError');
   }
}
export class NegativeError extends VnodeError {
   constructor(message = '') {
       super('NegativeError: ' + message, 'NegativeError');
   }
}
export class PositiveError extends VnodeError {
   constructor(message = '') {
       super('PositiveError: ' + message, 'PositiveError');
   }
}
export class PrecisionError extends VnodeError {
   constructor(message = '') {
       super('PrecisionError: ' + message, 'PrecisionError');
   }
}
export class TooSmallError extends VnodeError {
   constructor(message = '') {
       super('TooSmallError: ' + message, 'TooSmallError');
   }
}
export class TooLargeError extends VnodeError {
   constructor(message = '') {
       super('TooLargeError: ' + message, 'TooLargeError');
   }
}
export class UniqueError extends VnodeError {
   constructor(message = '') {
       super('UniqueError: ' + message, 'UniqueError');
   }
}
export class DuplicateEntryError extends VnodeError {
   constructor(message = '') {
       super('DuplicateEntryError: ' + message, 'DuplicateEntryError');
   }
}
export class ForbiddenNameError extends VnodeError {
   constructor(message = '') {
       super('ForbiddenNameError: ' + message, 'ForbiddenNameError');
   }
}
export class InvalidNameError extends VnodeError {
   constructor(message = '') {
       super('InvalidNameError: ' + message, 'InvalidNameError');
   }
}
export class ForbiddenValueError extends VnodeError {
   constructor(message = '') {
       super('ForbiddenValueError: ' + message, 'ForbiddenValueError');
   }
}
export class MismatchError extends VnodeError {
   constructor(message = '') {
       super('MismatchError: ' + message, 'MismatchError');
   }
}
export class NotAllowedError extends VnodeError {
   constructor(message = '') {
       super('NotAllowedError: ' + message, 'NotAllowedError');
   }
}
export class CircularReferenceError extends VnodeError {
   constructor(message = '') {
       super('CircularReferenceError: ' + message, 'CircularReferenceError');
   }
}
export class ConstraintViolationError extends VnodeError {
   constructor(message = '') {
       super('ConstraintViolationError: ' + message, 'ConstraintViolationError');
   }
}
export class ReadOnlyError extends VnodeError {
   constructor(message = '') {
       super('ReadOnlyError: ' + message, 'ReadOnlyError');
   }
}
export class UnauthorizedError extends VnodeError {
   constructor(message = '') {
       super('UnauthorizedError: ' + message, 'UnauthorizedError');
   }
}
export class ForbiddenError extends VnodeError {
   constructor(message = '') {
       super('ForbiddenError: ' + message, 'ForbiddenError');
   }
}
export class InvalidCredentialsError extends VnodeError {
   constructor(message = '') {
       super('InvalidCredentialsError: ' + message, 'InvalidCredentialsError');
   }
}
export class AccountLockedError extends VnodeError {
   constructor(message = '') {
       super('AccountLockedError: ' + message, 'AccountLockedError');
   }
}
export class SessionExpiredError extends VnodeError {
   constructor(message = '') {
       super('SessionExpiredError: ' + message, 'SessionExpiredError');
   }
}
export class AccountDisabledError extends VnodeError {
   constructor(message = '') {
       super('AccountDisabledError: ' + message, 'AccountDisabledError');
   }
}
export class InvalidStateError extends VnodeError {
   constructor(message = '') {
       super('InvalidStateError: ' + message, 'InvalidStateError');
   }
}
export class InUseError extends VnodeError {
   constructor(message = '') {
       super('InUseError: ' + message, 'InUseError');
   }
}
export class NotImplementedError extends VnodeError {
   constructor(message = '') {
       super('NotImplementedError: ' + message, 'NotImplementedError');
   }
}
export class SystemError extends VnodeError {
   constructor(message = '') {
       super('SystemError: ' + message, 'SystemError');
   }
}
export class TimeoutError extends VnodeError {
   constructor(message = '') {
       super('TimeoutError: ' + message, 'TimeoutError');
   }
}
export class NotFoundError extends VnodeError {
   constructor(message = '') {
       super('NotFoundError: ' + message, 'NotFoundError');
   }
}
export class ResourceExhaustedError extends VnodeError {
   constructor(message = '') {
       super('ResourceExhaustedError: ' + message, 'ResourceExhaustedError');
   }
}
export class IOErrorError extends VnodeError {
   constructor(message = '') {
       super('IOErrorError: ' + message, 'IOErrorError');
   }
}
export class NetworkError extends VnodeError {
   constructor(message = '') {
       super('NetworkError: ' + message, 'NetworkError');
   }
}
export class PermissionDeniedError extends VnodeError {
   constructor(message = '') {
       super('PermissionDeniedError: ' + message, 'PermissionDeniedError');
   }
}
export class DiskFullError extends VnodeError {
   constructor(message = '') {
       super('DiskFullError: ' + message, 'DiskFullError');
   }
}
export class ConfigurationError extends VnodeError {
   constructor(message = '') {
       super('ConfigurationError: ' + message, 'ConfigurationError');
   }
}
export class DependencyError extends VnodeError {
   constructor(message = '') {
       super('DependencyError: ' + message, 'DependencyError');
   }
}
export class SyntaxErrorError extends VnodeError {
   constructor(message = '') {
       super('SyntaxErrorError: ' + message, 'SyntaxErrorError');
   }
}
export class ReferenceErrorError extends VnodeError {
   constructor(message = '') {
       super('ReferenceErrorError: ' + message, 'ReferenceErrorError');
   }
}
export class ArithmeticErrorError extends VnodeError {
   constructor(message = '') {
       super('ArithmeticErrorError: ' + message, 'ArithmeticErrorError');
   }
}
export class IndexErrorError extends VnodeError {
   constructor(message = '') {
       super('IndexErrorError: ' + message, 'IndexErrorError');
   }
}
export class KeyErrorError extends VnodeError {
   constructor(message = '') {
       super('KeyErrorError: ' + message, 'KeyErrorError');
   }
}
export class NotCallableError extends VnodeError {
   constructor(message = '') {
       super('NotCallableError: ' + message, 'NotCallableError');
   }
}
export class AssertionErrorError extends VnodeError {
   constructor(message = '') {
       super('AssertionErrorError: ' + message, 'AssertionErrorError');
   }
}