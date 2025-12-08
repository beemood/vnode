import { shouldDebug } from './should-debug.js';

/**
 * Function decorated by this decorator only runs when the DEBUG mode is activated for the logger instance.
 * Each logger has a context value. To activate the logger `process.env.DEBUG` should be either set `*` or the context value of the specific logger.
 * @returns - {@link MethodDecorator}
 */
export function Debug(): MethodDecorator {
  return (...args: any[]) => {
    const descriptor = args[2];
    const originalMethod = descriptor.value as any;

    descriptor.value = function (...args: any[]) {
      if (shouldDebug(this.context)) {
        originalMethod.apply(this, args);
      } else {
        return;
      }
    };
  };
}
