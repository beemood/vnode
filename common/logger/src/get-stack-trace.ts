/**
 * Get the exact file and line the log is ran.
 * @param lineNumber line number is 3 by default. If the function is overriden by a decorator then set 4.
 * @returns
 */
export function getStackTrace(lineNumber = 3): string {
  const error = new Error();
  const stackLines = error.stack ? error.stack.split('\n') : [];
  const callerLine = stackLines[lineNumber];

  return callerLine;
}
