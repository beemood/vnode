import type { ErrorClassName, ErrorMessage, PackageName } from '@vnode/types';

export abstract class VnodeError extends Error {
  protected static packageName?: string;
  public readonly packageName = VnodeError.packageName;
  public readonly isOperational: boolean;
  public readonly errorCode: string;

  constructor(
    message: ErrorMessage,
    errorCode: ErrorClassName = 'VnodeError',
    httpStatusCode = 5000
  ) {
    super(message);
    this.errorCode = errorCode;
    if (httpStatusCode < 500) {
      this.isOperational = true;
    } else {
      this.isOperational = false;
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    // Set the prototype explicitly to ensure `instanceof` checks work correctly
    Object.setPrototypeOf(this, VnodeError.prototype);
  }

  /**
   * Set the packageName so you know which library is throwing the error.
   * @param packageName
   */
  static setPackageName(packageName: PackageName) {
    this.packageName = packageName;
  }
}
